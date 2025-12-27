import "./App.css"
function  App()
{
  return(
    <div  id="outer" align="center">
      <div id="inner">
      <font  id="savi"size="7" >🗝️</font>
      <h2>Admin Panel</h2>
      <input type ="text" placeholder="Enter user name here"></input>
      <input type ="password" placeholder="Enter password"></input>
      <p align="right"><button>Login</button></p>
      </div>
    </div>
  )

}
export default App
/* import React, { useState } from 'react';
import './App.css';
import React from 'react';
 // Import your CSS file

function App() {
  return (
    <div className="App">
      <div className="login-container">
        <h1 className="login-header">🗝️</h1>
         <h1 className="login-header">ADMIN PANEL</h1>
        <form >
          <input
            type="text"
            placeholder="Username"
            className="login-input"
          />
          <br></br>
          <input
            type="password"
            placeholder="Password"
            className="login-input"
          />
          <br></br>
          <button type="submit" className="login-button">
            Login
          </button>
        </form>
      </div>
    </div>
  );
}

export default App;
/*
import React, { useState } from 'react'
import { useEffect } from 'react'
const App = () => {
  const[name,setName]=useState("kaviya💔")
  useEffect(()=>{
    document.title=`Hello! ${name}`
  })
  const dis=()=>{
    setTimeout(()=>{
    setName("1.love 2.life")
  },3000)

  }
  return (
    <div>
      <h1>UseEffect Hook</h1>
      <button onClick={dis}>change Name</button>
      <br></br>
      {name}
    </div>
  )
}

export default App

/*import React from "react"
import { useState } from "react"
const App = () =>{

  const[val,setVal]=useState(0)
    const dis=(event)=>{
      setVal(parseInt(event.target.value)+1)
    }
  
return(
  <div>
  <button onClick={dis} value={val}> you clicked : {val} times</button>
  
    
  </div>
)
}
export default App
/*
import { useState } from "react"
function App()
{
  const[count,setCount]=useState(100)
  const show=(event)=>{
    if(event.target.id==="b1")
      setCount(count+1)
    if(event.target.id==="b2")
      setCount(count-1)
    if(event.target.id==="b3")
      setCount(count-5)
  }
  // const show1=()=>{
  //   setCount(count+1)
  // }
  // const show2=()=>{
  //   setCount(count-1)}
  
  return(
    <>
    <button id="b1" onClick={show}>Increment by 1</button>
    <button id="b2" onClick={show}>Decrement by 1</button>
    <button id="b3" onClick={show}>Decrement by 5</button>
      {/* <buttom onClick={show1}>Increment By 1</buttom >
    <button onClick={show2}>Decrement By 1</button>  
    
    <br></br>
    <h2>{count}</h2>
    </>
  )

}
export default App

/*
import { useState } from 'react'
import React from 'react'
const App = () => {
  const[name,setName]=useState("----")

  const dis=(event)=>{  //dis= user defined functions//
setName(event.target.value)   //argument not passed//           
  }
  const show=(v)=>{
    console.log(v)      //argument passed//
  }
  const find=(v1,v2)=>{
    console.log(v1+v2)      // two argument passed//
  }


  return (
    <div>
      <form>
      <input type ="text" value={name} onChange={dis} placeholder='Enter user name'></input><br></br>
        <input type ="password"  onChange={()=>show("12345")} placeholder='Enter password'></input><br></br>
          <input type ="number"  onChange={()=>find(12,34)} placeholder='accno'></input><br></br>
            <input type ="email" placeholder='Enter mail id'></input><br></br>

            <label>Select Gender</label>
            <input type="radio" name="gender"></input>Male
            <input type="radio" name="gender"></input>Female
            <input type="radio" name="gender"></input>Others
            <br></br>

            <label>Select course</label>
            <input type="checkbox" name="C"></input>C
            <input type="checkbox" name="C1"></input>C++
            <input type="checkbox" name="C2"></input>Java
            <input type="checkbox" name="C3"></input>Pthyon
            <input type="checkbox" name="C4"></input>none of th above
            <br></br>
            
            <select>
              <option>Select Month</option>
              <option>January</option>
              <option>February</option>
              <option>March</option>
              <option>April</option>
              <option>May</option>
              <option>June</option>
              <option>July</option>
              <option>August</option>
              <option>September</option>
              <option>October</option>
              <option>November</option>
              <option>December</option>
            </select>
            <br></br>

            select color:<input type='color' name='col'></input>
            <br></br>
            Select DOB:<input type='date' name='dob'></input>
            <br></br>
            Select time:<input type='time' name="time"></input>
            <br></br>
            select week:<input type="week" name="week"></input>
            <br></br>
            select file:<input type='file' name="resume"></input>
            <br></br>


                    
          
          <label>Type address</label>
          <textarea rows="7" cols="24"></textarea>
          <br></br>

          <label>list box</label>
          <select size="4" multiple>
            <option>sunday</option>
            <option>monday</option>
            <option>tuesday</option>
            <option>wednesday</option>
            <option>thursday</option>
            <option>friday</option>
            <option>saturday</option>
          </select>
          <br></br>

          😊😘❤️🎶😍💔
          <label>volume:</label>
            <input type= "range"  min="0" max="6" ></input>
            <br></br>
<progress style={{background:"green",border:"2px solid orange"}} min="0" max="100" values="90"></progress>   


          <button><b><i>clickme</i></b></button><br></br>
          <input type ="submit"></input><br></br>
          <input type='button' value="clickme"></input><br></br>
          
          </form>
    </div>
  )
}

export default App

 /*import parse from 'html-react-parser'

function App(props)
{

var ans=""
    for(var s in props.data)
    {
ans=ans+`<li>${s}=${props.data[s]}</li>`
console.log(s)

    }

return(
  <>
  <h1>
  {parse("<ol>"+ans+"</ol>"
  )}</h1>
  </>
)

}
export default App
/* //Finding DATATYPE
function App(props)
{
var a=props.data.rno;
var b=props.data.sname;
var c=props.data.mark;
var d=props.data.ismarried;
var e=props.data.location;
var f=props.data.hobbies


return(
  <>
  <h3>type of rno:{typeof(a)}</h3>
  <h3>type of sname:{typeof(b)}</h3>
  <h3>type of mark:{typeof(c)}</h3>
  <h3>type of  is married:{typeof(d)}</h3>
  <h3>type of location:{typeof(e)}</h3>
  <h3>type of hobbies:{typeof(f)}</h3>
  <h3>type of mark:{Array.isArray(c)?"it is array":"it is jsonobject"}</h3>
  <h3>type of hobbies:{Array.isArray(f)?"it is array":"it is json object"}</h3>
  
  
  
  </>
)}

export default App
 /*import React from "react";
class App extends React.Component
{
  constructor(props)
  {
    super(props)
    this.state={
      studentname:this.props.sname,
      studentmark:this.props.mark
    }
  }
  render()
  {
    return(
      <>
      <h1>Combine react state + props</h1>
      <h2>Student Name:{this.state.studentname}</h2>
      <h2>Student Mark:{this.state.studentmark}</h2>
      </>
    )
  }
}
export default App
/*import React from "react";
class App extends React.Component
{
  constructor()
  {
    super()
    this.state={sno:111,
      sname:"kaviya",
       marks:[88,56,87,98,67]
    }
  }
  show=()=>{
    this.setState({sname:"kaviya T"})
  }

  dis=()=>{
    this.setState({marks:[76,98,99,89,79]})
  }

  dis1=()=>{
    const newmarks=[...this.state.marks]
    newmarks[2]=99
    this.setState({marks:newmarks})
  }
  render()
  {
    return(
      <>
      <h1>This is class components</h1>
      <h2>Serial number:{this.state.sno}</h2>
       <h2>Serial name:{this.state.sname}</h2>
        <h2>student mark:{this.state.marks}</h2>
          {this.state.marks.map((v,index)=><>Mark:{index+1} = {v}<br></br></>)}
          <button onClick={this.show}>update name</button>
          <button onClick={this.dis}>update all mark</button>
          <button onClick={this.dis1}>update single mark</button>
        
      </>
    )
  }
}
export default App

/* import { aadhar, accno, place, sname } from "./mycomponents/commonvariables";
import Kaviya from "./mycomponents/Kaviya"


function App()
{
  return(
    <>
    <Kaviya/>
    <h1>this is default components</h1>
    <h1>my name:{sname}</h1>
    <h1> my city:{place}</h1>
    <h1>my aadhar:{aadhar}</h1>
    <h1>my accno :{accno}</h1>
    </>
  )
}
export default App
/*import Kaviya from "./mycomponents/Kaviya"
function App()
{
  return(
    <>
    <Kaviya/>  
     parent calling action 
    <h1>this is default app components</h1>
    
    </>
  )
}
export default App */
/*
function App()
{
  var arr=[11,22,33,44,78,98,43,27,12,56,111,119,222]
  var s=0
  var ma=arr[0]

   var order=arr
   var fans=""
  return(
    <>
      <h1>React Loop map method</h1>
      <h2>old model</h2>
      {arr[0]}
      {arr[1]}
      {arr[2]}
      {arr[3]}
      <h2>New Model Map (loop)</h2>
      {arr.map((v)=><>{v}+</>)}
      <h2>New Model Map (loop)</h2>
      <ol type="I">
      {arr.map((v)=><li>{v}</li>)}
      </ol>
      <h2>Task: Sum of array</h2>
      <div style={{display:"none"}}>
      {arr.map((item)=><>{s=s+item}<br></br></>)}
      </div>
      <h3>Sum of Array:{s}</h3>

      
      <div style={{display:"none"}}>
      {arr.map((v)=><>{ma<v && <>{ma=v} </>}</>)}    
      </div>
      <h3>Max of Array:{ma}</h3>

      <h2>Ascending order</h2>
      <div style={{display:"none"}}>{order.sort((x,y)=>(x-y))}</div>
      {order.map((item)=><>{item} + </>)}
    
      <h2>descending order</h2>
      <div style={{display:"none"}}>{order.sort((x,y)=>(y-x))}</div>
      {order.map((item)=><>{item},</>)}

      <h3>Adding element in an array</h3>
      <div style={{display:"none"}}>{order.push(999)}</div>
      {order.map((item)=><>{item},</>)}
      <br></br>
      <h3>remove last element in an array</h3>
      <div style={{display:"none"}}>{order.pop()}</div>
      <div style={{display:"none"}}>{order.pop()}</div>
      <div style={{display:"none"}}>{order.pop()}</div>      
      {order.map((item)=><>{item},</>)}

    <h2>Remove last comma or plus or any char</h2>
      <div style={{display:"none"}}>{order.map((item)=><>{fans=fans+item+","}</>)}</div>
      {fans.slice(0,-1)}  




    </>
  )
}
export default App
/*
function App()
{
  var arr=[11,12,13,14,15]
  var[v1,,v2,...v3]=arr //,, -skipp two values ,,, -skip three values.
  return(<>
  <h1>spread operator   </h1>
  <h2>index 0:{v1}</h2>
  <h2>index 1:{v2}</h2>
  <h2>index 5:{v3}</h2>
  // {/* <h2>index 0:{arr[3]}</h2> }
  {/* <h2>index 0:{arr[1]}</h2> */
