import React from 'react'
import axios from 'axios'
import { useState,useEffect } from 'react'
import Loader from './Loader'

const Exchanges = () => {
  const[exchanges,setExchanges]= useState([])
  const[loader,setLoader]=useState(true)
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchExchanges = async()=>{
    try {
       const {data} = await axios.get(url)
        console.log(data);
        setExchanges(data);
        setLoader(false);
      }
    
    catch (error) {
      setError(true)
      setLoader(false);
      
    }
  }
  
    fetchExchanges();
  }, [])
  return (
    loader?<Loader/>:( <div className="exchanges">
      {
        exchanges.map((i)=>{
          return <ExchangeCard name={i.name} img={i.image} rank={i.trust_score_rank} url={i.url}/>
        })
      }
    </div>
    )
  )
}

export default Exchanges
const url =" https://api.coingecko.com/api/v3/exchanges";

const ExchangeCard=({name,img,rank,url})=>(
  <a href={url} target={'blank'}>  
   <img src={img} alt="aa" />
     <p>{rank}</p>

     <h3>{name}</h3>
     </a>

)

