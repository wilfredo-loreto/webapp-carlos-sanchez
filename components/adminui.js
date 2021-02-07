import React, { Component } from "react";
import AccountsList from "./accountslist";
import axios from "axios";

export default class AdminUI extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      accounts: [],
    };
    this.onInputChange = this.onInputChange.bind(this);
    this.createAccount = this.createAccount.bind(this);

  }
  async createAccount() {
    
    if (this.state.name.length >= 1) {
        if(!this.state.accounts.includes(this.state.name)){
            this.setState({
                accounts: [...this.state.accounts, this.state.name],
              });
        }
      console.log(this.state.accounts);
      try{
          let res = await axios.post(`${window.location.origin}/api/${this.state.name}`, {name: this.state.name,})
          console.log(res);
          
      }catch(err){
          console.log(error);
      }
        
    } else {
      alert("You can't create an account without a name");
    }
  }
  onInputChange(event) {
    this.setState({
      [event.target.name]: event.target.value,
    });

  }

  componentDidMount(){
    this.setState({accounts:this.props.accounts.map((account, i) => account.name)})
  }
 
    render() {
    return (
        
        <div>
          <h1>APP</h1>
          <span className={""}>Insert a New Account</span>
          <input
            name="name"
            onChange={this.onInputChange}
            placeholder="ex. James Smith"
          />
          <button className="create-button" onClick={this.createAccount}>
            {" "}
            Create{" "}
          </button>
          <AccountsList accounts={this.state.accounts} />
        </div>

    );
  }
}
