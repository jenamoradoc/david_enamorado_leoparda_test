import { useState } from "react"

export const useForm = ( initialForm = {} ) => {
    const [itemState, setItemState] = useState( initialForm )

    const onInputChange = ({target}) => {
        const { name, value } = target;
        setItemState({
            ...itemState,
            [ name ]: value
        })
    }

    const onResetForm = () => {
        setItemState( initialForm )
    }

    return {
        ...itemState,
        itemState,
        onInputChange,
        onResetForm
    }
}