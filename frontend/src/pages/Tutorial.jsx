import { useEffect, useState } from "react";
import axios from "axios";

export default function Tutorial() {
  const [tutorial, setTutorial] = useState("");

  function speak(text) {
    const msg = new SpeechSynthesisUtterance();
    msg.text = text;
    msg.lang = "en-IN"; 
    window.speechSynthesis.speak(msg);
  }

  useEffect(() => {
    const appName = localStorage.getItem("app_name");
    const language = localStorage.getItem("language");

    axios
      .post("http://localhost:8000/tutorial/", {
        app_name: appName,
        language: language,
      })
      .then((res) => setTutorial(res.data.tutorial));
  }, []);

  return (
    <div className="container">
      <h2>Your Step-by-Step Tutorial</h2>

      <button onClick={() => speak(tutorial)}>🔊 Listen</button>

      <pre className="tutorial-box">{tutorial}</pre>

      <button onClick={() => (window.location.href = "/simulation")}>
        Practice Now →
      </button>
    </div>
  );
}
