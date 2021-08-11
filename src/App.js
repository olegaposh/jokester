import { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Axios from 'axios';
import { react } from '@babel/types';
import Header from './components/header'

function App() {

  const [joke, setJoke] = useState("");
  const [answer, setAnswer] = useState("");

  const getJoke = () => {

    Axios.get("https://v2.jokeapi.dev/joke/Any").then(
      (response) => {
        console.log(response);
        // setJoke(response.data.setup + " ..." + response.data.delivery);
        setJoke(response.data.setup);
        setAnswer(response.data.delivery);
        console.log(response.data.setup);
        console.log(response.data.delivery);
      }
    )
  }

  return (
    <>
      <Header />
      <div className="App">
        <div className="container">
          <div className="row">
            <div className="col my-5">

            </div>
            <div className="col-lg-10 my-5">
              <button type="button" className="btn btn-success btn-lg" onClick={getJoke}>Tell me a Joke</button>
            </div>
            <div className="col">

            </div>
          </div>
          <div className="row">
            <div className="col my-5">

            </div>
            <div className="joke col-lg-10 my-5 py-5">
             <p>{joke}</p> 

            </div>
            <div className="col">

            </div>
          </div>
          <div className="row">
    <div className="col my-5">
      
    </div>
    <div className="answer col-lg-10 my-5 py-5">
      <p>{answer}</p>
      
    </div>
    <div className="col">
      
    </div>
  </div>
        </div>
      </div>
    </>
  );
}

export default App;
