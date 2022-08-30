import React from 'react'
import PostList from './PostList'
import FriendList from './FriendList'
import UserProfile from './UserProfile';

export default function MainPage() {

    function logout() {
        localStorage.clear();
        return window.location.reload(true);
    }
    

    return(
        <div className='App'> 
        <div className='headerTitle'>UNKNOWN SOCIAL</div>    
        <div className='mainPage'>
            <div className='userBox'>
                <span>Welcome back,</span>
                <br />
                <span style={{fontWeight:'700'}}> {localStorage.getItem('name')}</span>
                <br />
                <button onClick={() => logout()}>ESCI</button>
            </div>
            <div className='friendListBox'>
                <span style={{fontWeight:'700'}}>YOUR FRIEND LIST:</span>
                <FriendList />
            </div>
            <div className='postListBox'>
            <PostList />
            </div>
        </div>
    </div>   
    )
}