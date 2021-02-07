import { connectToDatabase } from "../../util/mongodb";

export default async (req, res) => {
    const { db } = await connectToDatabase()
    const accounts =  await db.collection("accounts").find({}).sort({name:1}).toArray();
    res.json(accounts);
  }; 