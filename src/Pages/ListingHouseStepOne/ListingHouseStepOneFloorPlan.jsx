import { useEffect, useState } from "react";
import FloorPlanCard from "../../components/listingHouse/FloorPlanCard";
import { useDispatch, useSelector } from "react-redux";
import { createNewHouse } from "../../redux/actions/houseActions";

const ListingHouseStepOneFloorPlan = () => {
  const newHouseData = useSelector((state) => state.house.newHouse);
  const [guestNumber, setGuestNumber] = useState(0);
  const [bedroomsNumber, setBedroomsNumber] = useState(0);
  const [bedsNumber, setBedsNumber] = useState(0);
  const [bathroomsNumber, setBathroomsNumber] = useState(0);
  const dispatch = useDispatch();

  console.log(newHouseData);

  useEffect(() => {
    let floorPlan = {
      guests: guestNumber,
      bedrooms: bedroomsNumber,
      beds: bedsNumber,
      bathroomsNumber: bathroomsNumber,
    };
    if (
      guestNumber !== 0 ||
      bedroomsNumber !== 0 ||
      bedsNumber !== 0 ||
      bathroomsNumber !== 0
    ) {
      dispatch(
        createNewHouse(
          newHouseData.houseType,
          newHouseData.privacyType,
          newHouseData.location,
          floorPlan
        )
      );
    }
  }, [
    bathroomsNumber,
    bedroomsNumber,
    bedsNumber,
    dispatch,
    guestNumber,
    newHouseData.houseType,
    newHouseData.location,
    newHouseData.privacyType,
  ]);
  return (
    <section className=" flex flex-col gap-10 max-w-screen-md mx-auto my-6 2xl:h-[80vh]">
      <div className=" flex flex-col gap-2">
        <h1 className=" text-[#222222] text-[32px] font-medium">
          Share some basics about your place
        </h1>
        <p className="text-lg text-[#717171]">
          You&apos;ll add more details later, like bed types
        </p>
      </div>
      <div className=" flex flex-col gap-5 mt-5">
        <FloorPlanCard
          name={"Guests"}
          number={guestNumber}
          setNumber={setGuestNumber}
        />
        <hr className="bg-[#dddddd] my-2" />
        <FloorPlanCard
          name={"Bedrooms"}
          number={bedroomsNumber}
          setNumber={setBedroomsNumber}
        />
        <hr className="bg-[#dddddd] my-2" />
        <FloorPlanCard
          name={"Beds"}
          number={bedsNumber}
          setNumber={setBedsNumber}
        />
        <hr className="bg-[#dddddd] my-2" />
        <FloorPlanCard
          name={"Bathrooms"}
          number={bathroomsNumber}
          setNumber={setBathroomsNumber}
        />
        <hr className="bg-[#dddddd] my-2" />
      </div>
    </section>
  );
};

export default ListingHouseStepOneFloorPlan;
