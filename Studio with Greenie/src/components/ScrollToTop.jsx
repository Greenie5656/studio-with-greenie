import { useEffect } from "react";
import { useLocation } from "react-router-dom";

// This component will scroll to top whenever the route changes
function ScrollToTop() {
  const { pathname } = useLocation();
  
  useEffect(() => {
    // Use document.documentElement for more reliable scrolling
    document.documentElement.scrollTo({
      top: 0,
      left: 0,
      behavior: "instant", // Use instant instead of smooth for immediate effect
    });
    
    // Also use window.scrollTo as a fallback
    window.scrollTo(0, 0);
    
    // Log for debugging
    console.log("ScrollToTop triggered for path:", pathname);
  }, [pathname]); // This effect runs when the pathname changes
  
  return null; // This component doesn't render anything
}

export default ScrollToTop;