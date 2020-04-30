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
display:flex;
flex-direction: column;
  background: papayawhip;
  min-height: 100vh;
  width: 1000px;
  margin: 0 auto;
`;

const Header = styled.header`
  height: 100px;
  line-height:100px;
  text-align: center;
  color: white;
  background-color: black;
`;


const Form = styled.section`
display: flex;
flex-direction:column;
align-items: center;

  font-size: 1em;
  padding:20px;
  color: white;
  background-color: #888;
`;




const Title = styled.h1`

  font-size: 1.7em;
  text-align: center;
  color: white;

`;

  return (
   
      <Wrapper>
        <Header>
             <Title>
                   Ulubione Ksiązki
            </Title>
        </Header>
       
     
      {/* /<AddBook books={books} setBooks={setBooks}/> */}
      <Form> 
      <AddBook />
      </Form> 
      <Book books={books}/>
      
      </Wrapper>
 
  );
}

export default App;










// const [books, setBooks]= useState([{author:"Andrzej Sapkowski", title: "Ostatnie życzenie"}, {author:"Janusz Meissner", title: "Pilot gwiaździestego znaku"}])