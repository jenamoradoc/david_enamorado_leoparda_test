
import { useState } from "react"
import { MenuList } from "./MenuList"
import { AddTipForm } from './AddTipForm'
import { EditTipForm } from './EditTipForm'

export const MenuDetails = () => {
    const [actionsState, setActions] = useState({
        actionForm: 'edit'
    })

    const { actionForm } = actionsState

    const [editItemState, setEditItemState] = useState({
        id:0,
        name:'',
        cost:0,
        amount:0
    })



    const onShowEditForm = (menuItem) => {
        setActions({
            ...actionsState,
            actionForm: 'edit'
        })

        setEditItemState({
            ...editItemState,
            id: menuItem.id,
            name: menuItem.name,
            cost: menuItem.cost,
            amount: menuItem.amount
        })
    }

  return (
    <>
        <div className="row">
            <div className="col-md-5">
                <span className="d-flex justify-content-between align-items-center">
                    <h5>Menu Details</h5>    
                    <button 
                        className="btn btn-sm btn-success"
                        onClick={ () => setActions({
                            ...actionsState,
                            actionForm: 'add'
                        }) }
                    >
                        Add
                    </button>
                </span>                
                <hr />
                <MenuList showEditForm={ onShowEditForm }/>
            </div>
            <div className="col-md-7">
                {
                    actionForm === 'add' ? <AddTipForm />
                                         : <EditTipForm editMenuItem={ editItemState } />
                }                
            </div>
        </div>
    </>
  )
}
