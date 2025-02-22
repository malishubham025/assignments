import { useRef, useState, useEffect } from "react";

function Carousel() {
  const containerRef = useRef(null); // Ref for the carousel container
  const [position, setPosition] = useState(0); // Track scroll position
  const [maxScroll, setMaxScroll] = useState(0); // Track maximum scroll position
  const [state, setState] = useState(true); 
  // Calculate the maximum scroll position
  useEffect(() => {
    if (containerRef.current) {
      const containerWidth = containerRef.current.offsetWidth;
      // let total=0;
      let totalChildrenWidth = 0;
      Array.from(containerRef.current.children).map((child)=>{
        totalChildrenWidth=totalChildrenWidth+child.offsetWidth + 16;
      })
      
      setMaxScroll(totalChildrenWidth - containerWidth);
    }
  }, []);

  // Scroll left
  const handleLeftClick = () => {

    setPosition((prev) => Math.max(prev - 300, 0)); // Scroll by 300px (adjust as needed)
  };
  let forwardInterval,backwordInterval;
  useEffect(() => {
    if (!state) return;

    const interval = setInterval(() => {
      setPosition((prev) => {
        if (prev >= maxScroll) {
          return 0; // Reset to start if at the end
        }
        return Math.min(prev + 100, maxScroll); // Otherwise, scroll right
      });
    }, 2000);

    return () => clearInterval(interval); // Cleanup on unmount or state change
  }, [state, maxScroll]);
  // Scroll right
  const handleRightClick = () => {
    
    setPosition((prev) => Math.min(prev + 300, maxScroll)); // Scroll by 300px (adjust as needed)
  };

  return (
    <div className="relative w-full overflow-hidden" onMouseLeave={()=>{
      setState(true);
    }} 
    onMouseOver={()=>{
      setState(false);
    }}
    >
      {/* Left Button */}
      <button
        className="l-click absolute left-0 top-1/2 z-10 -translate-y-1/2 bg-gray-800 text-white p-3 rounded-full hover:bg-gray-700 transition-all"
        onClick={handleLeftClick}
        onMouseOver={()=>{
        setState(false);
          }
        }
      onMouseLeave={()=>{
        setState(true);
      }}
      >
        ◀
      </button>

      {/* Right Button */}
      <button
        className="r-click absolute right-0 top-1/2 z-10 -translate-y-1/2 bg-gray-800 text-white p-3 rounded-full hover:bg-gray-700 transition-all"
        onClick={handleRightClick}
        onMouseOver={()=>{
          setState(false);
            }
          }
        onMouseLeave={()=>{
          setState(true);
        }}
      >
        ▶
      </button>

      {/* Cards Container */}
      <div
        ref={containerRef}
        className="flex gap-4 transition-transform duration-300"
        style={{ transform: `translateX(${-position}px)` }}
      >
        {/* Cards */}
        {Array.from({ length: 10 }).map((_, index) => (
          <div
            key={index}
            className="flex-shrink-0 w-64 h-64 bg-gray-200 rounded-lg flex items-center justify-center text-2xl font-bold"
          >
            Card {index + 1}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Carousel;