const MlLatestBlocks = ({ blocksInformation }) => {
  const isBlocksInformationValid = blocksInformation.length > 0;
  if (!isBlocksInformationValid) {
    return <></>;
  }

  return (
    <table>
      <thead>
        <tr>
          <th>Block number</th>
          <th>Hash</th>
          <th>Date</th>
          <th>Time</th>
        </tr>
      </thead>
      <tbody>
        {blocksInformation.map((blockInformation) => {
          const { hash, number, timestamp } = blockInformation;
          return (
            <tr key={hash}>
              <td>{number}</td>
              <td>{hash}</td>
              <td>{new Date(timestamp * 1000).toDateString()}</td>
              <td>{new Date(timestamp * 1000).toLocaleTimeString()}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default MlLatestBlocks;
