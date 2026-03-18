import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Style from "../PaymentFailed/PaymentFailed.module.css";

export function PaymentFailed() {
const navigate = useNavigate();

useEffect(() => {
const timer = setTimeout(() => {
navigate("/");
}, 3000);

return () => clearTimeout(timer);


}, []);

return ( <div className={Style.page}> <div className={Style.card}> <div className={Style.icon}>✖</div>


    <h1 className={Style.title}>Payment Failed!</h1>

    <p className={Style.text}>
      Something went wrong. Please try again.
    </p>

    <button
      className={Style.button}
      onClick={() => navigate("/")}
    >
      Go to Dashboard
    </button>
  </div>
</div>

);
}
