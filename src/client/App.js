import React from 'react';
import styled from 'styled-components';

const AppContainer = styled.div`
display:flex;
align-items:center;
justify-content:center;
position:fixed;
width:100%
height:100%
font-size:35px;
background:linear-gradient(to bottom right,#005AA7,#FFFDE4)`;

const App = () => (
  <AppContainer id="App">
    <h1>Hello world</h1>
  </AppContainer>
);

export default App;
