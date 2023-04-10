import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Loader from './Loader'
import { server } from '../index'
import { Badge, HStack, Progress, Radio, RadioGroup, Text, VStack } from '@chakra-ui/react'



const CoinDetails = () => {
    const[coin,setCoin]=useState({})
    const[loader,setLoader]=useState(true)
    const[currency,setCurrency]  = useState("inr")    
    const currencySymbol =currency === "inr" ? "₹" : currency === "eur" ? "€" : "$";
    const params = useParams();
        

    useEffect(() => {
        const fetchCoin=async()=>{
          try{
              const {data}=await axios.get(`https://api.coingecko.com/api/v3/coins/${params.id}`)
              console.log(data)
              setCoin(data)
              setLoader(false)
          }
          catch(error){
            //   setError(true)
              setLoader(false)
          }
        }
        fetchCoin()
        
      }, [params.id,currency])
  return (
    <div className="coin-details">
        {
            loader?<Loader/>:(<>
            <RadioGroup value={currency} onChange={setCurrency} p={"8"}>
    <HStack spacing={"4"}>
      <Radio value={"inr"}>INR</Radio>
      <Radio value={"usd"}>USD</Radio>
      <Radio value={"eur"}>EUR</Radio>
    </HStack>
  </RadioGroup>
  <div className="details">
    <img src={coin.image.large} alt="" />
    <h3> <b>{coin.name}</b> </h3>
    <p><strong>{currencySymbol}{coin.market_data.current_price[currency]}</strong> </p>
    <span><b>{`#${coin.market_cap_rank}`} </b></span>

  </div>
  <div className="detail-list">
  <CustomBar
              high={`${currencySymbol}${coin.market_data.high_24h[currency]}`}
              low={`${currencySymbol}${coin.market_data.low_24h[currency]}`}
            />
            <Item
                title={"Circulating Supply"}
                value={coin.market_data.circulating_supply}
              />
              <Item
                title={"Market Cap"}
                value={`${currencySymbol}${coin.market_data.market_cap[currency]}`}
              />
              <Item
                title={"All Time Low"}
                value={`${currencySymbol}${coin.market_data.atl[currency]}`}
              />
              <Item
                title={"All Time High"}
                value={`${currencySymbol}${coin.market_data.ath[currency]}`}
              />
  </div>
            </>)
}
    </div>)
  
}

export default CoinDetails
const Item =({title,value})=>{
    return <div className='item'> <p>{title} </p>
    <p>{value} </p>
    </div>

}

const CustomBar = ({ high, low }) => (
    <VStack w={"full"}>
      <Progress value={50} colorScheme={"teal"} w={"full"} />
      <HStack justifyContent={"space-between"} w={"full"}>
        <Badge children={low} colorScheme={"red"} />
        <Text fontSize={"sm"}>24H Range</Text>
        <Badge children={high} colorScheme={"green"} />
      </HStack>
    </VStack>
  );