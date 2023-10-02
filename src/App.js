import './App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown, faAngleUp } from '@fortawesome/free-solid-svg-icons';
import { useRef, useState } from 'react';



function App() {

  const [hours, setHours] = useState(0);
  const test = useRef(null);

  const handleMouseEnter = (event) => {
    /*console.log(event.target.nextSibling.firstChild.data)
    const hours = event.target.nextSibling.firstChild.data;*/
    test.current =  setInterval(() => setHours( prev => prev + 1), 1500);
  }

  const handleClick = (event) => {
    //console.log(event.target.firstChild.data)
    clearInterval(test.current);
  }

  return (
    <div className="container mx-auto px-4 text-center">
      <h1 className='text-center text-black font-bold pt-10 text-7xl'>TIMER APP</h1>
      <div className="mt-10 box shadow inline-block">
        <div className="flex  items-center space-x-20 text-white bg-black border-counter text-7xl p-20 rounded-[35px]">
          <div className="flex justify-center flex-col items-center relative">
            <FontAwesomeIcon className='icon-hours-position-up' icon={faAngleUp} onMouseEnter={handleMouseEnter} />
            <span onClick={handleClick}>{hours} hours</span>
            <FontAwesomeIcon className='icon-hours-position-down' icon={faAngleDown} />
          </div>
          <div className="flex flex-col items-center">
            <FontAwesomeIcon className='icon-min-position-up' icon={faAngleUp} />
            <span>20 min</span>
            <FontAwesomeIcon className='icon-min-position-down' icon={faAngleDown} />
          </div>
          <div className="flex flex-col items-center">
            <FontAwesomeIcon className='icon-seconds-position-up' icon={faAngleUp} />
            <span>20 sec</span>
            <FontAwesomeIcon className='icon-seconds-position-down' icon={faAngleDown} />
          </div>
        </div>
      </div>
      <div className="flex justify-center space-x-20 mt-4">
          <button className="bg-[#171717] text-[#8a8a8c] p-4 ml-4 rounded-full hover:ring-4">
            Cancel
          </button>
          <button className="bg-[#263e28] text-[#8ac889] p-4 ml-4 rounded-full hover:ring-4 ">
            Start
          </button>
        </div>
    </div>
  );
}

export default App;
