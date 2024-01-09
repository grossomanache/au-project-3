import { useEffect, useState } from "react";

const OrTransactionList = ({ blockInformation, numberOfTransactions = 10 }) => {
  const [transactions, setTransactions] = useState([]);

  useEffect(() => {
    setTransactions(blockInformation?.transactions ?? []);
  }, [blockInformation]);

  const isTransactionsValid = transactions.length > 0;
  if (!isTransactionsValid) {
    return <></>;
  }

  console.log(transactions);

  const totalTransactions = transactions.length;
  const filteredTransactions = transactions.slice(
    totalTransactions - numberOfTransactions,
    totalTransactions
  );

  return (
    <div>
      <h2>Latest transactions</h2>
      <table>
        <thead>
          <tr>
            <th>Hash</th>
            <th>From</th>
            <th>To</th>
          </tr>
        </thead>
        <tbody>
          {filteredTransactions.map((transaction) => {
            const { hash, from, to } = transaction;
            return (
              <tr key={hash}>
                <td>{hash}</td>
                <td>{from}</td>
                <td>{to}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default OrTransactionList;
