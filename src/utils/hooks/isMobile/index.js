import { useState, useEffect } from 'react';
const MOBILE_BREAKPOINT = 769;
// Hook
const useIsMobile = () => {
	const [isMobile, setIsMobile] = useState(
		window.innerWidth < MOBILE_BREAKPOINT,
	);

	useEffect(() => {
		// Handler to call on window resize
		function handleResize() {
			// Set window width/height to state
			setIsMobile(window.innerWidth < MOBILE_BREAKPOINT);
		}

		// Add event listener
		window.addEventListener('resize', handleResize);

		// Call handler right away so state gets updated with initial window size
		handleResize();

		// Remove event listener on cleanup
		return () => window.removeEventListener('resize', handleResize);
	}, []); // Empty array ensures that effect is only run on mount

	return { isMobile };
};

export default useIsMobile;
