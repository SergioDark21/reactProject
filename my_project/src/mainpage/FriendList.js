import React, { useState, useEffect } from 'react'

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
        <div>
            {data.map((user, index) => {
                return (
                    <div key={index}>
                        <h2>Name: {user.name}</h2>
                    </div>
                )
            })}
        </div>
    )
}