import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { IoMdArrowBack } from "react-icons/io";
import Style from "../Pricing/Pricing.module.css";
import axios from "axios"
import { useContext } from "react";
import { ServerContext } from "../Context/servercontext.jsx";

function Pricing(){

 const navigate = useNavigate();

 const [selectedPrice,setSelectedPrice] = useState(null);
 const [paying,setPaying] = useState(false);
 const [payingAmount,setPayingAmount] = useState(null);
 let {serverURL}=useContext(ServerContext)

 const handlePaying = async(amount)=>{
   setPaying(true);
   setPayingAmount(amount);

   const result= await axios.post(`${serverURL}/api/credit/order`,{amount},{withCredentials:true})
   if(result.data.url){
    window.location.href=result.data.url
   }

   setPaying(false)
   setTimeout(()=>{
     setPaying(false);
   },2000);
 }

 return(
  <>
   <div className={Style.container}>

    <div className={Style.nav}>

     <div className={Style.back} onClick={()=>navigate(-1)}>
      <IoMdArrowBack/> Back
     </div>

     <div className={Style.heading}>
      <h1>Buy Credits</h1>
      <p>Choose a plan that fits your study plans</p>
     </div>

    </div>

    <div className={Style.cards}>
     
     <PricingCard
      title="Starter"
      price="₹100"
      amount={100}
      credits="50 Credits"
      description="Best value for students"
      features={[
       "All Starter features",
       "More credits per plan",
       "Revision mode access",
       "Priority AI response"
      ]}
      selectedPrice={selectedPrice}
      setSelectedPrice={setSelectedPrice}
      onBuy={handlePaying}
      paying={paying}
      payingAmount={payingAmount}
     />
     
     <PricingCard
      title="popular"
      price="₹200"
      amount={200}
      credits="120 Credits"
      description="Best value for students"
      features={[
       "All Starter features",
       "More credits per plan",
       "Revision mode access",
       "Priority AI response"
      ]}
      selectedPrice={selectedPrice}
      setSelectedPrice={setSelectedPrice}
      onBuy={handlePaying}
      paying={paying}
      payingAmount={payingAmount}
     />

     <PricingCard
      title="Pro Learner"
      price="₹500"
      amount={500}
      credits="300 Credits"
      description="For serious exam preparation"
      features={[
       "All Starter features",
       "More credits per plan",
       "Revision mode access",
       "Priority AI response"
      ]}
      selectedPrice={selectedPrice}
      setSelectedPrice={setSelectedPrice}
      onBuy={handlePaying}
      paying={paying}
      payingAmount={payingAmount}
     />

    </div>

   </div>
  </>
 )
}

function PricingCard({
 title,
 price,
 amount,
 credits,
 description,
 features,
 selectedPrice,
 setSelectedPrice,
 onBuy,
 paying,
 payingAmount
}){

 const isSelected = selectedPrice === amount;
 const isPayingThisCard = paying && payingAmount === amount;

 return(
  <div
   className={`${Style.card} ${isSelected ? Style.active : ""}`}
   onClick={()=>setSelectedPrice(amount)}
  >

   <h2>{title}</h2>
   <p>{description}</p>

   <h1>{price}</h1>
   <p>{credits}</p>

   <button onClick={()=>onBuy(amount)}>
    {isPayingThisCard ? "Processing..." : "Buy Now"}
   </button>

   <ul>
    {features.map((t,i)=>(
     <li key={i}>{t}</li>
    ))}
   </ul>

  </div>
 )
}

export default Pricing;