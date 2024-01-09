import { useEffect, useState } from "react";
import { alchemy } from "../../App";
import MlLatestBlocks from "../molecules/MlLatestBlocks";

const OrBlockList = ({ latestBlockNumber, numberOfBlocks = 10 }) => {
  const [blocks, setBlocks] = useState([]);

  useEffect(() => {
    const blocksNumbers = Array.from(
      { length: numberOfBlocks },
      (_, i) => latestBlockNumber - i
    );

    const getBlocksInformation = async () => {
      const blocksInformation = blocksNumbers.map((block) => {
        return alchemy.core.getBlockWithTransactions(block);
      });

      setBlocks(await Promise.all(blocksInformation));
    };

    getBlocksInformation();
  }, [numberOfBlocks, latestBlockNumber]);

  const isBlocksInformationValid = blocks.length > 0;
  if (!isBlocksInformationValid) {
    return <></>;
  }

  return (
    <div>
      <h2>Latest blocks</h2>
      <MlLatestBlocks blocksInformation={blocks} />
    </div>
  );
};

export default OrBlockList;
