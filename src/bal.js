import React, { useState } from 'react';

class Popbal {
  constructor(props) {
    this.x = 0;
    this.y = Math.floor(Math.random() * 5);
    console.log(this.y)
  }

  ball() {
    if (this.x === 0) {
      return (<div><div class={"gr color"+this.y} ></div></div>);
    } else {
      return <h1 class={"tcolor"+this.y}>POP!</h1>;
    }
  }
}

class Ba {
  constructor() {
    this.ar = [];
    for (let i = 0; i < 35; i++) {
      this.ar[i] = new Popbal();
    }
  }
}

function Balp() {
  const[bas,setBas] = useState(new Ba());
   
  const handleMouseEnter = (props) => {
    setTimeout(()=> {const arc=[...bas.ar]
    arc[props].x = 1;
    setBas({...bas.ar, ar: arc})},200);
     };

     const handleMouseClick = (props) => {
        setTimeout(()=> { const arc=[...bas.ar]
        arc[props].x = 0;
        setBas({...bas.ar, ar: arc})},300);
         };
  
  return (
  
  <div class="grid-container">
      {bas.ar.map((popbal, index) => (
        <div key={index} onClick={()=>handleMouseClick(index)} onMouseEnter={() => handleMouseEnter(index)}>
          {popbal.ball()}
        </div>
      ))}
    </div>

  );
}

export { Popbal, Balp };
