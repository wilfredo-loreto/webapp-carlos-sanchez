import { connectToDatabase } from "../../util/mongodb";

export default async (req, res) => {
    const {
        query:{name},
    }=req

    const { db } = await connectToDatabase()
    let account =  await db.collection("accounts").find({name:name}).toArray();
    if(req.method=="POST"){
        await db.collection("accounts").update({name:name},{name:name},{upsert:true})
        res.json({account})
    }else if(req.method=="PUT"){
        await db.collection("accounts").update({name:name},{name:name,deeplink:`app.amagpieinthesky.com/${name}`},{upsert:true})
    }else{
        res.json(account);
    }
  };