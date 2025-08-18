import React from "react";
import useKeyDown from "../../hooks/useKeyDown";

export const ToastContext = React.createContext();

function ToastProvider({ children }) {
  const [toasts, setToasts] = React.useState([]);

  function makeToast(message, variant) {
    const nextToast = [
      ...toasts,
      { id: crypto.randomUUID(), message: message, variant: variant },
    ];

    setToasts(nextToast);
  }

  function dismissToast(id) {
    const found = toasts.filter((toast) => toast.id !== id);
    setToasts(found);
  }

  const handleEscapeKey = React.useCallback(() => {
    setToasts([]);
  }, []);

  useKeyDown("Escape", handleEscapeKey);

  return (
    <ToastContext.Provider value={{ toasts, makeToast, dismissToast }}>
      {children}
    </ToastContext.Provider>
  );
}

export default ToastProvider;
