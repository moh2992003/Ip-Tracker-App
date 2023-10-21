import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import img from "../images/next.png";
import { fetchInfo } from '../features/Slice/storeSlice';

const SearchBar = () => {
  const dispatch = useDispatch();
  const info = useSelector((state) => state.info.info);
  const [ipAddress, setIpAddress] = useState('');

  // Define a click event handler for the div
  let handleSearchClick = () => {
    dispatch(fetchInfo(ipAddress))
  };

  useEffect(() => {
    // Use dispatch as a dependency for the useEffect
    // This ensures the useEffect runs whenever dispatch changes
    let handleSearch = () => {
      dispatch(fetchInfo(ipAddress));
    };
  }, [dispatch, ipAddress]);

  return (
    <div className="h-2/5 min-w-full search-bar-container bg-cover flex flex-col gap-5 justify-center items-center">
      <h2 className="text-white font-bold items-center">IP Address Tracker</h2>
      <div className="md:w-1/2 sm:w-1/2 lg:w-1/3 flex justify-center items-center h-10 sm:gap-0 md:gap-2">
        <input
          type="text"
          className="w-4/5 h-full rounded-md border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none placeholder:text-muted-foreground"
          placeholder="Enter the IP Address here.."
          value={ipAddress}
          onChange={(e) => setIpAddress(e.target.value)}
        />
        <div
          className="bg-white w-14 h-full flex justify-center items-center rounded-md cursor-pointer"
          onClick={handleSearchClick}
        >
          <img src={img} alt="arrow-icon" className="px-3 py-2" />
        </div>
      </div>
    </div>
  );
};

export default SearchBar;
