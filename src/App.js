import React from 'react';
import './App.css';
import Row from './Row';
import requests from './requests.js';
import Banner from './Banner';
import NavB from "./NavB";

function App() {
  return (
    <div className="App">
      <NavB />\
      <Banner />
      <Row title="NETOFLIZ ORIGINALS" 
      fetchUrl={requests.fetchNetflixOriginals}
      isLargeRow 
      />
      <Row title="Tendencias" fetchUrl ={requests.fetchTrending}/>
      <Row title="Pagaron por salir aqui" fetchUrl ={requests.fetchTopRated}/>
      <Row title="Horror" fetchUrl ={requests.fetchHorrorMovies}/>
      <Row title="Action" fetchUrl ={requests.fetchActionMovies}/>
      <Row title="Romance" fetchUrl ={requests.fetchRomanceMovies}/>
      <Row title="Comedia" fetchUrl ={requests.fetchComedyMovies}/>
      <Row title="Documentales" fetchUrl ={requests.fetchDocumentaries}/>

    </div>
  );
}

export default App;
