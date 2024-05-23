import React, {useEffect, useState, useRef} from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

const containerStyle = {
  width: '400px',
  height: '400px'
};

const initialcenter = {
  lat: 28.5005149,
  lng: 77.381967
};

function MyComponent({location}) {

  const [center, setCenter] = useState(location);
  const mapRef = useRef(null)

  const onMarkerDragEnd = (event) => {
    const lat = event.latLng.lat();
    const lng = event.latLng.lng();
    setCenter({ lat, lng });
  };

  console.log("location im map ", location)

  useEffect(()=>{
    console.log(mapRef, location);
    // mapRef.current = location;
    if(mapRef.current && location){
      mapRef.current.panTo(new window.google.maps.LatLng(location.lat, location.lng));
    }
    setCenter(location)
  }
  , [location])
  return (
    <LoadScript
      googleMapsApiKey={import.meta.env.VITE_GOOGLE_MAP_API_KEY}

    >
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={15}
        onLoad={map => mapRef.current = map}
      >
        { /* Child components, like markers or shapes */ }
        <Marker position={center} 
          draggable = {true}
          onDragEnd={onMarkerDragEnd}/>
      </GoogleMap>
    </LoadScript>
  )
}

export default React.memo(MyComponent);
