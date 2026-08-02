import Navbar from "../components/Navbar";

function FreeDashboard() {
  return (
    <>
      <Navbar />

      <div className="min-h-screen bg-gray-100 p-10">

        <h1 className="text-4xl font-bold text-green-600">
          Free Dashboard
        </h1>

        <p className="text-gray-600 mt-2">
          Welcome to the free version of Placement Sprint.
        </p>

        <div className="mt-8 space-y-6">

          <div className="bg-white rounded-xl shadow p-6">
            <h2 className="text-xl font-bold">
              📘 Program Overview
            </h2>

            <p className="mt-2 text-gray-600">
              Learn how the Placement Sprint is structured and how to prepare effectively.
            </p>
          </div>

          <div className="bg-white rounded-xl shadow p-6">
            <h2 className="text-xl font-bold">
              💻 DSA Basics
            </h2>

            <p className="mt-2 text-gray-600">
              Arrays, Strings, Time Complexity and Introduction to Problem Solving.
            </p>
          </div>

          <div className="bg-white rounded-xl shadow p-6">
            <h2 className="text-xl font-bold">
              🧠 Aptitude Basics
            </h2>

            <p className="mt-2 text-gray-600">
              Percentages, Profit & Loss, Number System and Logical Reasoning.
            </p>
          </div>

        </div>

      </div>
    </>
  );
}

export default FreeDashboard;