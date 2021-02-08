import React,{useCallback,useState} from "react";
import {useRouter} from 'next/router'
import axios from "axios";


function UserProfile({ account }) {
  const [deepLink,setDeepLink] = useState(account.deeplink)
  const router = useRouter()
  const shareUser = useCallback(async()=>{
    try {
      let res = await axios.put(
        `${window.location.origin}/api/${account.name}`,
        { name:account.name }
      );
      console.log(res.data);
    } catch (err) {
      console.log(err);
    }
  })
  
  const searchParams = router.query
  console.log({searchParams});
  console.log(searchParams);
  return (
    
    <div className={"admincontainer usercontainer"}>
      <div className={"smallcontainer"}>
        <h1>This Page is for {account.name}</h1>
        <button onClick={()=>{shareUser();setDeepLink("VALUE");window.open(`https://app.amagpieinthesky.com/${account.name}`,"_blank")}} className={"sharebutton"}>
          Share
        </button>
        {searchParams.device=="android" ? <a href="https://play.google.com/store/apps/details?id=com.instagram.android&hl=en&gl=US" target="_blank">DOWNLOAD APP HERE (google play)</a>:searchParams.device=="ios"?<a href="https://apps.apple.com/us/app/instagram/id389801252" target="_blank">DOWNLOAD APP HERE (App Store)</a>:null}
  <span>This Profile is {deepLink == undefined ? "NOT" :""} Shared</span>
      </div>
    </div>
  );
}

export default UserProfile;