// }
  // </>)
// }
// export default App
/*
function App()
{
  var res="fail"
  var avg=85.5
  return(<>
  <h1>mark pass or fail</h1>
  <h2>
    {
    (res==="pass" && 
      ((avg>=85 && "outstanding") ||
       (avg>=75 && "excellent") ||
       (avg>=65 && "very good") 
       ||"fair"))||"No grade because fail"}
</h2>
  </>)
}
export default App */
/*    
function App()
{ 
  var unit=410   
   
  return(
    <>
    <h1> react simple  if  else ifstatement </h1>
    <h2>{(unit<=100 && "0/unit") || 
    (unit>=101 && unit<=200 && "Rs."+(unit-100)*2) ||
    (unit>=201 && unit<=300 && "Rs."+(200+(unit-200)*3))||
    (unit<=301 && unit<=400 && "Rs."+(500+(unit-300)*4)) ||
    "₹"+(900+(unit-400)*5) }
</h2>
    </>
  )
}
export default App */
/*
function App()
{
  var avg=30
  return(
    <>
    <h1> react simple  if  else ifstatement </h1>
    <h2>{(avg>=85 && "outstanding") || (avg>=75 && "excellent") ||(avg>=65 && "very good") ||"fair"}
</h2>
    </>
  )
}
export default App/*
/*
function App()
{
  var m=0
  return(
    <>
    <h1> react if statement </h1>
    <h2>{(m%4===0 && "leap year")|| "not a leap year"}</h2>
    </>
  )
}
export default App */
/*
function App()
{
  var a=54
  return(
    <>
    <h1> react if statement </h1>
    <h2>{(a>18 && "eligible")|| "not eligible"}</h2>
    </>
  )
}
export default App */
/*
function App()
{
  var num=10
  return(
    <>
    <h1> react if statement </h1>
    <h2>{(num%2==0  && "even") ||"odd"}</h2>
    </>
  )
}
export default App /*
/*
function App()
{
  var m=0
  return(
    <>
    <h1> react if statement </h1>
    <h2>{(m>0 && "+ve")|| (m<0 && "-ve") || (m===0 && "zero")}</h2>
    </>
  )
}
export default App */
/*
function App()
{
  var m=0
  return(
    <>
    <h1> react if statement </h1>
    <h2>{(m%4===0 && "leap year")|| "not a leap year"}</h2>
    </>
  )
}
export default App */
/*
function App()
{
  var a=54
  return(
    <>
    <h1> react if statement </h1>
    <h2>{(a>18 && "eligible")|| "not eligible"}</h2>
    </>
  )
}
export default App */
/*
function App()
{
  var num=10
  return(
    <>
    <h1> react if statement </h1>
    <h2>{(num%2==0  && "even") ||"odd"}</h2>
    </>
  )
}
export default App /*
/*
function App()
{
  var mark=30
  return(
    <>
    <h1> react if statement </h1>
    <h2>{(mark>34 && "pass")|| "fail"}</h2>
    </>
  )
}
export default App */


