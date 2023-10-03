import './App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown, faAngleUp } from '@fortawesome/free-solid-svg-icons';
//import { useRef } from 'react';

import { setCurrentHours, setCurrentMinutes, setCurrentSeconds } from './store/timer/timer.action';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';

function App() {

  const dispatch = useDispatch();
  const currentHours = useSelector((state) => state.timer.currentHours)
  const currentMinutes = useSelector((state) => state.timer.currentMinutes)
  const currentSeconds = useSelector((state) => state.timer.currentSeconds)
  
  //const hour = useRef(null);

  const handleClickHourUp = () => {
    if (currentHours === 23){
      dispatch(setCurrentHours(23));
    } else {
      dispatch(setCurrentHours(currentHours + 1));
    }
  }

  const handleClickHourDown = () => {
    if (currentHours === 0){
      dispatch(setCurrentHours(0));
    } else {
      dispatch(setCurrentHours(currentHours - 1));
    }
  }

  const handleClickMinuteUp = () => {
    if (currentMinutes === 59){
      dispatch(setCurrentMinutes(59))
    } else {
      dispatch(setCurrentMinutes(currentMinutes + 1));
    }
  }

  const handleClickMinuteDown = () => {
    if (currentMinutes === 0){
      dispatch(setCurrentMinutes(0))
    } else{
      dispatch(setCurrentMinutes(currentMinutes - 1));
    }
  }

  const handleClickSecondUp = () => {
    if (currentSeconds === 59){
      dispatch(setCurrentSeconds(59))
    } else{
      dispatch(setCurrentSeconds(currentSeconds + 1));
    }
  }

  const handleClickSecondDown = () => {
    if (currentSeconds === 0){
      dispatch(setCurrentSeconds(0))
    } else {
      dispatch(setCurrentSeconds(currentSeconds - 1));
    }
  }

  const handleClickStart = () => {
    console.log('test')
  }

  /*const handleClick = () => {
    clearInterval(hour.current);
  }*/

  return (
    <div className="container mx-auto px-4 text-center">
      <h1 className='text-center text-black font-bold pt-10 text-7xl'>TIMER APP</h1>
      <div className="mt-10 box shadow inline-block">
        <div className="flex  items-center space-x-20 text-white bg-black border-counter text-7xl p-20 rounded-[35px]">
          <div className="flex justify-center flex-col items-center relative">
            <FontAwesomeIcon className='icon-hours-position-up' icon={faAngleUp} onClick={handleClickHourUp} />
            <span> {currentHours} hours</span>
            <FontAwesomeIcon className='icon-hours-position-down' icon={faAngleDown} onClick={handleClickHourDown} />
          </div>
          <div className="flex flex-col items-center">
            <FontAwesomeIcon className='icon-min-position-up' icon={faAngleUp} onClick={handleClickMinuteUp} />
            <span>{currentMinutes} min</span>
            <FontAwesomeIcon className='icon-min-position-down' icon={faAngleDown} onClick={handleClickMinuteDown} />
          </div>
          <div className="flex flex-col items-center">
            <FontAwesomeIcon className='icon-seconds-position-up' icon={faAngleUp} onClick={handleClickSecondUp} />
            <span>{currentSeconds} sec</span>
            <FontAwesomeIcon className='icon-seconds-position-down' icon={faAngleDown} onClick={handleClickSecondDown} />
          </div>
        </div>
      </div>
      <div className="flex justify-center space-x-20 mt-4">
          <button className="bg-[#171717] text-[#8a8a8c] p-4 ml-4 rounded-full hover:ring-4" >
            Cancel
          </button>
          <button className="bg-[#263e28] text-[#8ac889] p-4 ml-4 rounded-full hover:ring-4" onClick={handleClickStart}>
            Start
          </button>
      </div>
    </div>
  );
}

export default App;
