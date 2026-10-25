// Simple reactive store for modal state without heavyweight dependencies
import { useState, useEffect } from "react";

let listeners = [];
let isResumeOpen = false;

export function openResumeModal() {
  isResumeOpen = true;
  listeners.forEach((fn) => fn(isResumeOpen));
}

export function closeResumeModal() {
  isResumeOpen = false;
  listeners.forEach((fn) => fn(isResumeOpen));
}

export function useResumeModal() {
  const [open, setOpen] = useState(isResumeOpen);

  useEffect(() => {
    const handler = (state) => setOpen(state);
    listeners.push(handler);
    return () => {
      listeners = listeners.filter((fn) => fn !== handler);
    };
  }, []);

  return {
    isOpen: open,
    open: openResumeModal,
    close: closeResumeModal,
  };
}
