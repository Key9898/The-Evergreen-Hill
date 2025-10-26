import React from "react";
import GoogleMapReact from 'google-map-react';
import { useInView } from 'react-intersection-observer';

interface MarkerProps {
  lat: number;
  lng: number;
  text: string;
}

const Marker: React.FC<MarkerProps> = ({ text }) => (
  <div className="inline-flex items-center justify-center w-8 h-8 text-xs font-bold text-white bg-red-600 rounded-full shadow-lg transform -translate-x-1/2 -translate-y-1/2">
    {text}
  </div>
);

interface MapProps {
  center: {
    lat: number;
    lng: number;
  };
  zoom: number;
}

interface LocationMapProps {
  className?: string;
}

export default function LocationMap({ className = 'h-96' }: LocationMapProps) {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0,
  });

  const defaultProps: MapProps = {
    center: {
      lat: 20.633333,
      lng: 96.566666
    },
    zoom: 13
  };

  const mapOptions = {
    styles: [
      {
        featureType: "all",
        elementType: "all",
        stylers: [
          { saturation: -100 },
          { gamma: 0.5 }
        ]
      }
    ]
  };

  return (
    <div ref={ref} className={`w-full rounded-lg overflow-hidden ${className}`}>
      {inView && (
        <GoogleMapReact
          bootstrapURLKeys={{ key: "" }}
          defaultCenter={defaultProps.center}
          defaultZoom={defaultProps.zoom}
          options={mapOptions}
        >
          <Marker lat={20.633333} lng={96.566666} text="📍" />
        </GoogleMapReact>
      )}
    </div>
  );
}