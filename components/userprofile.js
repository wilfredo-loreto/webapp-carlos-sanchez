import React from "react"

function UserProfile( {account} ) {
    
    return (
      <div>
          <h1>This Page is for {account.name}</h1>
          <button>Share</button>
      </div>
    );
  }
  
  export default UserProfile;