import { useState } from "react";
import Rooms from "./Rooms";

const Home = () => {
  const [forRent, setForRent] = useState(true);
  return (
    <section className="p-5">
      <div className="gap-2 flex w-full justify-center mx-auto py-10 pb-7">
        <button
          className="border border-white bg-white font-semibold p-2 rounded-sm w-40"
          onClick={() => setForRent(true)}
        >
          For Rent
        </button>
        <button
          className="border border-white bg-white font-semibold p-2 rounded-sm w-40"
          onClick={() => setForRent(false)}
        >
          For Sell
        </button>
      </div>
      <Rooms forRent={forRent} />
    </section>
  );
};

export default Home;
