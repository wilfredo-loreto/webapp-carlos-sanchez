import { connectToDatabase } from "../../util/mongodb";

export default async (req, res) => {
    const {
        query:{name},
    }=req

    const { db } = await connectToDatabase()
    let account = {}
    if(req.method=="POST"){
        await db.collection("accounts").update({name:name},{name:name},{upsert:true})
        res.json({message:"seccusfully inserted"})
    }else{
        account =  await db.collection("accounts").find({name:name}).toArray();
        res.json(account);
    }
  };