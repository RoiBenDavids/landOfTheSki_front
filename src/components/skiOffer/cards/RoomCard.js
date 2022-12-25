import { React } from "../../../common";
import SkiOfferCard from "./SkiOfferCard";

const RoomCard = ({ room, setSelectedRoom, selectedRoom }) => {
  const { name, price, _id, hotel: title } = room;
  const entity = { name, price, _id, title };

  return (
    <SkiOfferCard
      entity={entity}
      setSelectedEntity={setSelectedRoom}
      selectedEntity={selectedRoom}
    />
  );
};

export default RoomCard;
