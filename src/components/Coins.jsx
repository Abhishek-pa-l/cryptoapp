import React from 'react'
import axios from 'axios'
import { useState,useEffect } from 'react'
import { server } from '../index'
import CoinCard from './CoinCard'
import Loader from './Loader'
import { HStack, Radio, RadioGroup } from '@chakra-ui/react'
import CoinDetails from './CoinDetails'

const Coins = () => {
    const[coins,setCoins]=useState([])
    const[loader,setLoader]=useState(true)
  const[currency,setCurrency]  = useState("inr")    

    const[page,setPage]=useState(1)
    const[error,setError]=useState(false)

    const currencySymbol =currency === "inr" ? "₹" : currency === "eur" ? "€" : "$";

    const btns = new Array(100).fill(1)


    const changePage =(page)=>{
        setPage(page);
        setLoader(true)
    }


    useEffect(() => {
      const fetchCoins=async()=>{
        try{
            const {data}=await axios.get(`${server}/coins/markets?vs_currency=${currency}&page=${page}`)
            console.log(data)
            setCoins(data)
            setLoader(false)
        }
        catch(error){
            setError(true)
            setLoader(false)
        }
      }
      fetchCoins()
      
    }, [page,currency])
    
  return (
    loader?(<Loader/>):(<> <RadioGroup value={currency} onChange={setCurrency} p={"8"}>
    <HStack spacing={"4"}>
      <Radio value={"inr"}>INR</Radio>
      <Radio value={"usd"}>USD</Radio>
      <Radio value={"eur"}>EUR</Radio>
    </HStack>
  </RadioGroup>
      
   <div className="coins">
    <div className='actual-coin'>
    {
  coins.map((i,index)=>{
    
        return <CoinCard key={index} id={i.id}
        
        name={i.name}
        price={i.current_price}
        img={i.image}
        symbol={i.symbol}
        currencySymbol={currencySymbol}/>
    })}
    </div>
    <div className="btns">{
        btns.map((item,index)=>{
            return <button onClick={()=>changePage(index+1)}>{index+1}</button>
        })
    }
    </div>
   

   </div>
   </>
   )
  )}


export default Coins
