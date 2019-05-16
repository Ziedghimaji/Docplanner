import React from 'react';
import logo from './logo.svg';
import './App.css';
import Navmennu from './Nav';
import Logoimage from './Logo';
import Helthe from './Helth';
import Service from './Sectionservice';
import Biographie from './Biog';
import Biggest from './Big';

const nav=[
  {title:'About us' },
  {title: 'Career'},
  {title:'Department',tab:["Marketing","Customer","It,Product",'Finance','HR & more'] }

]
const country=[
  {ser:'choose country'},
  {ser:'Argentine'},
  {ser:'Brazil'},
  {ser:'Tunisia'},
  {ser:'UK'},
  {ser:'Russia'}
]
const image="https://media.glassdoor.com/sqll/1071394/docplanner-squarelogo-1515684466717.png"
const img = [
  image, image,image,image,image

]


function App (){
 
    return (
      <body>
        <header>
          <Logoimage  />
          <Navmennu navBar={nav} />
        </header>
        <main>
           <Helthe />
           <Service count={country} />
           <Biographie ima={img}/>
           <Biggest/>
        </main>
        
        
  
      </body>
      
     
    );

  }
  


export default App;