/*
function App()
{
  if(true)
  {
  var v=100
  let l=200
  const c=300
  v++;
  // l++;
  // console.log("let:"+l);
  // c++;
  // console.log("const:+c");
  }
  return(
    <>
    <h1>variable : global : {v}</h1>
    <h2>does not work let and const : because local</h2>
    </>
  )
}
export default App */
/*
function App()
{
  let myfun=(a,b,c)=>{
    var tot=a+b+c
    document.getElementById("res").innerHTML=`<h2>Total:${tot}</h2>`;
  }
  return(
    <>
    <h1>Arrow Functions without parameter</h1>
    <h2>Note: onclick C must be caps <br></br> don't use double quotes</h2>
    <h2>Note: in calling function don't use parenthesis when without passing args</h2>
    <button onClick={myfun(10,20,30)}>clickme</button>
    <div id="res"></div>
    </>
  )
}
export default App 
*/

/*
import myimg from './images/img6.jpg'
function App()
{
  return(<>
  <center>
    <h2>Image Demo using as expression</h2>
    <center></center>
    <img src={myimg} width="75%" height="auto" alt="path is wrong"></img>
    </center>
    
    </>
  )
} */
// export default App
/*
function App()
{
  var a=900
  var b=6000
  var c=500
  return(
    <>
    <h2>Biggest Among 2no's using conditional or ternary operator</h2>
    { <h1>biggest number: {a>b?a:b}</h1> }
    <h1>biggest number among 3 numbers :{(a>b && a>c)?a:(b>c?b:c)}</h1>
    </>
  )
}
export default App
*/
/*
function App()
{
  var a=10
  var b=20
  var c="KAVIYA"
  return(<>
    <h1>Total:{a+b}</h1>
    <marquee bgcolor="red"><font size="6">{c}</font></marquee>

  </>)
}
export default App
*/

