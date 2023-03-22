import './App.css';
import axios from 'axios';
import { useState } from 'react';

const App = () => {
  const [res, setRes] = useState<string>('')

  const getDataHandler = async  () => {
    setRes("Waiting response...")
    try {
      const endPoint: string = "http://localhost:8080"
  
      const res: any = await axios.get(endPoint)
        .then((res: any) => res.data)
  
      setRes(res)
    } catch(err) {
      setRes("An error occured while handling response")
      console.error(err)
    }
  }

  const getMoreInfoHandler = async  () => {
    setRes("Waiting response...")
    try {
      const endPoint: string = "http://localhost:8080/more-info"
  
      const res: any = await axios.get(endPoint)
        .then((res: any) => res.data)
  
      setRes(res)
    } catch(err) {
      setRes("An error occured while handling response")
      console.error(err)
    }
  }

  return (
    <div className="App">
      <h1>Test PHP server</h1>
      <button onClick={() => getMoreInfoHandler()}>Get aditional info</button>
      <button onClick={() => getDataHandler()}>Get data</button>
      <button onClick={() => setRes('')}>Clear response</button>
      <h4>{res}</h4>
    </div>
  );
}

export default App;
