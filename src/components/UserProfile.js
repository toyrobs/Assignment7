import React from 'react';
import {Link} from 'react-router-dom';

class UserProfile extends React.Component
{
    render()
    {
        return(
            <div>
                <h1>User Profile</h1>
                <div>Username: {this.props.userName}</div>
                <div>Member Since: {this.props.memberSince}</div>
                <div><Link to="/">Return Home</Link></div>
                <div><Link to="/login">Log in</Link></div>
                <div><Link to="/userProfile">User Profile</Link></div>
                <div><Link to="/debits">Debits</Link></div>
                <div><Link to="/credits">Credits</Link></div>
            </div>

        );
    }
}
export default UserProfile;