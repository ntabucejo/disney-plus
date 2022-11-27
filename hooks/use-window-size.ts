import { useEffect, useState } from "react";

const getWindowSize = () => {
  const { innerWidth, innerHeight } = window;
  return { innerWidth, innerHeight };
};

const useWindowSize = () => {
  const [windowSize, setWindowSize] = useState<any>(null);

  useEffect(() => {
    if (!windowSize) {
      setWindowSize(getWindowSize());
    }

    function handleWindowResize() {
      setWindowSize(getWindowSize());
    }

    window.addEventListener("resize", handleWindowResize);

    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);

  if (!windowSize)
    return {
      width: null,
      height: null,
    };

  return {
    width: windowSize.innerWidth,
    height: windowSize.innerHeight,
  };
};

export default useWindowSize;
