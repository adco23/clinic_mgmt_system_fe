import { create } from 'zustand'

const useStore = create((set) => ({
  user: null,
  updateUser: (data) => set((state) => ({ ...state, user: data }))
}));

export default useStore;
