import React from 'react';

class AccountBalance extends React.Component
{
    render()
    {
        return(
            
            <div>
                <h2>Account Balance</h2>
                <h3>Balance: {this.props.accountBalance}</h3>
            </div>
        );
    }
}
export default AccountBalance;