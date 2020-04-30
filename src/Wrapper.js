import React from 'react';
import {Provider} from "react-redux"
import App from './App';
import Store from "./store/store"
import styled, {ThemeProvider} from "styled-components"

export const Wrapper =()=>{

    const Reset = styled.body`
    margin:0;
    padding:0;
    box-sizing: border-box;
    `


    return (
        <Provider store={Store}>
            <ThemeProvider theme={Reset}>
                <App/>
            </ThemeProvider >
            
        </Provider>
    )
}