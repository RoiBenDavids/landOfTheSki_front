import { React } from "../../../common";
import SkiOfferCard from "./SkiOfferCard";

const TransferCard = ({ transfer, setSelectedTransfer, selectedTransfer }) => {
  const { description, price, _id, maxPax } = transfer;

  const entity = {
    name: `${description} ${maxPax}`,
    price,
    _id,
    title: "Some Company",
  };

  return (
    <SkiOfferCard
      entity={entity}
      setSelectedEntity={setSelectedTransfer}
      selectedEntity={selectedTransfer}
    />
  );
};

export default TransferCard;
