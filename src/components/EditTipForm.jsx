import { useContext } from "react"
import { MenuContext } from "../context/MenuContext"
import { useForm } from "../hooks/useForm"

export const EditTipForm = ({ editMenuItem ={} }) => {

  const { handleEditMenu } = useContext( MenuContext )

  const { itemState, id, name, cost, amount, onInputChange, onResetForm } = useForm({
    id: editMenuItem.id,
    name: editMenuItem.name,
    cost: editMenuItem.cost,
    amount: editMenuItem.amount
  })

  const onFormSubmit = ( event ) => {
    event.preventDefault();
    //if ( name.length <= 1 ) return;

    handleEditMenu( itemState )
    //onResetForm()

  }



  return (
    <>
        <h5>Edit Menu Item</h5>
        <hr />
        <form onSubmit={ onFormSubmit }>
            <label className="form-label">Name</label>
            <input 
              type="text" 
              className="form-control" 
              placeholder='Name'
              name='name'
              value={ name }
              onChange={ onInputChange }
            />
            <label className="form-label">Cost</label>
            <input 
              type="number"
              className="form-control"               
              name='cost'
              value={ cost }
              onChange={ onInputChange }
            />
            <label className="form-label">Amount</label>
            <input 
              type="number"
              className="form-control"               
              name='amount'
              value={ amount }
              onChange={ onInputChange }
            />

            <button 
              type="button"
              className="btn btn-primary mt-2"   
              onClick={ onFormSubmit }           
            >
              Save
            </button>

        </form>

    </>
  )
}
