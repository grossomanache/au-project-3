import MlBasicInformation from "../molecules/MlBasicInformation";
import MlTransactionInformation from "../molecules/MlTransactionInformation";

const OrBlockInformation = ({ blockInformation }) => {
  return (
    <div>
      <h2>Latest block information:</h2>
      <MlBasicInformation blockInformation={blockInformation} />
      <MlTransactionInformation blockInformation={blockInformation} />
    </div>
  );
};

export default OrBlockInformation;
