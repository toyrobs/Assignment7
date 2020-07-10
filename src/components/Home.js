import React from 'react';
import {Link} from 'react-router-dom';


class Home extends React.Component
{
    render()
    {
        return(
            <div className="App">
                <img src="https://steemitimages.com/DQmT8dZaRveB3VgGRhwuEC3Yrh94JfkHAv5MDRQdQKkvRMg/Bank.png" alt="bank"/>
                <h1>Bank of React</h1>                
                <div><Link to="/login">Log in</Link></div>
                <div><Link to="/userProfile">User Profile</Link></div>
                <div><Link to="/debits">Debits</Link></div>
                <div><Link to="/credits">Credits</Link></div>
            </div>
        );
    }
}

export default Home;