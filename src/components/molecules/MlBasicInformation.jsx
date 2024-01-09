const MlBasicInformation = ({ blockInformation }) => {
  if (!blockInformation) {
    return <></>;
  }

  const { number: blockNumber, timestamp, hash, nonce } = blockInformation;

  return (
    <div>
      <ul>
        <li>Block Number: {blockNumber}</li>
        <li>Date mined: {new Date(timestamp * 1000).toDateString()}</li>
        <li>Time: {new Date(timestamp * 1000).toLocaleTimeString()}</li>
        <li>Hash: {hash}</li>
        <li>Nonce: {nonce}</li>
      </ul>
    </div>
  );
};

export default MlBasicInformation;
