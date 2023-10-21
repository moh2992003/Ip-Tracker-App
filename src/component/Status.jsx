import React from "react";
import { useSelector } from "react-redux";
import { fetchInfo } from "../features/Slice/storeSlice";

const Stats = () => {
  const info = useSelector((state) => state.info.info);

  return (
    <div className="w-4/5 justify-center items-center m-auto rounded-lg absolute top-52 md:top-56 lg:top-60 left-10 md:left-40 bg-white z-[1000] flex flex-col md:flex-row container gap-4 md:gap-10 p-4 md:p-8">
      <div className="md:border-r-2 w-full border-slate-300 flex flex-col gap-2 items-center">
        <p className="text-sm text-slate-400 font-semibold">IP Address</p>
        <p className="md:text-2xl text-black font-bold">{info ? (info.ip ? info.ip : 'Error') : 'Enter-Ip'}</p>
      </div>
      <div className="md:border-r-2 w-full border-slate-300 flex flex-col gap-2 items-center">
        <p className="text-sm text-slate-400 font-semibold">Location</p>
        <p className="sm:text-xl md:text-xl lg:text-2xl text-black font-bold">{info ? (info.ip ? <div>{info.location.country} {info.location.region}</div> : 'Error') : 'Loading'}</p>
      </div>
      <div className="md:border-r-2 w-full border-slate-300 flex flex-col gap-2 items-center">
        <p className="text-sm text-slate-400 font-semibold">Timezone</p>
        <p className="md:text-2xl text-black font-bold">{info ? (info.ip ? info.location.timezone : 'Error') : 'Loading'}</p>
      </div>
      <div className="w-full flex flex-col gap-2 items-center">
        <p className="text-sm text-slate-400 font-semibold">ISP</p>
        <p className="md:text-2xl text-black font-bold">{info ? (info.ip ? info.isp : 'Error') : 'Loading'}</p>
      </div>
    </div>
  );
};

export default Stats;