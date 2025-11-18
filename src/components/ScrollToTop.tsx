// import { useEffect } from 'react';
// import { useLocation } from 'react-router-dom';

// const ScrollToTop = () => {
//   const { pathname } = useLocation();

//   useEffect(() => {
//     window.scrollTo(0, 0);
//   }, [pathname]);

//   return null;
// };

// export default ScrollToTop;
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    // Try scrolling window
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "instant", // can also use "smooth"
    });

    // Also check if the main scrollable container exists
    const main = document.querySelector("main");
    if (main) {
      main.scrollTo({
        top: 0,
        left: 0,
        behavior: "instant",
      });
    }
  }, [pathname]);

  return null;
};

export default ScrollToTop;
