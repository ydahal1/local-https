import './App.css';
import axios from "axios";
// const {  } = require("react");

function App() {
  //Check back end health
  const checkServerHealth = async () => {
    axios
      .get("/health")
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
  };
  return (
    <div className="App" style={{marginTop: "105px"}}>
      <button style={{padding: "10px", background: "green", color: "white", fontSize:"15px", border: "1px solid white", borderRadius:"10px"}} 
      onClick={checkServerHealth}> Check server health </button>
    </div>
  );
}

export default App;
