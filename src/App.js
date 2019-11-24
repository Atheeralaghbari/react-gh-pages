import React from 'react';
import Post from './Posts';
import './App.css';
import './style.css'
function App() {
  return (
    <div className="wrapper">
   <div className="poster">
   <div className="col">
     <Post first="first" inner="more1" price="29" perMonth="Per Month" middle="Professional" MB="265 MB Memory" bandwidth="Unlimited Bandwidth" space="10 GB Amount of Space" btn="PURCHASE"> 
     </Post>
     </div>

     <div className="col">
     <Post first="second" inner="more2" price="49" perMonth="Per Month" middle="Corporate" MB="512 MB Memory" bandwidth="Unlimited Bandwidth" space="30 GB Amount of Space" btn="PURCHASE"> 
     </Post>
     </div>
     <div className="col">
     <Post  first="third" inner="more3" price="99" perMonth="Per Month" middle="Enterprise" MB="1,024 MB Memory" bandwidth="Unlimited Bandwidth" space="100 GB Amount of Space" btn="PURCHASE"> 
     </Post>
     </div>
    </div>
    </div>
  );
}

export default App;
