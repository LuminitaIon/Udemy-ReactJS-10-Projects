import React, { useState } from 'react'
import bootstrap from '../node_modules/bootstrap/dist/css/bootstrap.min.css'

function Body() {

    const [name, setName] = useState('')
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')


    function registerUser(event) {
        event.preventDefault()

        let users = JSON.parse(localStorage.getItem('[users]') || '[]')
        let newUser = {
            name: name,
            username: username,
            password: password
        }

        users = [...users, newUser]

        localStorage.setItem('users', JSON.stringify(users))

        alert('Registration is successfull')
    }

    return (
        <div>

            <div className='row row justify-content-between'>

                <div className='col-md-6'>
                    <img src='https://static.xx.fbcdn.net/rsrc.php/v3/y7/r/7XdR1KwCifL.png' alt='facebook map' />
                </div>

                <div className='col-md-4 registerform'>
                    <h1>Register</h1>
                    <form onSubmit={registerUser}> 

                        <input type="text" placeholder='name' className='form-control' 
                            value={name} onChange={(e) => {setName(e.target.value)}}/>

                        <input type="text" placeholder='username' className='form-control' 
                        value={username} onChange={(e) => {setUsername(e.target.value)}}/>

                        <input type="password" placeholder='password' className='form-control' 
                        value={password} onChange={(e) => {setPassword(e.target.value)}}/>

                        <input type="submit" className='btn btn-primary' value="SING UP"/>

                    </form>
                </div>

            </div>

        </div>
    )
}

export default Body