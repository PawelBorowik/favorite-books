import React from 'react';
import AddBook from "./AddBook";
import {useSelector} from "react-redux";
import styled from "styled-components"
import Book from "./Book";

import './App.css';


function App() {

// const [books, setBooks]= useState([]) przed dodaniem reduxa
const books= useSelector(state => state.books)

const Wrapper = styled.div`
  padding: 4em;
  background: papayawhip;
  min-height: 100vh;
`;

const Title = styled.h1`
  font-size: 1.7em;
  text-align: center;
  color: #000;
`;






  return (
   
      <Wrapper>
        <Title>
              Ulubione Ksiązki
        </Title>
            
     
      {/* /<AddBook books={books} setBooks={setBooks}/> */}
      <AddBook />
      <Book books={books}/>
      </Wrapper>
 
  );
}

export default App;










// const [books, setBooks]= useState([{author:"Andrzej Sapkowski", title: "Ostatnie życzenie"}, {author:"Janusz Meissner", title: "Pilot gwiaździestego znaku"}])