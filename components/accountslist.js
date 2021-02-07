import Link from "next/link"
import React from "react"
import {useRouter} from "next/router"


function AccountsList( {accounts} ) {
  const router = useRouter();
  if(router.isFallback){
    return <h1>Loading....</h1>
  }
  return (
    <ul>
      {accounts.map((name,count) => (
        <li key={"Account Number " + count}>
          <Link href={"/[name]"} as={"/"+name}>
            <a>{name}</a>
           
          </Link>
        </li>
      ))}
    </ul>
  );
}

export default AccountsList;
