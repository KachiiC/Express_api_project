import React, {useState, useEffect} from 'react';
import './App.css';


function App() {

  const [response, setResponse] = useState([])

  useEffect(() => {
    fetch("http://127.0.0.1:9000/testApi")
      .then(res =>res.text()) 
      .then(res => setResponse(res))
      .catch(err => err)
  },[])

  const displayResponse = response[0]

  console.log(displayResponse)
  
  return (
    <div>
      <h1>Page</h1>
    </div>
  );
}

export default App;
