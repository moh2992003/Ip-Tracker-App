import './index.css';
import SearchBox from './component/SearchBox';
import Status from './component/Status';
import Leafletjs from './component/Leafletjs';


const App = () => {

  return (
    <div className='flex flex-col h-screen relative justify-between'>
      <SearchBox />
      <Status />
      <Leafletjs />
    </div>
  );
}

export default App;
