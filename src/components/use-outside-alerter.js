import * as React from "react";
import { useEffect } from "react";

export function useOutsideAlerter(ref:React.MutableRefObject<any>, callback:() => void) {
  useEffect(() => {
    /**
     * Alert if clicked on outside of element
     */
    function handleClickOutside(event:MouseEvent) {
      if (ref.current && !ref.current.contains(event.target)) {
        // alert("You  outside of me!");
        callback();
      }
    }
    // Bind the event listener
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      // Unbind the event listener on clean up
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [ref, callback]);
}