import React from 'react';
import ReactDOM from 'react-dom';



function Favourite()
{
  const judgmental = Math.random() < 0.5;
  
// judgmental will be true half the time.
return (
  <div>
    <h1>My Favorite Foods</h1>
    <ul>
      <li>Sushi Burrito</li>
      <li>Rhubarb Pie</li>
      { !judgmental && <li>Nacho Cheez Straight Out The Jar</li>}
      <li>Broiled Grapefruit</li>
    </ul>
  </div>
)
}

export default Favourite;
