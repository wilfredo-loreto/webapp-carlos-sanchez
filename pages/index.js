import AdminUI from "../components/adminui";
import { connectToDatabase } from "../util/mongodb";

export default function Home({ accounts }) {
  return (
    
      <AdminUI accounts={accounts} />
  
  );
}

export async function getServerSideProps() {
  const { db } = await connectToDatabase()
  const accounts =  await db.collection("accounts").find({}).sort({name:1}).toArray();
  return {
    props: { accounts:JSON.parse(JSON.stringify(accounts)) },
  };
}
