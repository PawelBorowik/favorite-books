import React from 'react';
import AddBook from "./AddBook";
import {useSelector} from "react-redux";
import Book from "./Book";

import './App.css';


function App() {

// const [books, setBooks]= useState([]) przed dodaniem reduxa
const books= useSelector(state => state.books)




  return (
    <div className="App">
      <header className="App-header">
      <h1>Ulubione Ksiązki</h1>
      {/* /<AddBook books={books} setBooks={setBooks}/> */}
      <AddBook />
      <Book books={books}/>
  
      </header>


    </div>
  );
}

export default App;










// const [books, setBooks]= useState([{author:"Andrzej Sapkowski", title: "Ostatnie życzenie"}, {author:"Janusz Meissner", title: "Pilot gwiaździestego znaku"}])