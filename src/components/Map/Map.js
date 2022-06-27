
import React, { useEffect, useState } from 'react';
import ReactMapGL, {Marker} from 'react-map-gl';
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
             <ReactMapGL 
                {...viewport}
                 mapStyle="mapbox://styles/mapbox/streets-v11"
                onViewportChange={(viewport) => changeView(viewport)}
                mapboxAccessToken="pk.eyJ1IjoidHVuZ3Blbzk5IiwiYSI6ImNsNHdqbHQ2ejFnNDkzZWxhMnM5cWlkYmQifQ.kwMkAvE6Q3DQpGjKMTx1ag">
                    <Marker
                        latitude={21.0163427}
                        longitude={105.7818576}
                        offsetLeft={-20}
                        offsetTop={-30}
                    >
                    </Marker>
            </ReactMapGL>
    );
}

export default Map;