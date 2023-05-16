import './App.css';
import axios from 'axios';

function App() {

  async function fetchHello(){
     const response = await axios.get("http://localhost:8080/")
     console.log("Response: ", response)
  }

  return (
    <div className="App">
      <button onClick={fetchHello}>Fetch Hello</button>
    </div>
  );
}

export default App;
