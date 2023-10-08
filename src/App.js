import './App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown, faAngleUp } from '@fortawesome/free-solid-svg-icons';
//import { useRef } from 'react';

import { setCurrentHours, setCurrentMinutes, setCurrentSeconds, setStartTimer, setPauseTimer, setResumeTimer } from './store/timer/timer.action';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { useEffect } from 'react';

function App() {

  const dispatch = useDispatch();
  const currentHours = useSelector((state) => state.timer.currentHours)
  const currentMinutes = useSelector((state) => state.timer.currentMinutes)
  const currentSeconds = useSelector((state) => state.timer.currentSeconds)
  const isTimerRunning = useSelector((state) => state.timer.isTimerRunning)
  const isTimerPause = useSelector((state) => state.timer.isTimerPause)
  const isTimerResume = useSelector((state) => state.timer.isTimerResume)
  
  //const hour = useRef(null);

  useEffect(() => {
    let timerInterval;
    if (isTimerRunning) {
      timerInterval = setInterval(() => {
        if (currentSeconds !== 0){
          dispatch(setCurrentSeconds(currentSeconds - 1))
        } else {
          if (currentSeconds === 0) {
            if (currentMinutes !== 0){
              dispatch(setCurrentMinutes(currentMinutes - 1))
            } else {
              if (currentHours === 0) {
                dispatch(setCurrentHours(23))
              } else {
                dispatch(setCurrentHours(currentHours - 1))
              }
              dispatch(setCurrentMinutes(59))
            }
            dispatch(setCurrentSeconds(59))          
          }
        }  
      },1000);
      return () => clearInterval(timerInterval);
    }
  }, [isTimerRunning, currentSeconds])

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
    if(isTimerRunning === false){
      dispatch(setStartTimer(true))
      dispatch(setPauseTimer(false))
      dispatch(setResumeTimer(false))
    } 
  }
  
  // if the timer is in pause, I change the button to resume and I pause the timer
  const handleClickPause = () => {
    if(isTimerPause === false){ // isTimerPause: TRUE
      dispatch(setPauseTimer(true))
      dispatch(setResumeTimer(false))
      dispatch(setStartTimer(false))
    } 
  }

  const handleClickCancel = () => {
    dispatch(setCurrentHours(0))
    dispatch(setCurrentMinutes(0))
    dispatch(setCurrentSeconds(0))
    dispatch(setPauseTimer(false))
    dispatch(setResumeTimer(false))
    dispatch(setStartTimer(false))
  }

  const buttonTimer = () => {
    if(isTimerRunning && !isTimerPause && !isTimerResume) {
      return (
        <button className="bg-[#332003] text-[#f0a22e] p-4 ml-4 rounded-full hover:ring-4" onClick={handleClickPause}>
            Pause
        </button>
      )
    } else if (!isTimerRunning && isTimerPause && !isTimerResume) {
      return (
        <button className="bg-[#263e28] text-[#8ac889] p-4 ml-4 rounded-full hover:ring-4" onClick={handleClickStart}>
            Resume
        </button>
      )
    } else {
      return (
        <button className="bg-[#263e28] text-[#8ac889] p-4 ml-4 rounded-full hover:ring-4" onClick={handleClickStart}>
               Start
        </button>
      )
    }
  }

  console.log('timer pause',isTimerPause)
  console.log('timer resume',isTimerResume)
  console.log('timer runnning',isTimerRunning)

  return (
    <div className="container mx-auto px-4 text-center">
      <h1 className='text-center text-black font-bold pt-10 text-7xl'>TIMER APP</h1>
      <div className="mt-10 box shadow inline-block">
        <div className="flex  items-center space-x-20 text-white bg-black border-counter text-7xl p-20 rounded-[35px]">
          <div className="flex justify-center flex-col items-center relative">
            <FontAwesomeIcon className={(currentHours < 10) ? 'icon-hours-position-up-one-digit' : 'icon-hours-position-up'} icon={faAngleUp} onClick={handleClickHourUp} />
            <span> {currentHours} hours</span>
            <FontAwesomeIcon className={(currentHours < 10) ? 'icon-hours-position-down-one-digit' : 'icon-hours-position-down'} icon={faAngleDown} onClick={handleClickHourDown} />
          </div>
          <div className="flex justify-center flex-col items-center relative">
            <FontAwesomeIcon className={(currentMinutes < 10) ? 'icon-min-position-up-one-digit' : 'icon-min-position-up'} icon={faAngleUp} onClick={handleClickMinuteUp} />
            <span>{currentMinutes} min</span>
            <FontAwesomeIcon className={(currentMinutes < 10) ? 'icon-min-position-down-one-digit' : 'icon-min-position-down'} icon={faAngleDown} onClick={handleClickMinuteDown} />
          </div>
          <div className="flex justify-center flex-col items-center relative">
            <FontAwesomeIcon className={(currentSeconds < 10) ? 'icon-seconds-position-up-one-digit' : 'icon-seconds-position-up'} icon={faAngleUp} onClick={handleClickSecondUp} />
            <span>{currentSeconds} sec</span>
            <FontAwesomeIcon className={(currentSeconds < 10) ? 'icon-seconds-position-down-one-digit' : 'icon-seconds-position-down'} icon={faAngleDown} onClick={handleClickSecondDown} />
          </div>
        </div>
      </div>
      <div className="flex justify-center space-x-20 mt-4">
          <button className="bg-[#171717] text-[#8a8a8c] p-4 ml-4 rounded-full hover:ring-4" onClick={handleClickCancel} >
            Cancel
          </button>
          { buttonTimer() }
      </div>
    </div>
  );
}

export default App;
