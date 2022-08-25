import React, { useState, useEffect } from 'react'

let friendList = []

export default function FriendList() {

    const [sendRequest, setSendRequest] = useState(false)
    const [data, setData] = useState(null)
    const [error, setError] = useState(null)
    
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
                if(data[i].name!==localStorage.getItem('name')){
                    friendList.push(data[i].name)                 
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

    return(
        <div className='App'>
           {[...Array(10)].map((el, i) => (
                    <div>{friendList[i]}</div>
                ))
                }
        </div>
    )
}