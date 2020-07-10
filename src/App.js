import React from 'react';
import './App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Home from './components/Home';
import UserProfile from './components/UserProfile';
import LogIn from './components/LogIn';
import AccountBalance from './components/AccountBalance';
import Debits from './components/Debits';
import Credits from './components/Credits';


class App extends React.Component
{
   constructor(props)
   {
       super(props);
       this.state = {
           accountBalance: 14568.27,
           currentUser:
           {
                userName: 'bob_loblaw',
                memberSince: '07/03/2020',
           }
           
       }
   }
   mockLogIn = (logInInfo) => {
       const newUser = {...this.state.currentUser}
       newUser.userName = logInInfo.userName;
       this.setState({currentUser: newUser});

   };

   changeBalance = (money, option) =>
   {
       if(option === true) this.setState({accountBalance: Number(this.state.accountBalance) + money});
       else this.setState({accountBalance: Number(this.state.accountBalance) - money});
   }
   
    render() {
        const HomeComponent = () =>(<Home/>);
        const UserProfileComponet = () => (<UserProfile userName={this.state.currentUser.userName} memberSince={this.state.currentUser.memberSince}/>);
        const LogInComponent = () => (<LogIn user={this.state.currentUser} mockLogIn={this.mockLogIn} {...this.props}/>);
        const DebitsComponent = () =>(<Debits changeBalance={this.changeBalance}/>);
        const CreditsComponent = () =>(<Credits changeBalance={this.changeBalance}/>);
        return(
            <div className="App">
                <Router>
                    <Switch>
                        <Route exact path="/" render={HomeComponent} />
                        <Route exact path="/userProfile" render={UserProfileComponet} />
                        <Route exact path="/login" render={LogInComponent} />
                        <Route exact path="/debits" render={DebitsComponent} />
                        <Route exact path="/credits" render={CreditsComponent} />
                    </Switch>
                    <AccountBalance accountBalance={this.state.accountBalance}/>
                </Router>
            </div>
        );
        
    }
      
}
export default App;