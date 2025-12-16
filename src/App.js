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
export default App
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