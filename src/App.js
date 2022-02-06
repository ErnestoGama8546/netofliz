import React from 'react';
import './App.css';
import Row from './Row';
import requests from './requests';

function App() {
  return (
    <div className="App">
      <h1>King NetoFliz </h1>
      <Row title="NETOFLIZ ORIGINALS" fetchUrl={requests.fetchNetflixOriginals} />
      <Row title="Tendencias" fetchUrl ={requests.fetchTrending}/>
      <Row title="Horror" fetchUrl ={requests.fetchHorrorMovies}/>
      <Row title="Action" fetchUrl ={requests.fetchActionMovies}/>
      <Row title="Pagaron por salir aqui" fetchUrl ={requests.fetchTopRated}/>

    </div>
  );
}

export default App;
