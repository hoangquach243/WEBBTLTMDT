import { useState, useEffect } from 'react';

function useDebounce(value, delay) {
    // tao hook useDebounce
    const [debounceValue, setDebounceValue] = useState(value);

    useEffect(() => {
        // tao effect
        const timer = setTimeout(() => {
            setDebounceValue(value);
        }, delay);

        return () => {
            clearTimeout(timer);
        };
    }, [value, delay]); // Thêm delay vào dependency array
    return debounceValue;
}

export default useDebounce;
