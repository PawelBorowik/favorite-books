import React, {useState} from 'react';
import {useDispatch} from "react-redux"
import {ADD_BOOK} from "./store/reducer"
import styled from "styled-components"


import './App.css';


function AddBook() {

    const dispatch= useDispatch()

    
    const [author, setAuthor]= useState("")
    const [title, setTitle]= useState("")
    const [literaryGenre, setLliteraryGenre]= useState("")
    const [cover, setCover]= useState("")
    const[coverName, setCoverName]=useState("")

    const literaryGenreList= ["kryminał", "historyczny", "fantazy", "przygodowy", "inny"]

    const optionGenre= literaryGenreList.map( item=> <option key={item}>{item}</option>)

    const handleAddAuthor=e=>{
    
    setAuthor(e.target.value)
    }
    const handleAddTitle=e=>{
  
    setTitle(e.target.value)
}
const handleSelectLiteraryGenre=e=>{
   
    setLliteraryGenre(e.target.value)
}
const handleAddBookCover=e=>{
  
    setCover( URL.createObjectURL(e.target.files[0]))
    setCoverName( e.target.files[0])
}
const handleAddBook=(e)=>{
    e.preventDefault()
    e.stopPropagation()
    const addedBook={
        author,
        title,
        literaryGenre,
        cover,
    }
    //  const newBooksList=[ ...books, addedBook]
    //  setBooks(newBooksList) przed dodaniem reduxa
    dispatch({type: ADD_BOOK, payload: addedBook})
     setAuthor("")
     setLliteraryGenre("")
     setTitle("")
     setCover("")
     setCoverName("")
}



 //style
 const Form = styled.div`
 display:flex;
 flex-direction: column;
  padding: 10px;
`

const Input = styled.input`
  padding: 0.5em;
  margin: 0.5em 1em;
  color: black;
  background: #ddd;
  border: none;
  border-radius: 3px;
`;
const Select = styled.select`
  padding: 0.5em;
  margin: 0.5em 2em ;
  color: black;
  background: #ddd;
  border: none;
  border-radius: 3px;
`;
 const Find = styled.input`
 display: none;
 `
 const Cover = styled.label`
  margin-top: 10px;
    border: 2px solid #34495e;
     text-align: center;
     width: 300px; 
     height: 36px; 
     border-radius: 3px;  
     cursor: pointer;
  
  &:hover{
    background-color: #ddd;
    color:black;
  }
`


  
  
   


  return (
    <div>
        <form action="">

            <Form>
           
            <label htmlFor="author">
                Autor
               
            <Input
                    id ="author"
                    type="text" 
                    value={author} 
                    placeholder="autor" 
                    onChange={handleAddAuthor}
                    onBlur={handleAddAuthor}/>
                   
            </label>
            
         
          <label htmlFor="title">
                Tytuł
            <Input
                    id ="title"
                    type="text" 
                    value={title} 
                    placeholder="tytuł" 
                    onChange={handleAddTitle}
                    onBlur={handleAddTitle}/>
            </label>
      
            <label htmlFor="literaryGenre">
                Gatunek
                <Select>
                    id="literaryGenre"
                    value={literaryGenre}
                    onChange={handleSelectLiteraryGenre}>
                    Gatunek Literacki
                    <option value="">wybierz</option>
                    {optionGenre}
                    </Select>    
            </label>
          
            
            
            <Find type="file" id="files" onChange={handleAddBookCover}/>
  <Cover htmlFor="files">{coverName ? <span className="name-file">{coverName.name}</span>: <span>wybierz okładkę</span>}</Cover>
           
  </Form>
            <button onClick={handleAddBook}>Dodaj</button>
        </form>
     
      
    </div>
  );
}

export default AddBook;






// useEffect(()=>{
//     console.log("effect sie odpala")
// },[title])