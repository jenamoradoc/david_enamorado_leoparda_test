
export const TablePayment = ({ subTotal = 0, netTotal = 0 }) => {
  return (
    <table className="table table-striped">  
        <tbody>
            <tr>
                <th scope="row">Subtotal</th>
                <td>{ subTotal.toFixed(2) }</td>
            </tr>

            <tr>
                <th scope="row">Total</th>
                <td>{ netTotal.toFixed(2) }</td>
            </tr>
            
        </tbody>
    </table>
  )
}
