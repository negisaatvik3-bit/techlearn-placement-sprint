import Navbar from "../components/Navbar";

function PaidDashboard() {
  return (
    <>
      <Navbar />

      <div className="min-h-screen bg-indigo-50 p-10">

        <h1 className="text-4xl font-bold text-indigo-700">
          Placement Sprint Dashboard
        </h1>

        <p className="text-gray-600 mt-2">
          Welcome to the Premium Placement Sprint Program.
        </p>

        <div className="grid md:grid-cols-2 gap-6 mt-8">

          <div className="bg-white rounded-xl shadow p-6">
            <h2 className="text-xl font-bold">
              🚀 Full Placement Roadmap
            </h2>
          </div>

          <div className="bg-white rounded-xl shadow p-6">
            <h2 className="text-xl font-bold">
              💻 DSA Notes
            </h2>
          </div>

          <div className="bg-white rounded-xl shadow p-6">
            <h2 className="text-xl font-bold">
              🗄 SQL Notes
            </h2>
          </div>

          <div className="bg-white rounded-xl shadow p-6">
            <h2 className="text-xl font-bold">
              📝 Aptitude Notes
            </h2>
          </div>

          <div className="bg-white rounded-xl shadow p-6">
            <h2 className="text-xl font-bold">
              🎯 Daily Challenges
            </h2>
          </div>

          <div className="bg-white rounded-xl shadow p-6">
            <h2 className="text-xl font-bold">
              🎤 Interview Preparation
            </h2>
          </div>

        </div>

      </div>
    </>
  );
}

export default PaidDashboard;