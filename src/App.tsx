import React from 'react';
import GridComponent from './components/Grid.component';
import HeaderComponent from './components/Header.component';
import IconBtn from './components/IconBtn.component';
import logo from './logo.svg';

function App() {
  return (
    <div className="App">
      <HeaderComponent title="Where in the world?">
        <IconBtn color="#000" icon={logo}>Dark Mode</IconBtn>
      </HeaderComponent>
      <GridComponent>
        
      </GridComponent>
    </div>
  );
}

export default App;
