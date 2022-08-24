import React from 'react'
import { useState, useEffect, useRef } from 'react'

export default function LoginForm() {

    const [data, setData] = useState(null)
    const [error, setError] = useState(null)
    const [sendRequest, setSendRequest] = useState(false)

    const email = useRef(null);

    const [login, setLogin] = useState(false)

    function handleChange(e) {
        e.preventDefault();
        console.log('qua', email.current.value)
        setSendRequest(true);
    };

    function authenticate(){
        for(let i=0;i<10;i++){
            if(data[i].email === email.current.value){
                console.log('Bentornato/a ', data[i].name)

                localStorage.setItem('id', data[i].id)
                localStorage.setItem('name', data[i].name)
                localStorage.setItem('username', data[i].username)
                localStorage.setItem('email', data[i].email)
                // localStorage.setItem('address', data[i].address)
                localStorage.setItem('phone', data[i].phone)
                localStorage.setItem('website', data[i].website)
                // localStorage.setItem('company', data[i].company)

                window.location.reload(true);
            }
        }
    }

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
                authenticate();
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
                        <input type="text" ref={email} placeholder='Enter Email...'/>
                    </div>
                    <div className='form-group mt-3'>
                        <label>Password</label>
                        <input type="text" placeholder='Enter Password...'/>
                    </div>
                    <div className='d-grid gap-2 mt-3'>
                        <button type='submit' onClick={handleChange}>Login</button>
                    </div>
            </div>

            </form>
        </div>
    )
}