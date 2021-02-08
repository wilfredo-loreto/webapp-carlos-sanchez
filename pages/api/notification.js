import axios from "axios"
export default async(req,res)=>{
    let notification = {
        "title":"title of notification",
        "text":"subtitle",
    }
    let fcm_tokens=[]
    
    axios({
        method:"POST",
        url:"https://fcm.googleapis.com/fcm/send",
        headers:{
            "Authorization":"key="+"AAAAdIarlbA:APA91bHTL86k4UDgxKQy_PBcN5R5uIA59rs8obO9MKPOxUAGPhWBw6MJ9wxjH4zNoDhdXNeHlW_e9o0nU3tP8bje5ZQNNFP5ivExQeYERR6rr0_84Op6ks_w2WYiyek51_rDBtMYVFvM",
            "Content-Type":"application/json"
        },
        data:{
            "notification":notification,
            "registration_ids":fcm_tokens,
        }
    }).then((res)=>{
        res.json({message:"Seccusfully sent notification"})
    }).catch((err)=>{res.json({message:"Error during sending notification"});})

}
