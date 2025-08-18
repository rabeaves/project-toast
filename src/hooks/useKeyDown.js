import React from "react";

function useKeyDown(key, callback) {
  React.useEffect(() => {
    function handleKeyPress(event) {
      if (event.code === key) {
        console.log("Escape key pressed");
        callback(event);
      }
    }
    window.addEventListener("keydown", handleKeyPress);

    return () => window.removeEventListener("keydown", handleKeyPress);
  }, [key, callback]);
}

export default useKeyDown;
