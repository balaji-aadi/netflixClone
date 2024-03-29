import React from 'react'
import Row from './Row'
import request from './request'
import Banner from './Banner'
import './App.css'
import Nav from './Nav'
// import Front from './Front'


function App() {
  return (
    <div className='app'>
      
      {/* <Front/> */}
    <div className="main">
      <Nav/>
      <Banner/>
      <Row
       title = 'Netflix-orginals' 
       fetchUrl = {request.fetchNetflixOriginals} 
       /> 

      <Row title = 'Trending Now' fetchUrl = {request.fetchTrending }/>
      <Row title = 'Top Rated' fetchUrl = {request.fetchTopRated }/>
      <Row title = 'Action Movies' fetchUrl = {request.fetchActionMovies }/>
      <Row title = 'Comedy Movies' fetchUrl = {request.fetchComedyMovies }/>
      <Row title = 'Horror Movies' fetchUrl = {request.fetchHorrorMovies }/>
      <Row title = 'Romance Movies' fetchUrl = {request.fetchRomanceMovies }/>
      <Row title = 'Documentaries' fetchUrl = {request.fetchDocumentaries }/>
      
    </div>  
      
    </div>
  )
}

export default App
