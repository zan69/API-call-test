import CardForm from "./Components/CardForm";
import {useState} from "react";
import axios from "axios";

export default function App() {

  const [result, setResult] = useState('')

  const formResponseHandler = (endpoint, method, content) =>{
    axios({
      method: method,
      url: endpoint,
      responseType: 'stream'
    })
        .then(function (response) {
          console.log(JSON.stringify(response, null, "\t"))
          setResult(JSON.stringify(response, null, "\t"))
        });
  }

  return (
      <CardForm formResponseHandler={formResponseHandler} result={result}/>
  )
}