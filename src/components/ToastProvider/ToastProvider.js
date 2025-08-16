import React from "react";

export const ToastContext = React.createContext();

function ToastProvider({ children }) {
  const [toasts, setToasts] = React.useState([]);

  function addToast(message, variant) {
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

  return (
    <ToastContext.Provider value={{ toasts, addToast, dismissToast }}>
      {children}
    </ToastContext.Provider>
  );
}

export default ToastProvider;
