import { React, styled, useDataHook } from "../common";
import { useState } from "react";
import {
  useGetRoomsWithProcesBySiteMutation,
  useGetTransfersWithPricesMutation,
  useGetSkiPassWithPricesMutation,
  useGetSkiGearWithPricesMutation,
} from "../store/store";

import Selections from "../components/skiOffer/Selections";

const SkiOffer = () => {
  const [query, setQuery] = useState({});
  const rooms = useDataHook(query, useGetRoomsWithProcesBySiteMutation);
  const transfers = useDataHook(query, useGetTransfersWithPricesMutation);
  const SkiPass = useDataHook(query, useGetSkiPassWithPricesMutation);
  const skiGear = useDataHook(query, useGetSkiGearWithPricesMutation);

  const [selections, setSelections] = useState({
    room: null,
    transfer: null,
    skiPass: null,
    skiGear: null,
  });

  const [selectedRoom, setSelectedRoom] = useState(null);
  const [selectedTransfer, setSelectedTransfer] = useState(null);
  const [selectedSkiPass, setSelectedSkiPass] = useState(null);
  const [selectedSkiGear, setSelectedSkiGear] = useState(null);

  return (
    <SkiOfferContainer>
      <Selections
        rooms={rooms}
        transfers={transfers}
        SkiPass={SkiPass}
        skiGear={skiGear}
        selections={selections}
        setSelections={setSelections}
        setQuery={setQuery}
      />

      <Recipt>
        {selectedRoom && (
          <span>
            Room: {selectedRoom.name} {selectedRoom.price.amount}
            {selectedRoom.price.currency}
          </span>
        )}
        {selectedTransfer && (
          <span>
            Transfer: {selectedTransfer.decription}
            {selectedTransfer.price.amount} {selectedTransfer.price.currency}
          </span>
        )}
        {/* {SkiPass && (
          <span>
            ski pass: {SkiPass.name}
            {SkiPass.price.amount} {SkiPass.price.currency}
          </span>
        )}
        {skiGear && (
          <span>
            ski gear: {skiGear.name}
            {skiGear.price.amount} {skiGear.price.currency}
          </span>
        )}
        {selectedRoom && selectedTransfer && SkiPass && skiGear && (
          <span>
            Total:
            {selectedRoom.price.amount +
              selectedTransfer.price.amount +
              SkiPass.price.amount +
              skiGear.price.amount}
          </span> */}
        {/* )} */}
      </Recipt>
    </SkiOfferContainer>
  );
};

export default SkiOffer;

const SkiOfferContainer = styled.div`
  display: flex;
`;

const Recipt = styled.div`
  display: flex;
  flex-direction: column;
`;
