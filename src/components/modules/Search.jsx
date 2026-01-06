import { useEffect, useState } from "react"
import {searchCoin} from "../../services/cryptoApi";

function Search({currency,setCurrency}) {
    const [text,setText]=useState("")
    const [coin,setCoin]=useState([])
    useEffect(()=>{
        const controller=new AbortController()
            if(!text) return
            const search=async ()=>{
        try {
            const res=await fetch(searchCoin(text),{signal:controller.signal})
            const json=await res.json()
            if(json.coins) {
                setCoin(json.coins)
            }
            else{
                console.log(json.status.error_message)
            }
         } 

         catch (error) {
            if(error.message !=="AbortError"){
               console.log(error.message)
            }
        }
        }

        search()
  

         return()=>{
            controller.abort()
         }

    },[text])
  return (
    <div>
        <input type="text"  placeholder="search" value={text} onChange={(e)=>setText(e.target.value)}/>
        <select value={currency} onChange={(e)=>setCurrency(e.target.value)}>
            <option value="usd">USD</option>
            <option value="eur">EUR</option>
            <option value="jpy">JPY</option>
        </select>
    </div>
  )
}

export default Search