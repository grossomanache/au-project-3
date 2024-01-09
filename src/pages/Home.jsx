import { useEffect, useState } from "react";

import OrBlockInformation from "../components/organisms/OrBlockInformation";
import { alchemy } from "../App";
import OrBlockList from "../components/organisms/OrBlockList";
import OrTransactionList from "../components/organisms/OrTransactionList";

const Home = () => {
  const [blockInformation, setBlockInformation] = useState();

  useEffect(() => {
    const getBlockInformation = async () => {
      setBlockInformation(await alchemy.core.getBlockWithTransactions());
    };

    getBlockInformation();
  }, []);

  if (!blockInformation) {
    return <></>;
  }

  return (
    <>
      <OrBlockInformation blockInformation={blockInformation} />
      <OrBlockList latestBlockNumber={blockInformation.number} />
      <OrTransactionList blockInformation={blockInformation} />
    </>
  );
};

export default Home;
