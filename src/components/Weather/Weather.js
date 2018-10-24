import React from 'react';

const weather = (props) => {

   return (
         <div className="weather__info">
            { 
               props.city && props.country ? <h4 className="weather__key">Location: 
               <span className="weather__value"> {props.city} - {props.country}</span>
               </h4> : null
            }
            { 
            props.temperature ? <p className="weather__key">Temperature: 
               <span className="weather__value"> {props.temperature}</span>
               </p> : null
            }
            { 
            props.description ? <p className="weather__key">Conditions: 
               <span className="weather__value"> {props.description}</span>
               </p> : null
            }
            { 
            props.humidity ? <p className="weather__key">Humidity: 
               <span className="weather__value"> {props.humidity}</span>
               </p> : null
            }
            { 
            props.description ? <p className="weather__key">Conditions: 
               <span className="weather__value"> {props.description}</span>
               </p> : null
            }
            { 
            props.error ? <p className="weather__error"> {props.error}</p> : null
            }
       </div>
      )
};

export default weather; 