import React from 'react'
import { useState, useEffect } from 'react'

let i = 10;

export default function PostList() {

    const [sendRequest, setSendRequest] = useState(false)
    const [data, setData] = useState(null)
    const [user, setUser] = useState(null)
    const [error, setError] = useState(null)

    function updateValue(value) {
        i = value * 10
        setSendRequest(true)
    }

    // function idToUser(user){
    //     for(let i=0;i<10;i++){
    //         // console.log(data)
    //         setData(data.name = user.userId)
    //         console.log(data)
    //     }
    // }
    
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
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
        })

        fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => {
            if (response.ok) {
                return response.json()
            }
            throw response;
        })
        .then(user => {
            setUser(user);
            // idToUser(user);
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
        <div className='post'>
            <div className='postContainer'>
                {data?.slice(i-10,i).map(data => <div className='postBox'>
                    <div className='authorPost'>
                        <span>Posted by:</span>
                        <span>{data.userId}</span>
                        </div>
                    <div className='titlePost'>{data.title}</div>
                    <hr style={{fontWeight:'700'}}/>
                    <div className='bodyPost'>{data.body}</div>
                    </div>)}
            </div>
            <div className="buttonBox">
                {[...Array(10)].map((el, i) => (
                    <button className='button' onClick={() => updateValue(i + 1)}>{i + 1}</button>
                ))
                }
            </div>
        </div>
        
    )
}