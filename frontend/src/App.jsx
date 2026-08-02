import { BrowserRouter, Routes, Route } from "react-router-dom";

import Landing from "./pages/Landing";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import ChoosePlan from "./pages/ChoosePlan";
import FreeDashboard from "./pages/FreeDashboard";
import PaidDashboard from "./pages/PaidDashboard";
import Payment from "./pages/Payment";

import ProtectedRoute from "./components/ProtectedRoute";

function App() {
  return (
    <BrowserRouter>
      <Routes>

        <Route path="/" element={<Landing />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />

        <Route
          path="/choose-plan"
          element={
            <ProtectedRoute>
              <ChoosePlan />
            </ProtectedRoute>
          }
        />

        <Route
          path="/free-dashboard"
          element={
            <ProtectedRoute>
              <FreeDashboard />
            </ProtectedRoute>
          }
        />

        <Route
          path="/payment"
          element={
            <ProtectedRoute>
              <Payment />
            </ProtectedRoute>
          }
        />

        <Route
          path="/paid-dashboard"
          element={
            <ProtectedRoute allowedRole="paid">
              <PaidDashboard />
            </ProtectedRoute>
          }
        />

      </Routes>
    </BrowserRouter>
  );
}

export default App;