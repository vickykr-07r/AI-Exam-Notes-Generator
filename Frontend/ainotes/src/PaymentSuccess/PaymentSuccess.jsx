import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Style from "../PaymentSuccess/PaymentSuccess.module.css";
import { useDispatch } from "react-redux";
import getcurrentuser from "../Service/api.js";

export  function PaymentSuccess() {
  const navigate = useNavigate();
  const dispatch=useDispatch()
  useEffect(() => {
   getcurrentuser(dispatch)
    const timer = setTimeout(() => {
      navigate("/");
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className={Style.page}>
      <div className={Style.card}>
        <div className={Style.icon}>✔</div>

        <h1 className={Style.title}>Payment Successful!</h1>

        <p className={Style.text}>
          Your credits have been added successfully.
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