import { MenuProvider } from "../context/MenuProvider"
import { MenuDetails } from "./MenuDetails"
import { TipsForm } from "./TipsForm"

const menu = [
    { id: 1, name: 'Hamburguesa', cost: 34.222, amount: 2 },
    { id: 2, name: 'Papas Fritas', cost: 15, amount: 4 },
]

const menu2 = [
    { id: 1, name: 'Hamburguesa', cost: 34.222, amount: 2 },
    { id: 2, name: 'Papas Fritas', cost: 15, amount: 4 },
]

export const TipsApp = () => {    
  return (
    <MenuProvider>
        <div className="container-fluid">
            <div className="row mt-3">
                <div className="col-md-8">
                    <MenuDetails  />
                </div>
                <div className="col-md-4">
                    <TipsForm />
                </div>
            </div>    
        </div>
    </MenuProvider>
    
    
  )
}
