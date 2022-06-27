
import React, { useEffect, useState } from 'react';
import ReactMapGL, {Marker} from 'react-map-gl';
import { Link } from 'react-router-dom';
import { IMAGE } from '../../contants/IMAGE';
import './map.scss';

function Map() {
  // Setting up the state for the map
  const [viewport, setViewport] = useState({
        width: "100vw",
        height: "100vh",
        latitude: 21.0163427,
        longitude: 105.7818576,
        zoom: 16
  });

  

  const changeView = (viewport) => {
    console.log(viewport);
    setViewport(viewport)
  }

    return (
        <div className='img-map'>
          
            <div className='text-map'>Vị trí của bạn được chia sẻ còn lại trong: 2:00:00 <Link to='/system' className='btn btn-lock'>Dừng chia sẻ</Link></div>
        </div>
    );
}

export default Map;