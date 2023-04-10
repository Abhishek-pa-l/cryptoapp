import React from 'react'
import { Link } from 'react-router-dom'
import CoinDetails from './CoinDetails';


const CoinCard = ({id, key,name, img, symbol, price, currencySymbol = "₹" }) => {
  return (
    <div className="coincard">
    <Link to={`/coins/${id}`}>
      <img src={img} alt="" />
      <h3>{symbol}</h3>
      <p>{name}</p>
      <p>{price ? `${currencySymbol}${price}` : "NA"}</p>
    </Link>
    </div>
    
  )
}

export default CoinCard