/*
import React from "react";

class Parent  extends React.Component
{
  render(){
    return(<>
      <h1>welcome to components</h1>
      <h1>welcome to components</h1>
      <h1>welcome to components</h1>
      <p>Cillum pariatur irure enim eu. Deserunt irure occaecat esse ut irure elit deserunt ipsum ea elit cupidatat irure. Sint esse veniam eu quis exercitation. Commodo velit eiusmod excepteur reprehenderit proident.

Aliqua velit aliqua qui consectetur cupidatat dolore elit incididunt duis sint nulla exercitation do dolor. Do adipisicing nisi velit fugiat sunt consequat cupidatat laboris. Adipisicing amet non ex officia sit irure ex deserunt deserunt. Magna ea qui elit velit ipsum reprehenderit. Culpa eu ullamco reprehenderit deserunt ipsum laborum esse irure. Commodo consectetur quis elit sint mollit aliqua qui pariatur ullamco.

Cupidatat velit excepteur tempor aliquip qui aliquip anim officia voluptate amet ex duis deserunt ad. Consectetur veniam dolor laborum ea officia magna sunt nulla cupidatat adipisicing aute dolor. Aute id enim deserunt magna laborum enim ea dolore. Reprehenderit duis excepteur ex mollit eiusmod culpa culpa. Consequat sit sit nisi cupidatat eiusmod voluptate ex nisi.

Ut cupidatat labore amet non excepteur eu adipisicing pariatur. Tempor Lorem aute velit anim velit. Ullamco nisi ut nisi fugiat laboris dolor quis tempor eu sint consequat ex. In esse amet velit quis officia ut velit pariatur aliquip id cupidatat sunt elit exercitation. Excepteur nulla sunt Lorem culpa. Amet ea laborum aliquip aliqua laborum anim id commodo.

Officia qui sint excepteur laboris amet non Lorem eu elit. Commodo eiusmod sunt nostrud cupidatat. Fugiat est id laborum ut. Do elit dolore quis nisi aliquip nulla occaecat consequat est Lorem. Excepteur ut eu enim occaecat reprehenderit elit esse veniam eiusmod do incididunt. Ut pariatur deserunt ut elit ex consectetur amet sunt est voluptate deserunt nulla.</p>
   </>)
  }
}
class App extends Parent
{
  render ()
  {
    return(<>
    <Parent/>
    <h1>welcome to class components</h1> 
     <h2>welcome to class components</h2> 
      <h3>welcome to class components</h3> 
       <h4>welcome to class components</h4>
       <p>Ad nostrud adipisicing id tempor consectetur ipsum adipisicing. Laboris reprehenderit dolor reprehenderit et et eu amet. Enim excepteur commodo culpa magna veniam ipsum. Nulla duis non adipisicing do enim. Enim consectetur culpa ut non magna. Aliquip labore velit proident nulla ut tempor mollit magna dolor culpa eu.

                      Occaecat enim ex officia sit ipsum cillum quis adipisicing ad. Ea magna adipisicing duis dolore deserunt eiusmod amet. Deserunt anim id magna ut qui voluptate consectetur amet amet.

Do id esse ullamco do anim nulla minim esse mollit laborum sint. Id Lorem nulla qui id ad amet in minim. Dolore commodo minim sit ullamco Lorem pariatur id qui elit labore. Sunt anim tempor ullamco in cillum deserunt laboris elit ipsum id et. Reprehenderit culpa reprehenderit in ipsum ullamco quis adipisicing ut officia. Fugiat sunt commodo anim commodo. Consectetur enim consequat eiusmod voluptate irure anim incididunt ex labore exercitation proident irure excepteur.</p>
       </>) 
  }
}
export default App
*/
/*
function App()
{
  return(
    // <div>
    // <h1>Welcome to react js</h1>
    // <h1>Welcome to react js</h1>
    // <h1>Welcome to react js</h1>
    // <h1>Welcome to react js</h1>
    // </div>
  )
}
export default App */
/*
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
*/