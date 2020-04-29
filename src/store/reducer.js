export const ADD_BOOK= "ADD_BOOK"

const initialState ={
    books:[]
};

export default (state = initialState, action) =>{
    switch(action.type){
        case ADD_BOOK:{
            const newBooks = [...state.books, action.payload]
            return{
                ...state,
                books: newBooks
            }
        }
        default{
            return{...state};

        }
    }
}

// fuknkcja do dodawania  ksiazek
export const  addBook = book => dispatch =>{
    dispatch({ type:ADD_BOOK, payload:book})
}
