import React, { useEffect, useRef, useState, useCallback } from "react";

const fetchPosts = async (page, limit = 10) => {
  // Simulated API delay
  await new Promise((res) => setTimeout(res, 800));

  // Simulated API end condition
  if (page > 5) {
    return { data: [], hasMore: false };
  }

  return {
    data: Array.from({ length: limit }, (_, i) => ({
      id: `post_${page}_${i}`,
      text: `Post ${i + 1 + (page - 1) * limit}`,
    })),
    hasMore: true,
  };
};

export default function InfiniteScrollFeed() {
  const [posts, setPosts] = useState([]);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);
  const [loading, setLoading] = useState(false);
  const observerRef = useRef(null);

  const loadMore = useCallback(async () => {
    if (loading || !hasMore) return;

    setLoading(true);
    try {
      const { data, hasMore: more } = await fetchPosts(page);
      setPosts((prev) => [...prev, ...data]);
      setHasMore(more);
      setPage((prev) => prev + 1);
    } catch (err) {
      console.error("Failed to fetch posts:", err);
    } finally {
      setLoading(false);
    }
  }, [page, hasMore, loading]);

  // Setup Intersection Observer
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const lastEntry = entries[0];
        if (lastEntry.isIntersecting) {
          loadMore();
        }
      },
      { threshold: 1.0 }
    );

    const currentRef = observerRef.current;
    if (currentRef) observer.observe(currentRef);

    return () => {
      if (currentRef) observer.unobserve(currentRef);
    };
  }, [loadMore]);

  return (
    <div style={{ padding: "16px", maxWidth: "400px", margin: "0 auto" }}>
      <h1
        style={{ fontSize: "20px", fontWeight: "bold", marginBottom: "16px" }}
      >
        Infinite Scroll Feed
      </h1>

      <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
        {posts.map((post) => (
          <li
            key={post.id}
            style={{
              padding: "12px",
              border: "1px solid #ddd",
              borderRadius: "8px",
              marginBottom: "8px",
              backgroundColor: "#f9f9f9",
            }}
          >
            {post.text}
          </li>
        ))}
      </ul>

      {/* Sentinel element for intersection observer */}
      <div ref={observerRef} style={{ height: "40px" }} />

      {loading && <p style={{ color: "#666", marginTop: "8px" }}>Loading...</p>}
      {!hasMore && (
        <p style={{ color: "#999", marginTop: "8px" }}>No more posts</p>
      )}
    </div>
  );
}
