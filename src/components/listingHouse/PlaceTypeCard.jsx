/* eslint-disable react/prop-types */

import { useState } from "react";

const PlaceTypeCard = ({
  head,
  desc,
  Img,
  onClick,
  storedCardData,
  CheckOutline,
  CheckFill,
}) => {
  const [scale, setScale] = useState(false);
  return (
    <div
      onClick={() => {
        onClick(head);
      }}
      onMouseDown={() => {
        setScale(true);
      }}
      onMouseUp={() => {
        setScale(false);
      }}
      className={`flex flex-row px-8 items-center py-4 bg-white hover:bg-[#f7f7f7] hover:border-black hover:border-2 rounded-2xl cursor-pointer h-[120px] transition duration-300
      ${
        storedCardData === head
          ? "border-2 border-black bg-[#f7f7f7]"
          : "border-[1.3px] border-[#dddddd] bg-white hover:bg-[#f7f7f7] hover:border-black hover:border-2"
      }
      ${CheckFill ? "gap-4" : "justify-between"}
      ${scale ? "scale-95" : "scale-100"}
      `}
    >
      {/* specific to Visibility section only */}
      {CheckFill && CheckOutline && (
        <>
          {storedCardData === head ? (
            <div>{CheckFill && <CheckFill size={28} />}</div>
          ) : (
            <div>{CheckOutline && <CheckOutline size={28} />}</div>
          )}
        </>
      )}
      <div className=" flex flex-col gap-1">
        <h4 className=" text-[#222222] text-lg font-medium">{head}</h4>
        <p className=" text-sm text-[#717171]">{desc}</p>
      </div>
      {Img && <Img size={40} />}
    </div>
  );
};

export default PlaceTypeCard;
