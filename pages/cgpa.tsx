import { NextPage } from "next";
import { useState } from "react";
import Layout from "../components/Layout";

const CgpaPage: NextPage = () => {
  const [completed, setCompleted] = useState<boolean>(false);

  return (
    <Layout>
      <p>cgpa page</p>
    </Layout>
  );
};

export default CgpaPage;
