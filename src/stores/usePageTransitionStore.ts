import { create } from "zustand";

interface PageTransitionStore {
  pageTransition: boolean;
  pageChange: boolean;
  pageHidden: boolean;
  setPageTransition: (transition: boolean) => void;
  setPageChange: (change: boolean) => void;
  setPageHidden: (hidden: boolean) => void;
}

export const usePageTransitionStore = create<PageTransitionStore>((set) => ({
  pageTransition: true,
  pageChange: localStorage.getItem("pageChange")
    ? JSON.parse(localStorage.getItem("pageChange")!)
    : false,
  pageHidden: localStorage.getItem("pageHidden")
    ? JSON.parse(localStorage.getItem("pageHidden")!)
    : false,

  setPageTransition: (value) => {
    set({ pageTransition: value });
  },
  setPageChange: (value) => {
    set({ pageChange: value });
    localStorage.setItem("pageChange", JSON.stringify(value));
  },
  setPageHidden: (value) => {
    set({ pageHidden: value });
    localStorage.setItem("pageHidden", JSON.stringify(value));
  },
}));
