import { useContext } from "react"
import { MenuContext } from "../context/MenuContext"

export const ListItem = ( { menu ={}, onShowEdit } ) => {
  const { handleDeleteMenu } = useContext( MenuContext )
  
  return (
    <li className="list-group-item d-flex justify-content-between align-items-start">
        <div className="ms-2 me-auto">
            <div className="fw-bold">                                
                { menu.name }
            </div>
            <span className="d-block">
              <strong>Cost: </strong>  { menu.cost }
            </span>
            <span className="d-block">
              <strong>Amount: </strong>  { menu.amount }
            </span>
            
        </div>
        <span>
          <button 
            className="btn btn-primary btn-sm"
            onClick={ () => onShowEdit(menu)}
          >
            Edit
          </button>
          <button 
            className="btn btn-danger btn-sm ms-2"
            onClick={ () => handleDeleteMenu( menu.id ) }
          >
            Delete
          </button>
        </span>
    </li>
  )
}
