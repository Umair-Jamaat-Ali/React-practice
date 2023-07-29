
import React from 'react';
import NavBar from './components/navBar/NavBar';
import Button from './components/button/Button';
import ListItems from './components/listItems/ListItems';
import About from './components/about/About';
import Card from './components/card/Card';


function App() {
  return (
    <div>
      

      <NavBar />
      <Button text="click me" style={{ backgroundColor: "green", fontSize: "0.75rem", width: "150px", height: "50px", margin: "10px" }} />
      <Button text="submit" />
     
      <ListItems list={["umair", "zubair", "azam", ",mahran"]} />
      <ListItems list={[ "azam", "mahran"]}/>
      <ListItems list={[1,2,3,4,5,6]}/>
      <About/>
     {/* <Card/> */}
    </div>
  );
}

export default App;
