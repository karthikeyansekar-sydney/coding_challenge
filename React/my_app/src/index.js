// import React from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';
// import App from './App';
// import reportWebVitals from './reportWebVitals';
//
// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// );
//
// // If you want to start measuring performance in your app, pass a function
// // to log results (for example: reportWebVitals(console.log))
// // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Favourite from './Favourite';
import Owl from './Owl';


function coinToss() {
  // This function will randomly return either 'heads' or 'tails'.
  return Math.random() < 0.5 ? 'heads' : 'tails';
}

const pics = {
  kitty: 'https://content.codecademy.com/courses/React/react_photo-kitty.jpg',
  doggy: 'https://content.codecademy.com/courses/React/react_photo-puppy.jpeg'
};

const people = ['Rowe', 'Prevost', 'Gare'];

const peopleLis = people.map((person,i) =>
  // expression goes here:
<li key= {'person_' + i}>{person}</li>
);

// Normal if else conditions
/*
let img;

// if/else statement begins here:
if (coinToss() === "heads")
{
img = (<img src={pics.kitty}/>);
}
else
{
img = (<img src={pics.doggy}/>);
}
*/


class QuoteMaker extends React.Component {
  render() {
    return (
      <blockquote>
        <p>
          The world is full of objects, more or less interesting; I do not wish to add any more.
        </p>
        <cite>
          <a target="_blank"
            href="https://en.wikipedia.org/wiki/Douglas_Huebler">
            Douglas Huebler
          </a>
        </cite>
      </blockquote>
    );
  }
};


const img = <img src={ coinToss() === 'heads' ? pics.kitty : pics.doggy} />;

//ReactDOM.render(peopleLis, document.getElementById('root'));

//ReactDOM.render(img, document.getElementById('root'));

//ReactDOM.render(<QuoteMaker/>, document.getElementById('root'));

ReactDOM.render(<Owl/>, document.getElementById('root'));
