import React, { useState } from 'react';
// import { useHistory } from 'react-router-dom';
import Customer from './Customer';
import Admin from './Admin';
import Manager from './Manager';
import ReactDOM from 'react-dom';

const Login = () => {

  const [username, setuserName] = useState('');
  const [password, setPassword] = useState('');

  const handle = () => {
     localStorage.setItem('userName', username);
     localStorage.setItem('Password', password);
     validate(username, password);
     
     
  };
  const remove = () => {
     localStorage.removeItem('userName');
     localStorage.removeItem('Password');
  };
  const Logout = () => {
    localStorage.clear();
  }
  
  
 //  var outputName = document.getElementById("username");
 //  var outputPass = document.getElementById('password');
  const validate = () => {
   // var outputName = localStorage.getItem('username');
   // var outputPass = localStorage.getItem('password');

   if(username == "admin" && password == "pass"){
          
         alert('logged in as admin');
         
         ReactDOM.render(
          <Admin />,
          document.getElementById('root')
        );
         
     
   }else if(username == "customer" && password == "passed"){
     alert('logged in as customer');
     ReactDOM.render(
      <Customer />,
      document.getElementById('root')
    );
     
   }else if(username == "manager" && password == "passing") {
     alert('logged in as manager');
     ReactDOM.render(
      <Manager />,
      document.getElementById('root')
    );
     
   } else {
     alert('Not Authorized');
   }

  }



  return(
    <div className="App">
      <p>Please Check the ReadMe file for the credentials</p>
      <h1>Login</h1>
      <input
       placeholder="username"
        value={username}
        onChange={(e) => setuserName(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
  
      <button onClick={handle}>Login</button>
      
  
      <>
         <button onClick={remove}>Remove</button>
      </>
    </div>
  );
 
}
export default Login;