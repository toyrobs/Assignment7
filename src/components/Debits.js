import React from 'react';
import {Link} from 'react-router-dom';


class Debits extends React.Component
{
    constructor(props)
    {
       super(props);
       this.state = {
        hits: [],
        isLoading: false,
        error: null,
       };

    }

    btnClick = () =>
    {
        const {hits} = this.state;
        let amount = document.getElementById("amount").value;
        let description = document.getElementById("description").value;
        let date = document.getElementById("date").value;
        if(amount === "" || description === "" || date === "") return;
        let obj = {"amount": amount, "description": description, "date": date};
        hits.push(obj);
        this.props.changeBalance(Number(amount), false);
        this.setState({hits});
    }

    componentDidMount()
    {
        this.setState({isLoading: true});
        
        fetch("https://moj-api.herokuapp.com/debits")
        .then(response => {
            if(response.ok)
            {
                return response.json();
            }
            else{
                throw new Error('wrong...');
            }
        })
        .then(data => this.setState({hits: data, isLoading:false}))
        .catch(error => this.setState({error, isLoading:false}));
    };
    render()
    {
        const { hits, isLoading, error } = this.state;
 
        if (error) {
            return <p>{error.message}</p>;
        }
 
        if (isLoading) {
            return <p>Loading ...</p>;
        }
        return(
            <div className="App">
                <h1>Debits</h1>
                <div>  
                {
                    hits.map((hit, index) =>
                    
                        <div className={`val ${index}`} key={`val ${index}`} >
                            <p>{hit.amount} {hit.description} {hit.date}</p>
                        </div>
            
                )}
                </div>
                <div id="data">
                    <label htmlFor="description">Description:</label>
                    <input type="text" id="description" name="description"/>
                    <label htmlFor="amount">Amount:</label>
                    <input type="number" id="amount" name="amount"/>
                    <label htmlFor="date">Date:</label>
                    <input type="date" id="date" name="date" />
                    <button onClick={this.btnClick}>Add Debit</button>
                </div>
                <div><Link to="/">Return Home</Link></div>                
                <div><Link to="/login">Log in</Link></div>
                <div><Link to="/userProfile">User Profile</Link></div>
                <div><Link to="/debits">Debits</Link></div>
                <div><Link to="/credits">Credits</Link></div>
            </div>
        );
    }
}

export default Debits;