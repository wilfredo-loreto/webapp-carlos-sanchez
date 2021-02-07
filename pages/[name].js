import Layout from "../components/adminui";
import React from "react"
import UserProfile from "../components/userprofile"
import axios from "axios";
import {useRouter} from "next/router"


export default function Profile({ account }) {
  const router = useRouter()
  if(!account){
    return<h1> Loading ... (Looking for the account)</h1>
  }
  return (
      <UserProfile account={account}/>
  );
}

export async function getStaticPaths() {
  const res = await axios.get(`http://localhost:3000/api/accounts`);
  const accounts = (await res).data
  console.log(accounts);
  const paths = accounts.map((account)=>({
    params:{name:account.name}
  }))
  console.log(paths);
  return {
    paths,
    fallback:true,
  };
}

export async function getStaticProps({params}) {
  const data = await axios.get(`http://localhost:3000/api/${params.name}`);

  return {
    props: { account: data.data },
  };
}