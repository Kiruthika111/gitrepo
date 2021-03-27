import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Grid,Paper } from "@material-ui/core";
import Logo from './image.jpg'
import User from './user-icon.png'
import PharmList from "./PharmList.js"
import pharmData from "./dummyData.js"
import SearchBar from "./SearchBar.js"
import Details from "./pharmDetails.js"


function App() {
  
  return (
    <grid>

      {/* <Details/> */}
      <SearchBar/>
      {pharmData.map(pharm => <PharmList key={pharm.id} {...pharm} />)}
      
    </grid>
    
  );
}

export default App;
