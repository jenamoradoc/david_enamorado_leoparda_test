import React from 'react'
import { useMenu } from '../hooks/useMenu'
import { MenuContext } from './MenuContext'

export const MenuProvider = ({ children }) => {

  const { menuList, handleNewMenu, handleDeleteMenu, handleEditMenu } = useMenu()

  return (
    <MenuContext.Provider value={ { menuList, handleDeleteMenu, handleEditMenu, handleNewMenu } }>
      { children }
    </MenuContext.Provider>
  )
}
