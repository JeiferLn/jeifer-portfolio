import { create } from "zustand";

interface ProjectStore {
  projectCounter: number;
  incrementProjectCounter: () => void;
  decrementProjectCounter: () => void;
}

export const useProjectStore = create<ProjectStore>((set) => ({
  projectCounter: 0,
  incrementProjectCounter: () =>
    set((state) => ({ projectCounter: state.projectCounter + 1 })),
  decrementProjectCounter: () =>
    set((state) => ({ projectCounter: state.projectCounter - 1 })),
}));
