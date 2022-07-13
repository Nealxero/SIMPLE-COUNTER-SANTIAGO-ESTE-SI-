import React from "react";
import ReactDOM from "react-dom";
import PropTypes from 'prop-types';

// include your styles into the webpack bundle
import "../styles/index.css";

//import your own components
import Home from "./component/home.jsx";
//import './icons.js';
const CounterStyle = { 
    display: "inline-flex",
    fontSize: "50px",
    paddingTop: "10px",
    backgroundColor: "black",
    color: "white"
    
}   
//tried to do a reset button but dont really know how to, the code would supposedly be const button = document.querySelector('button')

function SimpleCounter(props){
    return (<div className="text-center">
        <div className="texto">
            
            </div>
        <div className="bigCounter" style={CounterStyle}>
            <div className="six">{props.SixD % 10}</div>
            <div className="five">{props.FiveD % 10}</div>
            <div className="four">{props.FourD % 10}</div>
            <div className="tree">{props.ThreeD % 10}</div>
            <div className="two">{props.TwoD % 10}</div>
            <div className="one">{props.OneD % 10}</div>
    </div>
    </div>
    
    ); 
}


// D = Digit
SimpleCounter.propTypes = {
    OneD: PropTypes.number,
    TwoD: PropTypes.number,
    ThreeD: PropTypes.number,
    FourD: PropTypes.number,
    FiveD: PropTypes.number,
    SixD: PropTypes.number
};

let counter = 0;
setInterval(function(){
    const one = Math.floor(counter/1);
    const two = Math.floor(counter/10);
    const three = Math.floor(counter/100);
    const four = Math.floor(counter/1000);
    const five = Math.floor(counter/10000);
    const six = Math.floor(counter/100000);

   
    counter++;

    ReactDOM.render(
        <SimpleCounter OneD={one} TwoD={two} ThreeD={three} FourD={four} FiveD={five} SixD={six} />, 
        
        document.querySelector("#app"));
    
},1000);
    