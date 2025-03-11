import { create } from "zustand";

interface AboutStoreProps {
  aboutSelected: string;
  setAboutSelected: (
    value: string
  ) => void;
}

export const useAboutSelectedStore = create<AboutStoreProps>((set) => ({
  aboutSelected: "skills",
  setAboutSelected: (value) => set({ aboutSelected: value }),
}));
