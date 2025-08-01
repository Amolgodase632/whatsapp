import { create } from "zustand"
import { persist } from 'zustand/middleware'

const useThemeStore = create(
  persist(
    (set) => ({
      theme: 'light', 
      setTheme: (theme) => set({ theme }),
    }),
    {
      name: 'theme-storage', 
      getStorage: () => localStorage,
    }
  )
)

export default useThemeStore

