 
 
 import React from 'react'
 import DateTime from './Componant/DateTime';
 
 function Card(props) {
     return (
         
            <div className="card">
  <h5 className="card-header">
      <DateTime/>
  </h5>
  <div className="card-body">
    <h5 className="card-title">{props.name}({props.age})</h5>
    <p className="card-text">{props.body}</p>
    <button onClick={props.click} className="btn btn-primary">Go somewhere</button>
    <button onClick={props.click} className="btn btn-danger">Delete</button>
  </div>
</div>

        
     )
 }
 export default Card;
 