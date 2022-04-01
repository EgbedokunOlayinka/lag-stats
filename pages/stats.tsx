import { NextPage } from "next";
import { useState } from "react";
import Layout from "../components/Layout";

const StatsPage: NextPage = () => {
  const [completed, setCompleted] = useState<boolean>(false);

  return (
    <Layout>
      <p>stats</p>
    </Layout>
  );
};

export default StatsPage;
