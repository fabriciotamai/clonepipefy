import React from 'react';
import { DndProvider } from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';

import GlobalStyle from './styles/global';
import Header from './componets/Header';
import Board from './componets/Board';


function App(){
    return(
        <DndProvider backend ={HTML5Backend}> 
          <Header/>
          <Board/>

        <GlobalStyle/>
        </DndProvider>

       
    );
}

export default App;