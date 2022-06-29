
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './map.scss';

function Map() {
  const [seconds, setSeconds] = useState(0)
  const [minutes, setMinutes] = useState(59)
  const [hourse, setHours] = useState(2)



  function updateTime() {
    if (minutes === 0 && seconds === 0) {
      //reset
      setSeconds(0);
      setMinutes(59);
    }
    else {
      if (seconds === 0) {
        setMinutes(minutes => minutes - 1);
        setSeconds(59);
      } else if (minutes === 0) {
        setHours(hourse => hourse - 1);
      }
      else {
        setSeconds(seconds => seconds - 1);
      }
    }
  }



  useEffect(() => {
    const token = setTimeout(updateTime, 1000)

    return function cleanUp() {
      clearTimeout(token);
    }
  })

    return (
        <div className='img-map'>
          
            <div className='text-map'>Vị trí của bạn được chia sẻ còn lại trong: {hourse < 10 ? '0' + hourse : hourse}:{minutes < 10 ? '0' + minutes : minutes}:{seconds < 10 ? '0' + seconds : seconds} <Link to='/system' className='btn btn-lock'>Dừng chia sẻ</Link></div>
        </div>
    );
}

export default Map;