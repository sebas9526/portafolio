import { MapContainer, TileLayer, Marker } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import iconRetinaUrl from 'leaflet/dist/images/marker-icon-2x.png';
import iconUrl from 'leaflet/dist/images/marker-icon.png';
import shadowUrl from 'leaflet/dist/images/marker-shadow.png';
import { PropsMaps } from './interfaces';
import { ReactNode, useRef } from 'react';

// Configuración del ícono predeterminado
const DefaultIcon = L.icon({
  iconRetinaUrl,
  iconUrl,
  shadowUrl,
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41]
});

L.Marker.prototype.options.icon = DefaultIcon;

// const position: [number, number] = [6.2486, -75.5678];

/**
 * @description   Componente para el mapa
 * @dateCreation  13/06/2024
 * @dateUpdating  13/06/2024
 * @userCreation  Sebastian saldarriaga
 * @param {PropsMaps} {
 *  children -> En este prop llegara la vista del popup
 *  position -> Son las coordenadas que se van a mostrar en el mapa
 * }
 * @return        {*}  (ReactNode)
 */
const Map = ({ position }: PropsMaps): ReactNode => {
  const markerRef = useRef(null);

  return (
    <div>
      <MapContainer center={position} zoom={15} style={{ height: '400px', width: '100%' }}>
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
        <Marker position={position} ref={markerRef} />
      </MapContainer>
    </div>
  );
}

export default Map;
