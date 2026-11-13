import { useState } from "react";
import DoctorLogin from "./components/DoctorLogin";
import "./App.css";
import { openCpartySession } from "./services/ihioApi";
function App() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [doctorSessionId, setDoctorSessionId] = useState("");
  async function handleDoctorLogin(credentials) {
    setError("");
    setLoading(true);
    try {
      const result = await openCpartySession(credentials);
      console.log("doctor credentials", result);
      if (!result.success) {
        throw new Error(result.message);
      }
      setDoctorSessionId(result.info.sessionId);
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  }
  async function handlePrescriptionSubmit(patinetData) {}
  return (
    <main className="app">
      <h1>سامانه نسخه پیجی بیمه سلامت</h1>
      {doctorSessionId ? (
        <p>ورود پزشک با موفقیت انجام شد</p>
      ) : (
        <DoctorLogin
          onLogin={handleDoctorLogin}
          loading={loading}
          error={error}
        />
      )}
    </main>
  );
}
export default App;
