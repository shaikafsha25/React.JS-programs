/*import React from 'react';
class Counter extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      count: 0
    };
    this.increment=this.increment.bind(this);
    this.decrement=this.decrement.bind(this);
    this.reset=this.reset.bind(this);
  }
  increment(){
    this.setState(prevState=>({
      count:prevState.count+1
    }));
  }
  decrement(){
    this.setState(prevState=>({
      count:prevState.count-1
    }));
  }
  reset(){
    this.setState({
      count:0
    });
  }
  render(){
    return(
      <div>
        <h1>Current Count:{this.state.count}</h1>
        <button onClick={this.increment}>Increment</button>
        <button onClick={this.decrement}>Decrement</button>
        <button onClick={this.reset}>Reset</button>
        </div>
    );
  }
}
export default Counter;*/

/*import React from 'react';
import Counter from'./counter';
function App(){
  return(
    <div className="App">
    <Counter/>
    </div>
  );
}
export default App;*/

/*import React,{useState} from 'react';
function ClickHandlerExample(){
  const[message,setMessage]=useState('Click the button!');
  const handleClick=()=>{
    setMessage('Button Clicked!');
    console.log('Button was Clicked!');
  };
  return(
    <div>
      <h2>Button Click Event Example</h2>
      <p>{message}</p>
      <button onClick={handleClick}>
        Click Me
      </button>
    </div>
  );
}
export default ClickHandlerExample;*/

/*import React,{useState} from 'react';
function CounterButton(){
  const[count,setCount]=useState(0);
  const handleIncrement=()=>{
    setCount(prevCount=>prevCount+1);
  };
  const handleDecrement=()=>{
    setCount(prevCount=>prevCount-1);
  };
  const handleReset=()=>{
    setCount(0);
  };
  return(
    <div>
      <h1>Counter:{count}</h1>
      <button onClick={handleIncrement}>Increment</button>
      <button onClick={handleDecrement}>Decrement</button>
      <button onClick={handleReset}>Reset</button>
    </div>
  );
}
export default CounterButton;*/

/*import React,{useState} from 'react';
function UserGreeting(){
  const[isLoggedIn,setIsLoggedIn]=useState(false);
  return(
    <div>
      <h1>Conditional Rendering with Ternary Operation</h1>
      <button onClick={()=>setIsLoggedIn(! isLoggedIn)}>
        {isLoggedIn?'Logout':'Login'}
      </button>
      {isLoggedIn?(
        <p>Welcome back,user!</p>
      ):(
        <p>please log in to continue.</p>
      )}
    </div>
  );
}
export default UserGreeting;*/
/*import React from 'react';
function App(){
  return(
    <div>
      <h2>About React</h2>
      <p>
        {'React is a JavaScript library for building user interfaces.It allows developers to create reusable UI components.This makes building complex and interactive Web applicatuions more efficient.'}
      </p>
    </div>
  );
}
export default App;*/
/*import React,{useState} from 'react';
function CounterButton(){
  const[count,setCount]=useState(0);
  const handleIncrement=()=>{
    setCount(prevCount=>prevCount+1);
  };
  const handleDecrement=()=>{
    setCount(prevCount=>prevCount-1);
  };
  const handleReset=()=>{
    setCount(0);
  };
  return(
    <div>
      <h1>Counter:{count}</h1>
      <button onClick={handleIncrement}>Increment</button>
      <button onClick={handleDecrement}>Decrement</button>
      <button onClick={handleReset}>Reset</button>
    </div>
  );
}
export default CounterButton;*/
/*import React,{useState,useEffect} from 'react';
function DataFetcher(){
  const[data,setData]=useState(null);
  const[loading,setLoading]=useState(true);
  const[error,setError]=useState(null);
  useEffect(()=>{
    const fetchData=async()=>{
      try{
        const response=await 
          fetch(`https://jsonplaceholder.typicode.com/posts/1`);
        if(! response.ok){
           // eslint-disable-next-line
          throw new Error('HTTP error!status:${response.status}');
        }
        const jsonData=await response.json();
        setData(jsonData);
      } catch(err){
        setError(err);
      }finally{
        setLoading(false);
      }
    };
    fetchData();
  },[]);
  if(loading){
    return <div>Loading data.....</div>;
  }
  if(error){
    return <div>Error:{error.message}</div>;
  }
  return(
    <div>
      <h1>Fetched Data</h1>
      {data &&(
        <div>
          <h2>{data.title}</h2>
          <p>{data.body}</p>
          </div>
      )}
    </div>
  );
}
export default DataFetcher;*/

/*import React from "react";
import"./index.css";
import Parent from "./Parent";
import "./App.css";
const App=()=>{
  return(
    <div className="App">
      <h1 className="geeks">Full Stack Development</h1>
      <h3>This is App.js Component</h3>
      <Parent/>
    </div>
  );
};
export default App;*/
/*import React,{useState} from 'react';
function MyForm(){
  const[name,setName]=useState('');
  const[email,setEmail]=useState('');
  const[message,setMessage]=useState('');
  const handleChange=(event)=>{
    const{name,value}=event.target;
    if(name==='name'){
      setName(value);
    }else if(name==='email'){
      setEmail(value);
    }else if(name==='message'){
      setMessage(value);
    }
  };
  const handleSubmit=(event)=>{
    event.PreventDefault();
    alert('From submitted!\nName:${name}\nEmail:${email}\nMessage:${message}');
  };
  return(
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="name">Name:</label>
        <input
        type="text"
        id="name"
        name="name"
        value={name}
        onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="email">Email:</label>
        <input
        type="email"
        id="email"
        name="email"
        value={email}
        onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="message">Message:</label>
        <textarea
        id="message"
        name="message"
        value={message}
        onChange={handleChange}
        />
      </div>
      <button type="submit">Submit</button>
    </form>
  );
}
export default MyForm;*/


/*import React from 'react';
function App() {
  const fruits = ["Apple","Mango","Banana","Kiwi"];
  const styles = {
    backgroundColor: "white",
    width: "50px",
    marginBotton: "10px",
    padding: "10px",
    color: "green",
    boxShadow: "rgb(0, 0, 0, 0.44) 0px 5px 5px",
  };
  return(
    <>
      {fruits.map((fruit) => (
        <div key={fruit} style={styles}>
          {fruit}
        </div>
      ))}
    </>
  );
}
export default App;*/