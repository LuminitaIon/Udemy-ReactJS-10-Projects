import React, { useState } from 'react'
import bootstrap from '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import {useNavigate} from 'react-router-dom'
import './Navbar.css'

function Navbar() {

    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const history = useNavigate()

    function login() {
        let users = JSON.parse(localStorage.getItem('users'))
        let i = 0;

        for(let user of users ) {
            if(user.username === username && user.password === password) {
                i++;
            }
        }

        if(i===1) {
            alert('Login successfull')
            localStorage.setItem('loggedin', 'loggedin')
            history('/dashboard')
            window.location.reload(true)
        }
        else {
            alert("Invalid")
        }
    }

    function logout() {
        localStorage.removeItem('loggedin')
        history('/')
        window.location.reload(true)
    }

    return (
        <div>
            <div className='row nav'>

                <div className='col-md-6'>
                    <h1>Facebook</h1>
                </div>

                <div className='col-md-6'>

                {
                    (() => {
                        if (localStorage.getItem('loggedin')) {
                            return <button onClick={logout}>LOGOUT</button>
                        }
                        else {
                            return <div>
                                <input type="text" placeholder='Username' value={username}
                                    onChange={(e) => { setUsername(e.target.value) }}
                                />
                                <input type="text" placeholder='Password' value={password}
                                    onChange={(e) => { setPassword(e.target.value) }}
                                />
                                <button onClick={login}>LOGIN</button>
                            </div>
                        }

                    })()
                }

                </div>

            </div>
        </div>
    )
}

export default Navbar