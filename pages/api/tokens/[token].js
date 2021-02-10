import { connectToDatabase } from "../../../util/mongodb";

export default async (req, res) => {
    const {
        query:{token},
    }=req
    const { db } = await connectToDatabase()
    let tokenDocument =  await db.collection("tokens").find({}).toArray();
    if(req.method=="POST"){
        await db.collection("tokens").update({token:token},{token:token},{upsert:true})
        res.json(tokenDocument);
    }
    res.json(tokenDocument);
  }; 