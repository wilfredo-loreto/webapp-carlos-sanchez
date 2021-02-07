import React from "react"
import UserProfile from "../components/userprofile"
import { connectToDatabase } from "../util/mongodb";



export default function Name({ account }) {
 if(account == undefined){
   return ("ERROR")
 }
  return (
      <UserProfile account={account[0]}/>
  );
}

export async function getStaticPaths() {
  const { db } = await connectToDatabase()
  const accounts =  await db.collection("accounts").find({}).sort({name:1}).toArray();
  const paths = accounts.map((account)=>({
    params:{name:account.name}
  }))
  console.log(paths);
  console.log("HERE IS THE PATHS");
  return {
    paths,
    fallback:true,
  };
}

export async function getStaticProps({params}) {
  const { db } = await connectToDatabase()
  
  const account =  await db.collection("accounts").find({name:params.name}).toArray();

  return {
    props: {  account:JSON.parse(JSON.stringify(account))  },
  };
}