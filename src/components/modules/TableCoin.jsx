import chartUp from "../../assets/chart-up.svg"
import chartDown from "../../assets/chart-down.svg"
import { RotatingLines } from 'react-loader-spinner'
import styles from "./TableCoin.module.css"
function TableCoin({coins,isLoading}) {
  console.log(coins)
  return (
    <div className={styles.container}>
       {isLoading?(<RotatingLines strokeWidth="2" strokeColor="#3874ff"/>):(
         <table className={styles.table}>
            <thead>
                <tr>
                    <th>Coin</th>
                    <th>Name</th>
                    <th>Price</th>
                    <th>24h</th>
                    <th>Total Volume</th>
                    <th></th>
                </tr>
            </thead>
            <tbody>
                {coins.map((coin)=>(
                   <TableRow key={coin.id} coin={coin}/>
                ))}
            </tbody>
        </table>
       )}
    </div>
  )
}

export default TableCoin

const TableRow=({coin:{
    name,
    image,
    symbol,
    current_price,
    price_change_percentage_24h:price_change
    ,total_volume}})=>{
        return(
         <tr >
                        <td>
                            <div className={styles.symbol}>
                                <img src={image}/>
                                <span>{symbol.toUpperCase()}</span>
                            </div>
                        </td>
                        <td>{name}</td>
                        <td>${current_price.toLocaleString()}</td>
                        <td className={price_change>0?styles.success:styles.error}> {price_change != null ? price_change.toFixed(2) : "0.00"}%</td>
                        <td>{total_volume.toLocaleString()}</td>
                        <td>
                            <img src={price_change>0?chartUp:chartDown} alt={name} />
                        </td>
                    </tr>
        )
}