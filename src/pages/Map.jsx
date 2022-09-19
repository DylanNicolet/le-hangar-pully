import React from "react";
import { GoogleMap, useJsApiLoader } from "@react-google-maps/api";

export default function Map(){

    const containerStyle = {
        width: "100%",
        height: "400px"
    }

    const center = {
        lat: 46.511305,
        lng: 6.662595
    }

    const { isLoaded } = useJsApiLoader({
        id: "google-map-script",
        googleMapsApiKey: "AIzaSyAPhVIWruC-IMCixNor-49qKOfTz5Xwrgg",
    })

    const [map, setMap] = React.useState(null)

    const onLoad = React.useCallback(function callback(map) {
        const bounds = new window.google.maps.LatLngBounds(center);
        map.fitBounds(bounds);
        setMap(map)
    }, [])

    const onUnmount = React.useCallback(function callback(map) {
        setMap(null)
    }, [])

    return isLoaded ? (
        <GoogleMap
          id="45755326967922dd"
          mapContainerStyle={containerStyle}
          center={center}
          zoom={30}
          onLoad={onLoad}
          onUnmount={onUnmount}
        >
          { /* Child components, such as markers, info windows, etc. */ }
          <></>
        </GoogleMap>
    ) : <></>
}