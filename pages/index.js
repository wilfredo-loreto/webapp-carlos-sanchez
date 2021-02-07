import AdminUI from "../components/adminui";
import axios from "axios";
import Layout from "../components/layout";

export default function Home({ accounts }) {
  return (
    <Layout>
      <AdminUI accounts={accounts} />
    </Layout>
  );
}

export async function getServerSideProps() {
  const data = await axios.get(`http://localhost:3000/api/accounts`);

  return {
    props: { accounts: data.data },
  };
}
