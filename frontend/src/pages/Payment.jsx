import { useNavigate } from "react-router-dom";
import API from "../services/api";

function Payment() {
  const navigate = useNavigate();

  const handlePayment = async () => {
    try {
      const token = localStorage.getItem("token");

      const res = await API.post(
        "/payment/verify",
        {},
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      localStorage.setItem(
        "user",
        JSON.stringify(res.data.user)
      );

      alert("Payment Successful!");

      navigate("/paid-dashboard");
    } catch (err) {
      alert(err.response?.data?.message || "Payment Failed");
    }
  };

  return (
    <div className="min-h-screen flex justify-center items-center bg-gradient-to-br from-indigo-100 to-violet-100">
      <div className="bg-white p-10 rounded-2xl shadow-xl w-full max-w-lg">

        <h1 className="text-3xl font-bold text-center text-indigo-600">
          Placement Sprint
        </h1>

        <p className="text-center mt-4 text-gray-600">
          This is a simulated payment for the technical assessment.
        </p>

        <div className="mt-8 border rounded-lg p-5">

          <h2 className="text-xl font-semibold">
            Amount
          </h2>

          <p className="text-4xl font-bold mt-2">
            ₹999
          </p>

        </div>

        <button
          onClick={handlePayment}
          className="mt-8 w-full bg-indigo-600 hover:bg-indigo-700 text-white py-3 rounded-lg font-semibold"
        >
          Pay Now
        </button>

      </div>
    </div>
  );
}

export default Payment;