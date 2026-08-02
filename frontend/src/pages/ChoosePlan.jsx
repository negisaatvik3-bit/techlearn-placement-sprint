import { useNavigate } from "react-router-dom";

function ChoosePlan() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-100 to-violet-100 flex justify-center items-center p-6">
      <div className="bg-white shadow-xl rounded-2xl p-10 max-w-2xl w-full">

        <h1 className="text-4xl font-bold text-center text-indigo-600">
          Choose Your Access
        </h1>

        <p className="text-center text-gray-600 mt-4">
          Continue with free resources or unlock the complete
          Placement Sprint experience.
        </p>

        <div className="mt-10 space-y-6">

          {/* Free Plan */}

          <div className="border rounded-xl p-6 shadow-sm hover:shadow-lg transition">

            <h2 className="text-2xl font-bold text-green-600">
              Free Access
            </h2>

            <ul className="mt-4 space-y-2 text-gray-600">
              <li>✅ Program Overview</li>
              <li>✅ One DSA Topic</li>
              <li>✅ One Aptitude Topic</li>
            </ul>

            <button
              onClick={() => navigate("/free-dashboard")}
              className="mt-6 w-full bg-green-600 hover:bg-green-700 text-white py-3 rounded-lg font-semibold"
            >
              Continue with Free Access
            </button>

          </div>

          {/* Paid Plan */}

          <div className="border rounded-xl p-6 shadow-sm hover:shadow-lg transition border-indigo-500">

            <h2 className="text-2xl font-bold text-indigo-600">
              Placement Sprint
            </h2>

            <ul className="mt-4 space-y-2 text-gray-600">
              <li>✅ Full Placement Roadmap</li>
              <li>✅ DSA Notes</li>
              <li>✅ SQL Notes</li>
              <li>✅ Aptitude Notes</li>
              <li>✅ Daily Challenges</li>
              <li>✅ Interview Preparation</li>
            </ul>

            <button
              onClick={() => navigate("/payment")}
              className="mt-6 w-full bg-indigo-600 hover:bg-indigo-700 text-white py-3 rounded-lg font-semibold"
            >
              Enroll in Placement Sprint
            </button>

          </div>

        </div>

      </div>
    </div>
  );
}

export default ChoosePlan;