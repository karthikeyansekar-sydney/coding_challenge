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
import { NavBar } from './NavBar';
import TonightsPlan from './TonightsPlan';

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

class MyName extends React.Component {
	// name property goes here:
get name() {
  return 'yeskay';
}

  render() {
    return <h1>My name is {this.name}.</h1>;
  }
}


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

  class Contact extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        password: 'swordfish',
        authorized: false
      };
      this.authorize = this.authorize.bind(this);
    }

    authorize(e) {
      const password = e.target.querySelector(
        'input[type="password"]').value;
      const auth = password == this.state.password;
      this.setState({
        authorized: auth
      });
    }

    render() {

      const login = (<form action="#" onSubmit={this.authorize}>
      <input type="password" placeholder="Password"/>
      <input type="submit"/>
      </form>);

  const contactInfo = (
     <ul>
            <li>
              client@example.com
            </li>
            <li>
              555.555.
            </li>
          </ul>
  );

      return (
        <div id="authorization">
          <h1>Contact</h1>
        {this.state.authorized ? contactInfo : login}
        </div>
      );
    }
  }

  class ProfilePage extends React.Component {
    render() {
      return (
        <div>
  <NavBar />
          <h1>All About Me!</h1>
          <p>I like movies and blah blah blah blah blah</p>
          <img src="https://content.codecademy.com/courses/React/react_photo-monkeyselfie.jpg" />
        </div>
      );
    }
  }

  ReactDOM.render(<ProfilePage/>,document.getElementById('root'));

//ReactDOM.render(<Contact />,document.getElementById('root'));

//ReactDOM.render(peopleLis, document.getElementById('root'));

//ReactDOM.render(img, document.getElementById('root'));

//ReactDOM.render(<QuoteMaker/>, document.getElementById('root'));

//ReactDOM.render(<Owl/>, document.getElementById('root'));

//ReactDOM.render(<TonightsPlan/>, document.getElementById('root'));

//ReactDOM.render(<MyName/>, document.getElementById('root'));
