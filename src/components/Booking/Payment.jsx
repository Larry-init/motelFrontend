/* eslint-disable react/prop-types */
import { useState } from "react";
import { useDateFormatting } from "../../hooks/useDateFormatting";
import {
  PaymentElement,
  useElements,
  useStripe,
} from "@stripe/react-stripe-js";
import { PulseLoader } from "react-spinners";

const Payment = ({ searchParamsObj }) => {
  const stripe = useStripe();
  const elements = useElements();
  const [isProcessing, setIsProcessing] = useState(false);
  const [message, setMessage] = useState("");
  //   geting the checkin and checkout dates
  const dateObj = {
    checkin: searchParamsObj?.checkin,
    checkout: searchParamsObj?.checkout,
  };

  //   dates
  const formattedDates = useDateFormatting(dateObj);
  //   reservation data
  const guestNumber = searchParamsObj?.numberOfGuests;
  const checkin = searchParamsObj.checkin;
  const checkout = searchParamsObj?.checkout;
  const orderId = searchParamsObj?.orderId;

  // reservation form handler
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("hit, payment");

    if (!stripe || !elements) {
      return;
    }

    setIsProcessing(true);

    const { error } = await stripe.confirmPayment({
      elements,
      confirmParams: {
        return_url: "http://localhost:5173",
      },
    });

    if (error) {
      setMessage(error.message);
    }

    setIsProcessing(false);
  };

  console.log(message, "message from payment");

  return (
    <div>
      {/* trips section */}
      <div className=" flex flex-col gap-6">
        <h5 className=" text-[22px] text-[#222222] font-medium">Your trip</h5>
        {/* dates */}
        <div className=" flex flex-row justify-between">
          <span className="text-base text-[#222222]">
            <p className="font-medium">Dates</p>
            <p>{formattedDates}</p>
          </span>
          <p className=" text-base text-[#222222] font-medium underline">
            Edit
          </p>
        </div>
        {/* guests */}
        <div className=" flex flex-row justify-between">
          <span className="text-base text-[#222222]">
            <p className="font-medium">Guests</p>
            <p>
              {guestNumber} {guestNumber === "1" ? "guest" : "guests"}
            </p>
          </span>
          <p className=" text-base text-[#222222] font-medium underline">
            Edit
          </p>
        </div>
        <hr className="w-full h-[1.3px] bg-[#dddddd] my-4" />
        {/* payment element */}
        <form onSubmit={handleSubmit}>
          <h5 className=" text-[22px] text-[#222222] font-medium pb-4">
            Pay with
          </h5>
          <PaymentElement />
          <hr className="w-full h-[1.3px] bg-[#dddddd] my-10" />
          <div>
            <h5 className=" text-[22px] text-[#222222] font-medium">
              Ground rules
            </h5>
            <p className="text-base text-[#222222] py-4">
              We ask every guest to remember a few simple things about what
              makes a great guest.
            </p>
            <ul className=" list-disc pl-5">
              <li>Follow the house rules </li>
              <li>Treat your Host’s home like your own</li>
            </ul>
          </div>
          <hr className="w-full h-[1.3px] bg-[#dddddd] my-10" />
          <p className="text-xs opacity-70">
            By selecting the button below, I agree to the Host&apos;s House
            Rules, Ground rules for guests, Motel&apos;s Rebooking and Refund
            Policy, and that Motel can charge my payment method if I’m
            responsible for damage.
          </p>

          <button
            type="submit"
            disabled={isProcessing}
            className=" mt-7 px-5 py-3 rounded-md bg-[#ff385c] hover:bg-[#d90b63] transition duration-200 ease-in text-white font-medium cursor-pointer disabled:cursor-not-allowed disabled:opacity-30 disabled:bg-gray-400 min-w-[180px]"
          >
            {isProcessing ? (
              <>
                <PulseLoader size={8} color="#000000" speedMultiplier={0.5} />
              </>
            ) : (
              "Confirm and pay"
            )}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Payment;
