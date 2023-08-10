import React from 'react'
import "./HomeScreen.css";
import Nav from '../Nav';
import Banner from '../Banner';
import requests from '../Requests';
import Row from "../Row.js";


function HomeScreen() {
  return (
    <div className="homeScreen">
        <Nav />
        
        <Banner/>

        <Row 
           title="NETFLIX ORIGINALS"
           fetchUrl={requests.fetchNetflixOriginals}
           isLargeRow />
        <Row title = "Trending Now" fetchUrl={requests.fetchTrendiong} />
        <Row title = "Top Rated" fetchUrl={requests.fetchTopRated} />
        <Row title = "Action movies" fetchUrl={requests.fetchActionMovies} />
        <Row title = "Comedy Movies" fetchUrl={requests.fetchComedyMovies} />
        <Row title = "Horror Moives" fetchUrl={requests.fetchHorrorMoives} />
        <Row title = "Romance Movies" fetchUrl={requests.fetchRomanceMovies} />
        <Row title = "Documentaries" fetchUrl={requests.fetchDocumentaries} />
        <Row title = "Trending Now" fetchUrl={requests.fetchTrendiong} />
    </div>
  )
}

export default HomeScreen
