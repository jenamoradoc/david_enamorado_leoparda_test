import { useReducer } from "react"
import { menuReducer } from "../components/menuReducer"


export const useMenu = () => {
    const initialState = [
        { id: 1, name: 'Hamburguesa', cost: 34.222, amount: 2 },
        { id: 2, name: 'Papas Fritas', cost: 15, amount: 4 },
    ]

    const [menuList, dispatchMenu] = useReducer(menuReducer, initialState)

    const handleNewMenu = ( menu ) => {
        console.log('handleNewMenu: ', menu);
        const action = {
            type: '[MENU]AddMenu',
            payload: menu,
        }

        dispatchMenu( action )
    }

    const handleDeleteMenu = ( id ) => {
        dispatchMenu({
            type: '[MENU]DeleteMenu',
            payload: id,
        })
    }

    const handleEditMenu = ( menu ) => {
        const action = {
            type: '[MENU]EditMenu',
            payload: menu,
        }

        dispatchMenu( action )
    }

    return {
        ...menuList,
        menuList,
        handleNewMenu,
        handleDeleteMenu,
        handleEditMenu,
    }

}