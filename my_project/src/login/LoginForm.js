import React from 'react'
import { useState, useEffect } from 'react'

export default function LoginForm() {

    const [data, setData] = useState(null)
    const [error, setError] = useState(null)
    const [sendRequest, setSendRequest] = useState(false)

    const [email, setEmail] = useState(null)

    const [login, setLogin] = useState(false)

    useEffect(() => {
            fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => {
                if (response.ok) {
                    return response.json()
                }
                throw response;
            })
            .then(data => {
                setData(data)
                for(let i=0;i<10;i++){
                    if(data[i].email === "Nathan@yesenia.net"){
                        console.log('okay!')
                    }
                }
            })
            .catch(error => {
                console.error("Error fetching data: ", error);
                setError(error);
            })
            .finally(() => {
                setSendRequest(false)
        
            })
        
    }, [sendRequest])
    

    return (
        <div className='auth-form'>
            <form className='form'>
                <div className='form-box'>
                    <h3 className='form-title'>Hello user, please Login!</h3>
                    <div className='form-group mt-3'>
                        <label>Email</label>
                        <input type="text" placeholder='Enter Email...'/>
                    </div>
                    <div className='form-group mt-3'>
                        <label>Password</label>
                        <input type="text" placeholder='Enter Password...'/>
                    </div>
                    <div className='d-grid gap-2 mt-3'>
                        <button type='submit' onClick={() => setSendRequest(true)}>Login</button>
                    </div>
            </div>

            </form>
        </div>
    )
}