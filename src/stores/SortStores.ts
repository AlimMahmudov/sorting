import { create } from "zustand";

interface FileSort {
  selectType: string;
  selectCategory: string;
  setSelectType: (type: string) => void;
  setSelectCategory: (category: string) => void;
  resetFile: () => void;
}

export const useFileSort = create<FileSort>((set) => ({
  selectType: "",
  selectCategory: "",
  setSelectType: (type: string) => set({ selectType: type }),
  setSelectCategory: (category: string) => set({ selectCategory: category }),
  resetFile: () => set({ selectType: "", selectCategory: "" }),
}));
