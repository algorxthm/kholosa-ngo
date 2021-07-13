import React, { useState, useEffect } from "react";
import "./App.css";
import Home from "./components/Home";
import ClipLoader from "react-spinners/ClipLoader";

function App() {
  const  [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);

  return (
    <>
    <div className = "spinner">
      {loading ? (
        <ClipLoader color={"#af2575"} loading={loading} size={150} />
      ) : (
        <Home />
      )}
     
    </div>
    </>
  );
}

export default App;
