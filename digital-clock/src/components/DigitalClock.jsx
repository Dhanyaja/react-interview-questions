export default function DigitalClock({
  timezone,
  hour12 = undefined,
  showSeconds = true,
  tickInterval = 1000,
  pauseOnHide = true,
  locale = undefined,
  className,
  style,
}) {
  // state holds a Date instance (or timestamp) for consistent formatting
  const [now, setNow] = useState(() =>
    typeof Date !== "undefined" ? new Date() : null
  );
  const intervalRef = useRef(null);
  const timeoutRef = useRef(null);

  // helper to clear timer resources
  const clearTimers = useCallback(() => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
      timeoutRef.current = null;
    }
  }, []);

  // Single tick function
  const tick = useCallback(() => {
    setNow(new Date());
  }, []);

  // Set up aligned interval: wait until next exact tick (boundary) then start setInterval
  useEffect(() => {
    if (typeof window === "undefined") return undefined; // SSR safety

    clearTimers();

    // If we choose to pause when hidden and document is hidden now, don't start timers.
    if (pauseOnHide && document.hidden) {
      return undefined;
    }

    // Align to the tick boundary (e.g., exact second)
    const nowMs = Date.now();
    const delay = tickInterval - (nowMs % tickInterval);

    // First update exactly at the boundary
    timeoutRef.current = setTimeout(() => {
      tick(); // immediate aligned update
      // then start steady interval
      intervalRef.current = setInterval(tick, tickInterval);
      timeoutRef.current = null;
    }, delay);

    return () => {
      clearTimers();
    };
  }, [tickInterval, tick, pauseOnHide, clearTimers]);

  // Pause/resume on visibility change to save CPU if requested
  useEffect(() => {
    if (typeof document === "undefined") return undefined;

    if (!pauseOnHide) return undefined;

    const handleVisibility = () => {
      if (document.hidden) {
        // stop timers
        clearTimers();
      } else {
        // when tab becomes visible, snap to current time and re-start timers
        setNow(new Date());
        // restart timers by re-running the effect above; easiest is to manually align & start here
        const nowMs = Date.now();
        const delay = tickInterval - (nowMs % tickInterval);
        timeoutRef.current = setTimeout(() => {
          tick();
          intervalRef.current = setInterval(tick, tickInterval);
          timeoutRef.current = null;
        }, delay);
      }
    };

    document.addEventListener("visibilitychange", handleVisibility);
    return () => {
      document.removeEventListener("visibilitychange", handleVisibility);
    };
  }, [pauseOnHide, tickInterval, tick, clearTimers]);

  // cleanup on unmount
  useEffect(() => {
    return () => {
      clearTimers();
    };
  }, [clearTimers]);

  // Formatting with Intl.DateTimeFormat (handles locale + timezone + 12/24)
  const formattedTime = (() => {
    if (!now) return "";
    try {
      const options = {
        hour: "numeric",
        minute: "2-digit",
        second: showSeconds ? "2-digit" : undefined,
        hour12: hour12 === undefined ? undefined : !!hour12,
        timeZone: timezone,
      };
      // Remove undefined props to avoid old browser issues
      Object.keys(options).forEach(
        (k) => options[k] === undefined && delete options[k]
      );
      return new Intl.DateTimeFormat(locale || undefined, options).format(now);
    } catch (e) {
      // Fallback formatting (safe)
      const date = now;
      const pad = (n) => String(n).padStart(2, "0");
      let hours = date.getHours();
      let minutes = pad(date.getMinutes());
      let seconds = pad(date.getSeconds());
      if (hour12 !== undefined ? hour12 : false) {
        const suffix = hours >= 12 ? " PM" : " AM";
        hours = ((hours + 11) % 12) + 1;
        return `${hours}:${minutes}${
          showSeconds ? `:${seconds}` : ""
        }${suffix}`;
      }
      return `${pad(hours)}:${minutes}${showSeconds ? `:${seconds}` : ""}`;
    }
  })();

  return (
    <div
      role="timer"
      aria-live="polite"
      aria-atomic="true"
      className={className}
      style={{
        fontFamily:
          "system-ui, -apple-system, 'Segoe UI', Roboto, 'Helvetica Neue', Arial",
        fontSize: 24,
        ...style,
      }}
    >
      {formattedTime}
    </div>
  );
}
