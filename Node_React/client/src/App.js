import './App.css';
import React, {useState} from 'react';
import axios from 'axios'

function App() {

  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  function login(event) {

    event.preventDefault()

    let user = {
      username: username,
      password: password
    }

    axios.post('/login', user)
      .then(res => {alert(res.data)})
      .catch(err => {console.log(err)})

  }


  return (
    <div className="App">
      <h1>Connecting react with node</h1>

      <form action=''>

        <input type="text" placeholder='username' value={username}
          onChange={(e) => {setUsername(e.target.value)}}/>

          <br />

        <input type="text" placeholder='password' value={password}
          onChange={(e) => {setPassword(e.target.value)}}/>

        <br />  

        <button onClick={login}>Login</button>

      </form>
    </div>
  );
}

export default App;
