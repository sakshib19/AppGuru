import { useEffect, useState } from "react";
import axios from "axios";

export default function Tutorial() {
  const [tutorial, setTutorial] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const appName = localStorage.getItem("app_name");
    const language = localStorage.getItem("language");

    axios
      .post("http://localhost:8000/tutorial/", {
        app_name: appName,
        language: language,
      })
      .then((res) => {
        setTutorial(res.data.tutorial);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setError("Backend not responding. Is server running?");
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <h2 style={{ textAlign: "center" }}>⏳ Generating tutorial...</h2>;
  }

  if (error) {
    return <h2 style={{ color: "red", textAlign: "center" }}>{error}</h2>;
  }

  return (
    <div className="container">
      <h2>📘 Step-by-Step Tutorial</h2>

      <pre style={{ whiteSpace: "pre-wrap" }}>{tutorial}</pre>

      <button onClick={() => window.location.href = "/simulation"}>
        Practice Now →
      </button>
    </div>
  );
}
