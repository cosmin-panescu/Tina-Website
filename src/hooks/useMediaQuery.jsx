import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'

const useMediaQuery = (query) => {
    const [matches, setMatches] = useState(false);

    useEffect(() => {
        const media = window.matchMedia(query);

        if (media.matches !== matches) {
            setMatches(media.matches);
        }

        const listener = () => setMatches(media.matches);
        window.addEventListener('resize', listener);
    }, [matches, query]);

    return matches;
}

export default useMediaQuery