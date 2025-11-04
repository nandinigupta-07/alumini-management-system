import React from 'react';

export function useToast() {
  const [toasts, setToasts] = React.useState([]);
  const addToast = (message, type = 'success') => {
    const id = Math.random().toString(36).slice(2);
    setToasts((t) => [...t, { id, message, type }]);
    setTimeout(() => setToasts((t) => t.filter((x) => x.id !== id)), 2500);
  };
  const ToastContainer = () => (
    <div className="fixed bottom-6 right-6 z-50 space-y-2">
      {toasts.map((t) => (
        <div key={t.id} className={`rounded-lg px-4 py-3 shadow-lg text-white ${t.type === 'success' ? 'bg-green-600' : 'bg-red-600'}`}>{t.message}</div>
      ))}
    </div>
  );
  return { addToast, ToastContainer };
}


