import { React, styled } from "../../common";

import DatePaxPicker from "../DatePaxPicker";
import RoomCard from "../skiOffer/cards/RoomCard";
import TransferCard from "../skiOffer/cards/TransferCard";

const Selections = ({
  rooms,
  transfers,
  SkiPass,
  skiGear,
  selections = {},
  setSelections,
  setQuery,
}) => {
  const setSelection = (type, selection) => {
    setSelections({ ...selections, [type]: selection });
  };
  return (
    <Container>
      <DatePaxPicker setQuery={setQuery} />
      <Rooms>
        {rooms.map((room, key) => (
          <RoomCard
            key={key}
            room={room}
            setSelectedRoom={(selection) => setSelection("room", selection)}
            selectedRoom={selections["room"]}
          />
        ))}
      </Rooms>
      <Transfers>
        {transfers.map((transfer, key) => (
          <TransferCard
            key={key}
            transfer={transfer}
            setSelectedTransfer={(selection) =>
              setSelection("transfer", selection)
            }
            selectedTransfer={selections["transfer"]}
          />
        ))}
      </Transfers>
    </Container>
  );
};

export default Selections;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 60%;
`;

const Rooms = styled.div`
  display: flex;
  margin-bottom: 10px;
`;
const Transfers = styled.div`
  display: flex;
  margin-bottom: 10px;
`;
