import React, { useState } from 'react';
import './App.css';
import GivestTitle from './components/GivestTitle';
import Leaderboard from './components/Leaderboard';
import DonateDiv from './components/DonateDiv';

function App() {

  const [rows] = useState([
    {position: 1, dollarAmmount:100.00, name:"Japperales", charity:"Red Cross", linkURL:"https://www.w3schools.com/html/html_links.asp"},
    {position: 2, dollarAmmount:75.00, name:"Delitt", charity:"ASPCA", linkURL:"https://www.w3schools.com/html/html_links.asp"},
    {position: 3, dollarAmmount:63.00, name:"twilliams", charity:"Red Cross", linkURL:"https://www.w3schools.com/html/html_links.asp"},
    {position: 4, dollarAmmount:55.00, name:"Janet Cross", charity:"Doctors Without Borders", linkURL:"https://www.w3schools.com/html/html_links.asp"},
    {position: 5, dollarAmmount:20.00, name:"Eli Perkins", charity:"Wounded Warrior", linkURL:"https://www.w3schools.com/html/html_links.asp"},
    {position: 6, dollarAmmount:17.50, name:"Edward Snowden", charity:"NSA", linkURL:"https://www.w3schools.com/html/html_links.asp"},
  ]);

  function insertLeaderboardRow(rowToInsert) {
    let rowInserted = false;
    if(rows.length === 0){
        rowToInsert.position = 1;
        rows.push(rowToInsert)
    }
    else {
      for (let i = 0, len = rows.length; i < len; i++) {
          if (rowToInsert.dollarAmmount > rows[i].dollarAmmount && !rowInserted) {
              rowInserted = true;
              rowToInsert.position = (i+1);
              rows.splice(i, 0, rowToInsert);
              //add to the length so the position of the final element is incremented
              len++;
          }
          else if(rowInserted){
              //increment the position of rows after inserted row
              rows[i].position = (rows[i].position+=1);
          }
      }
      if(rowInserted === false){
          rowToInsert.position = (rows.length+1);
          rows.push(rowToInsert);//add to the end
      }
    }
  }

  insertLeaderboardRow({position: 0, dollarAmmount:99.00, name:"Testy", charity:"test", linkURL:"https://www.w3schools.com/html/html_links.asp"});

  return (
    <div className="App">
      <GivestTitle />
      <Leaderboard rows={rows} />
      <DonateDiv />
    </div>
  );
}

export default App;
