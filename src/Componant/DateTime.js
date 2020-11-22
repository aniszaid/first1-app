

import React from 'react'
 
  function DateTime() {
     return (
         
             <small>
             {new Date().toDateString() } | { new Date().toTimeString()}
             </small>
         
     )
 }
 export default DateTime;