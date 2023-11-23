import { createContext, useContext } from 'react'

interface DrawerContextProps {
  drawerOpen: boolean;
  setDrawerOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export const DrawerContext = createContext<DrawerContextProps | undefined>(undefined)

export function DrawerProvider({ children }) {

  return (
  
  )
}