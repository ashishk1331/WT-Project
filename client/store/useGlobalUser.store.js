import { create } from "zustand";

const initialState = {
  firstName: "",
  lastName: "",
  branch: "",
  rollno: "",
  email: "",
};

export const useStore = create((set) => ({
  // user related data
  ...initialState,
  setData(data) {
    set((prev) => { ...prev,  ...data });
  },
  reset(data) {
    set(initialState);
  },
}));
