import { MapContainer, TileLayer, Marker, Popup,useMapEvents,  } from 'react-leaflet'
import {useState, } from "react";
import './leaflet.css'
import 'leaflet/dist/leaflet.css'

import L from 'leaflet'
import markerIcon2x from 'leaflet/dist/images/marker-icon-2x.png'
import markerIcon from 'leaflet/dist/images/marker-icon.png'
import markerShadow from 'leaflet/dist/images/marker-shadow.png'
import styled from "styled-components";




const ImageContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    
`;

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


            <h1>Click on the markers to read my story</h1>
            <div id="map">
                <MapContainer center={[42.345, -71.103]} zoom={8} scrollWheelZoom={true} style={{ height: '100%', width: '100%' }}>

                    <TileLayer
                        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    />

                    <Marker position={[61.5937, -149.1246]} id={"alaska"}>
                        <Popup>

                        </Popup>
                    </Marker>

                    <Marker position={[38.5738, -109.5425]} id={"MOAB"}>
                        <Popup>
                            <ImageContainer>
                                <p>
                                    Last Thanksgiving, My friend Braedon and I went to MOAB national park with some of his
                                    friends to go rock climbing. MOAB is known for its crack climbing which consists of long
                                    continuous cracks that run up the cliff walls.
                                </p>
                                <img src={ "../../src/assets/MOAB.JPG" } alt = "MOAB" style={{ width: '300px' }} />
                            </ImageContainer>
                        </Popup>
                    </Marker>

                    <Marker position={[39.9777, -105.1302]} id={"Colorado"}>
                        <Popup>
                            <ImageContainer>
                                <p>
                                    Last summer, I visited Braedon in his home town of Louisville, Colorado. Surprisingly, I'm from
                                    Louisville, Kentucky (the s is silent, like Louie-ville), while his Louisville has the "s".
                                </p>
                                <img src={ "../../src/assets/Colorado.JPEG" } alt = "colorado" style={{ width: '300px' }} />
                            </ImageContainer>
                        </Popup>
                    </Marker>



                    <Marker position={[34.0033, -118.4770]} id={"california"}>
                        <Popup>
                            <ImageContainer>
                                <p>
                                    In my senior of high school, my friend Rishi and I flew to LA to visit his cousin. This
                                    was my first time visiting the west coast.
                                </p>
                                <img src={ "../../src/assets/California.JPG" } alt = "california" style={{ width: '300px' }} />
                            </ImageContainer>
                        </Popup>
                    </Marker>




                    <Marker position={[44.3434, -68.2678]} id={"acadia"}>
                        <Popup>
                            <ImageContainer>
                                <p>
                                    Last year, some friends and I took a road trip to Acadia national park in Maine.
                                    This picture was of me on the hike up. The hike required lots of rock scrambling but
                                    the view was definitely worth it.
                                </p>
                                <img src={ "../../src/assets/Acadia.JPG" } alt = "acadia" style={{ width: '300px' }} />
                            </ImageContainer>
                        </Popup>
                    </Marker>




                    <Marker position={[44.5888,  -77.3613]} id={"canada"}>
                        <Popup>
                            <ImageContainer>
                                <p>
                                    When I was 8 years old, my parents and I visited a family friend's cabin near
                                    Toronto. We got to go on a boat on the pond near their cabin.
                                </p>
                                <img src={ "../../src/assets/Canada.JPG" } alt = "canada" style={{ width: '300px' }} />
                            </ImageContainer>
                        </Popup>
                    </Marker>



                    <Marker position={[43.1553, -77.5982]} id={"rochester"}>
                        <Popup>
                            <ImageContainer>
                                <p>
                                    In 2019, my family went to the University of Rochester to attend my brother Jack's
                                    college graduation.
                                </p>
                                <img src={ "../../src/assets/Rochester.JPEG" } alt = "rochester" style={{ width: '300px' }} />
                            </ImageContainer>
                        </Popup>
                    </Marker>



                    <Marker position={[42.8548, -72.0986]} id={"Monadnock"}>
                        <Popup>
                            <ImageContainer>
                                <p>
                                    This is Mount Monadnock which is one of the highest peaks in the Northeast.
                                    I hiked this with some friends my freshman year.
                                </p>
                                <img src={ "../../src/assets/monadnok.JPG" } alt = "monadnok" style={{ width: '300px' }} />
                            </ImageContainer>
                        </Popup>
                    </Marker>



                    <Marker position={[41.7610, -70.4971]} id={"Sandwich"}>
                        <Popup>
                            <ImageContainer>
                                <p>
                                    In the last week of my freshman year, My roommate Braedon and I took the PeterPan
                                    bus to Sandwich, MA. We had to walk a couple miles from the bus stop along the road
                                    until we eventually found our way to the coast.
                                </p>
                                <img src={ "../../src/assets/sandwichMA.JPG" } alt = "sandwich" style={{  width: '250px' }} />
                            </ImageContainer>
                        </Popup>
                    </Marker>

                    <Marker position={[39.1219, -84.5210]} id={"cincinnati"}>
                        <Popup>
                            <ImageContainer>
                                <p>
                                    In the summer of my freshman year, i visited my high school friends who went to school
                                    at the University of Cincinnati. This was the first time I was able to see some of them
                                    since high school.
                                </p>
                                <img src={ "../../src/assets/Cincinatti.JPG" } alt = "cinci" style={{  width: '250px' }} />
                            </ImageContainer>
                        </Popup>
                    </Marker>


                    <Marker position={[38.2001,-84.8749]} id={"frankfort"}>
                        <Popup>
                            <ImageContainer>
                                <p>
                                    During my junior year of high school, I participated in a strike at the Kentucky State Capitol
                                    where we advocated for a clean water bill which eventually did get passed!
                                </p>
                                <img src={ "../../src/assets/Frankfort.JPG" } alt = "frankfort" style={{  width: '250px' }} />
                            </ImageContainer>
                        </Popup>
                    </Marker>


                    <LocationMarker></LocationMarker>
                </MapContainer>
            </div>
            </div>
    )
}