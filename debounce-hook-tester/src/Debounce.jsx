import React, { useEffect, useState } from 'react'

const useDebounce = (text, delay) => {
    const [debounce, setDebounce] = useState(text);
    useEffect(() => {
        const timer = setTimeout(() => {
            setDebounce(text);
        }, delay)

        return () => {
            clearTimeout(timer)
        }
    }, [text, delay])

    return debounce;
}

const Debounce = () => {

    const [text, setText] = useState("");
    const debouncedText = useDebounce(text, 1000);
    
  return (
    <div>
        <h2>Debounce Hook Tester</h2>
        <input 
            type="text"
            placeholder='Type something...'
            value={text}
            onChange={(e) => setText(e.target.value)}
            style={{marginRight: "10px"}}
        />
        <p>Debounced Value: {debouncedText}</p>
    </div>
  )
}

export default Debounce
