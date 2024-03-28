import React from 'react';
import './App.css';
import Nav from './components/Nav';
import Banner from './components/Banner';
import Row from './components/Row';
import requests from './api/requests';

function App() {
    return (
        <div className="app">
            <Nav />
            <Banner />
            <Row
                title="NETFLIX ORIGINALS"
                id="NO"
                fetchUrl={requests.fetchNetflixOriginals}
                isLargeRow
            />
            <Row title="Trending Now" id="TN" fetchUrl={requests.fetchNetflixOriginals}/>
            <Row title="Top Rated" id="TR" fetchUrl={requests.fetchTopRated}/>
            <Row
                title="Action Movies"
                id="AM"
                fetchUrl={requests.fetchActionMovies}
            />
            <Row
                title="Comedy Movies"
                id="CM"
                fetchUrl={requests.fetchComedyMovies}
            />
            <Row
                title="Horror Movies"
                id="HM"
                fetchUrl={requests.fetchHorrorMovies}
            />
            <Row
                title="Romance Movies"
                id="RM"
                fetchUrl={requests.fetchRomanceMovies}
            />
            <Row
                title="Documentaries"
                id="DM"
                fetchUrl={requests.fetchDocumentaries}
            />

            {/* <Footer /> */}
        </div>
    );
}

export default App;