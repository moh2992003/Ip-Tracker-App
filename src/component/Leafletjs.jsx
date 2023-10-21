import React, { useState, useEffect } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import { useSelector } from "react-redux";
import { fetchInfo } from "../features/Slice/storeSlice";

const Leafletjs = () => {
    const info = useSelector((state) => state.info.info);
    const mapStyle = {
        height: '100%',
    };
    const [mapLocation, setMapLocation] = useState([51.505, -0.09]);

    useEffect(() => {
        if (info && info.location) {
            setMapLocation([info.location.lat, info.location.lng]);
            const mapInstance = document.querySelector('.leaflet-container').leafletMap;
            if (mapInstance) {
                mapInstance.setView([info.location.lat, info.location.lng]);
            }
        }
    }, [info]);

    return (
        <div id='map' className='h-[100vh]'>
            <MapContainer center={mapLocation} zoom={13} style={mapStyle}>
                <TileLayer
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                />
                
                <Marker position={mapLocation}>
                    <Popup>
                        {info ? `${info.location.city} ${info.location.region}` : 'Lonodn Bridge'}
                    </Popup>
                </Marker>
            </MapContainer>
        </div>
    );
}

export default Leafletjs;
