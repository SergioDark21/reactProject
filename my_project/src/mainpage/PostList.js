import React from 'react'
import { useState, useEffect } from 'react'

let i = 10;

export default function PostList() {

    const [sendRequest, setSendRequest] = useState(false)
    const [data, setData] = useState([])
    const [user, setUser] = useState([])
    const [error, setError] = useState(null)

    const [myPost, setMyPost] = useState(true);
    
    function changeToMyPost(value){
        setMyPost(value);
    }

    function myOwn(value){
        if(value.userId == localStorage.getItem('name')){
            return value;
        }
        else return false;
    }

    function myFriends(value){
        if(value.userId != localStorage.getItem('name')){
            return value;
        }
        else return false;
    }

    function updateValue(value) {
        i = value * 10
        setSendRequest(true)
    }
    
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
        })
        .catch(error => {
            console.error("Error fetching data: ", error);
            setError(error);
        })
        .finally(() => {
            setSendRequest(false)
        })
    
    }, [sendRequest])

    for(let a=0;a<100;a++){
                if(data[a]?.userId){
                    for(let b=0;b<10;b++){
                        if(user[0]?.id){
                            if(data[a].userId === user[b].id){
                                setData(data[a].userId = user[b].name)
                            }
                        }

                    }
                }
                
    }   

    return(
        <div className='post'>
            <button onClick={() => changeToMyPost(true)}>MY POST</button>
            <span> | </span>
            <button onClick={() => changeToMyPost(false)}>FRIEND'S POST</button>
            {myPost ? null :
                <div className='friendPostContainer'>
                    {Array.from(data).filter(myFriends).slice(i-10,i).map(data => <div className='postBox'>
                        <div className='authorPost'>
                            <span>Posted by: </span>
                            <span>{data.userId}</span>
                            </div>
                        <div className='titlePost'>{data.title.toUpperCase()}</div>
                        <hr style={{fontWeight:'700'}}/>
                        <div className='bodyPost'>{data.body}</div>
                        </div>)}
                </div>
            }
            {!myPost ? null : 
                <div className='myPostContainer'>
                {Array.from(data).filter(myOwn).map(data =>  <div className='postBox'>
                    <div className='authorPost'>
                        <span>Posted by: </span>
                        <span>{data.userId}</span>
                        </div>
                    <div className='titlePost'>{data.title.toUpperCase()}</div>
                    <hr style={{fontWeight:'700'}}/>
                    <div className='bodyPost'>{data.body}</div>
                    </div>
                )}
                </div>
            }
            {!myPost ? null :
                <div className="buttonBox">
                {[...Array(1)].map((el, i) => (
                    <button className='button' onClick={() => updateValue(i + 1)}>{i + 1}</button>
                ))
                }
            </div>
            }
            {myPost ? null :
                <div className="buttonBox">
                {[...Array(9)].map((el, i) => (
                    <button className='button' onClick={() => updateValue(i + 1)}>{i + 1}</button>
                ))
                }
            </div>
            }
        </div>
        
    )
}