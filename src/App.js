import React from 'react';
import SearchBar from './searchBar';
import Buttons from './buttons';
import Images from './images';
import './App.css';
const App = () => {
  return (
    <>
<h1 style={{textAlign:"center"}}>Snapshot</h1>
<SearchBar/>
<Buttons/>  <br></br>
<Images/>
</>
);
}

export default App;
