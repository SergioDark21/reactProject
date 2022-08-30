import React from 'react'
import { useState, useEffect } from 'react'

const profileUser = {
    name: '',
    username: '',
    email: '',
    phone: '',
    website: '',
    address_street: '',
    address_city: ''
}

export default function UserProfile(user) {

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
                for (let i = 0; i < 10; i++) {
                    if (data[i].name == user.user) {
                        profileUser.name = data[i].name
                        profileUser.username = data[i].username
                        profileUser.email = data[i].email
                        profileUser.phone = data[i].phone
                        profileUser.website = data[i].website
                        profileUser.address_street = data[i].address.street
                        profileUser.address_city = data[i].address.city
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
   

    return(<div className='App'>
            <div className='userProfileBox'>
                <span style={{fontWeight: 700}}>{profileUser.name.toUpperCase()}'S INFO</span>
                <div>Name: {Object.values(user)}</div>
                <div>Username: {profileUser.username}</div>
                <div>Email: {profileUser.email}</div>
                <div>Phone: {profileUser.phone}</div>
                <div>Website: {profileUser.website}</div>
                <div>City: {profileUser.address_city}</div>
                <div>Street: {profileUser.address_street}</div>
            </div>
        </div>)
}