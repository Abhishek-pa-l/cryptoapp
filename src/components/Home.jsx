import React from 'react'
import imgsrc from '../asset/btc.png'

const Home = () => {
  return (<>
<div className="home">
 <div className="image">
 <img src={imgsrc} alt="" />
 </div>
  <div className="second">
<h1><span>$</span> CRYPTOZZZ <span>$</span></h1>
<p>  Only Destination For Crypto  Updates</p>
</div> 


</div> </>)
}

export default Home