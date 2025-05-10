import { MapContainer, TileLayer, Marker, Popup,useMapEvents,  } from 'react-leaflet'
import {useState, } from "react";
import './leaflet.css'
import 'leaflet/dist/leaflet.css'

import L from 'leaflet'
import markerIcon2x from 'leaflet/dist/images/marker-icon-2x.png'
import markerIcon from 'leaflet/dist/images/marker-icon.png'
import markerShadow from 'leaflet/dist/images/marker-shadow.png'

// Fix for missing marker icons on production build
delete L.Icon.Default.prototype._getIconUrl

L.Icon.Default.mergeOptions({
    iconRetinaUrl: markerIcon2x,
    iconUrl: markerIcon,
    shadowUrl: markerShadow,
})



{/*
This is the main component of the leaflet Map


*/}

export default function Leaflet() {
    const [position, setPosition] = useState(null)                  //latlang coords of marker



//function to create a popup wherever the user clicks on the map
    function  LocationMarker() {


    // click event
        const map = useMapEvents({
            click  (e) {
                // initialze constants with coords
                setPosition(e.latlng)
                map.flyTo(e.latlng, map.getZoom())


            //click { close
            }




         //mapevent ({ close
        })


        // marker information
        return position === null ? null : (

            <Marker position={position}>
                <Popup>
                    <strong>You are here at position:</strong>
                    <br />
                    Latitude: {position.lat.toFixed(4)}
                    <br/>
                    Longitude: {position.lng.toFixed(4)}

                </Popup>
            </Marker>
        )
    }





    return (
            <div id='leafletContainer'>


            <h1>Click on your marker to get sunset information!</h1>
            <div id="map">
                <MapContainer center={[42.345, -71.103]} zoom={3.5} scrollWheelZoom={true} style={{ height: '100%', width: '100%' }}>

                    <TileLayer
                        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    />

                    <Marker position={[61.5937, -149.1246]}>
                        <Popup>

                        </Popup>
                    </Marker>
                    <Marker position={[42.345, -71.103]}>
                        <Popup>
                            This is where I&#39;m from!
                        </Popup>
                    </Marker>
                    <LocationMarker></LocationMarker>
                </MapContainer>
            </div>
            </div>
    )
}