export const menuReducer = (initialState = [], action) => {
    switch (action.type) {
        case '[MENU]AddMenu':
            console.log('AddMenu: ', action.payload)
            return [ ...initialState, action.payload ]
        
        case '[MENU]DeleteMenu':
            return initialState.filter( menu => menu.id !== action.payload )
        case '[MENU]EditMenu':
            const { id, name, cost, amount } = action.payload
            return initialState.map( menu => {
                if (menu.id === id) {
                    return {
                        ...menu,
                        name: name,
                        cost: cost,
                        amount: amount
                    }
                }
                return menu;
            } )
        default:
            break;
    }
}