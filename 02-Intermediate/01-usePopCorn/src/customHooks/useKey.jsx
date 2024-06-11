import { useEffect } from "react";

export function useKey(keycode, action) {
  useEffect(() => {
    const callback = (e) => {
      if (e.code.toLowerCase() === keycode.toLowerCase()) {
        action();
      }
    };

    document.addEventListener("keydown", callback);

    return () => {
      document.removeEventListener("keydown", callback);
    };
  }, [action, keycode]);
}
