import Link from "next/link"
import React from "react"



function AccountsList( {accounts} ) {
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
