import React from "react"

function UserProfile( {account} ) {
    
    return (
      <div className={"admincontainer usercontainer"}>
        <div className={"smallcontainer"}>
          <h1>This Page is for {account.name}</h1>
          <button className={"sharebutton"}>Share</button>
        </div>
      </div>
    );
  }
  
  export default UserProfile;