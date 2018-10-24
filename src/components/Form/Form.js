import React, { Component } from 'react'; 

const form = (props) =>  {

   
   return (
      <form onSubmit={props.getWeather}>
         <input type="text" name="city" placeholder="city..." />
         <input type="text" name="country" placeholder="country..."/>
         <button>Get Weather</button>
      </form>
      )
   
};

export default form; 