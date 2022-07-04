import '../App.css';
import React from 'react'
import Clinics from './clinics';
import PostForm from './PostForm';
import axios from 'axios';
import { useEffect, useState } from 'react';
import {MapContainer, TileLayer, Marker} from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

const API_URL = 'http://localhost:3000/api/v1/clinics';

function getAPIData() {
  return axios.get(API_URL).then((response) => response.data)
}

function AppMap(props) {
    const latlng = props
    const addressInfo = props.addressInfo
    const [clinics, setClinics] = useState([]);
  
    useEffect(() => {
      let mounted = true;
      getAPIData().then((items) => {
        if (mounted){
          setClinics(items);
        }
      });
      return () => (mounted = false);
    }, []);

    const savedMarkers = clinics.map((clinic) => [clinic[1].latitude, clinic[1].longitude])

    const LeafIcon = L.Icon.extend({
        options: {
            iconSize:     [25, 40],
            iconAnchor:   [10, 44]
        }
      });
      

    const streamingIcon = new LeafIcon({
        iconUrl: require("./icons/marker.png")
      });

    return (
      <div className="map-container">
        <Clinics clinics = {clinics} />
        <PostForm onChangeCoordinates = {latlng} addressFound = {addressInfo} />
        <div className="App-map-container">
            <MapContainer center={[-23.5557714, -46.6395571]} zoom={11} style={{height: "100%", width: "100%", position: "fixed"}}>
                <TileLayer 
                url="https://api.maptiler.com/maps/hybrid/256/{z}/{x}/{y}.jpg?key=9uwLJIoMVadbJHrq67jY"
                attribution = '<a href="https://www.maptiler.com/copyright/" target="_blank">&copy; MapTiler</a> <a href="https://www.openstreetmap.org/copyright" target="_blank">&copy; OpenStreetMap contributors</a>'
                >
                </TileLayer>
                {savedMarkers.map((position, idx) => 
                <Marker key={`marker-${idx}`} position={position} icon={streamingIcon}>
                </Marker>
                )}
            </MapContainer>
        </div>
      </div>
    );
  }
  

export default AppMap
