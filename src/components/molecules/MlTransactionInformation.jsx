const MlTransactionInformation = ({ blockInformation }) => {
  if (!blockInformation?.transactions) {
    return <></>;
  }

  const { transactions } = blockInformation;

  return (
    <div>
      <ul>
        <li>Number of transactions: {transactions.length}</li>
      </ul>
    </div>
  );
};

export default MlTransactionInformation;
