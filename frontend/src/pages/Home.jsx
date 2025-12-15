import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const [appName, setAppName] = useState("");
  const [language, setLanguage] = useState("");
  const navigate = useNavigate();

  function submit() {
    localStorage.setItem("app_name", appName);
    localStorage.setItem("language", language);
    navigate("/tutorial");
  }

  return (
    <div className="container">
      <h1>📱 Learn Any App Easily</h1>

      <input
        placeholder="Enter App Name (WhatsApp, Paytm...)"
        onChange={(e) => setAppName(e.target.value)}
      />

      <select onChange={(e) => setLanguage(e.target.value)}>
        <option>Choose Language</option>
        <option>Hindi</option>
        <option>English</option>
        <option>Odia</option>
        <option>Bengali</option>
      </select>

      <button onClick={submit}>Generate Tutorial</button>
    </div>
  );
}
