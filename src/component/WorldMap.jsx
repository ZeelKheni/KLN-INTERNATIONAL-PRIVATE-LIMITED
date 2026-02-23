import React, { useState } from 'react';
import {
    ComposableMap,
    Geographies,
    Geography,
    Marker,
    ZoomableGroup
} from 'react-simple-maps';
import { Tooltip } from 'react-tooltip';

// Using a reliable topojson source
import geoUrl from "../lib/topology.json";

// Example delivery locations data - you can add more locations as needed
const deliveryLocations = [
    {
        id: 1,
        name: "New York",
        coordinates: [-74.006, 40.7128],
        goods: "Electronics, Fashion items",
        deliveryTime: "2-3 business days",
        totalDeliveries: "1,234"
    },
    {
        id: 2,
        name: "London",
        coordinates: [-0.1276, 51.5074],
        goods: "Luxury items, Books",
        deliveryTime: "1-2 business days",
        totalDeliveries: "2,156"
    },
    {
        id: 3,
        name: "Dubai",
        coordinates: [55.2708, 25.2048],
        goods: "Textiles, Spices",
        deliveryTime: "3-4 business days",
        totalDeliveries: "987"
    },
    {
        id: 4,
        name: "Singapore",
        coordinates: [103.8198, 1.3521],
        goods: "Electronics, Rice",
        deliveryTime: "2-3 business days",
        totalDeliveries: "1,567"
    },
    {
        id: 5,
        name: "Mumbai",
        coordinates: [72.8777, 19.0760],
        goods: "Spices, Textiles, Rice",
        deliveryTime: "1-2 business days",
        totalDeliveries: "2,345"
    }
];

const WorldMap = () => {
    const [tooltipContent, setTooltipContent] = useState("");
    const [position, setPosition] = useState({ coordinates: [0, 45], zoom: 0.8 }); // Adjusted initial position and zoom

    const handleMoveEnd = (position) => {
        // Prevent zoom changes by maintaining the initial zoom level
        setPosition({ coordinates: [0, 45], zoom: 0.8 });
    };

    return (
        <section 
            aria-label="Global Delivery Network Map"
            className="flex justify-center items-center bg-white relative"
        >
            <h2 className="sr-only">Interactive World Map showing delivery locations</h2>
            <ComposableMap
                projection="geoMercator"
                width={1200}
                height={500}
                className="w-full"
                aria-hidden="true"
                projectionConfig={{
                    scale: 150,
                    center: [0, 20]
                }}
            >
                <ZoomableGroup
                    zoom={0.8}
                    center={position.coordinates}
                    minZoom={0.8}
                    maxZoom={0.8}
                    onMoveEnd={handleMoveEnd}
                    translateExtent={[
                        [0, 0],
                        [1200, 500]
                    ]}
                >
                    <Geographies geography={geoUrl}>
                        {({ geographies }) =>
                            geographies.map((geo) => (
                                <Geography
                                    key={geo.rsmKey}
                                    geography={geo}
                                    fill="#EAEAEC"
                                    stroke="#D6D6DA"
                                    style={{
                                        default: {
                                            fill: "#E4E6E7",
                                            stroke: "#0c73af",
                                            strokeWidth: 0.5,
                                            outline: "none"
                                        },
                                        hover: {
                                            fill: "#0c73af",
                                            stroke: "#0c73af",
                                            strokeWidth: 0.75,
                                            outline: "none",
                                            opacity: 0.3
                                        }
                                    }}
                                />
                            ))
                        }
                    </Geographies>

                    {deliveryLocations.map(({ id, name, coordinates, goods, deliveryTime, totalDeliveries }) => (
                        <Marker
                            key={id}
                            coordinates={coordinates}
                            data-tooltip-id="location-tooltip"
                            onMouseEnter={() => {
                                setTooltipContent(`
                  <div class="p-4 min-w-[250px]">
                    <h3 class="text-xl font-bold text-[#0c73af] mb-3 border-b-2 border-[#0c73af] pb-2">${name}</h3>
                    <div class="space-y-2">
                      <div class="flex items-center gap-2">
                        <span class="p-1 rounded bg-[#0c73af]/10">
                          <span class="block w-2 h-2 rounded-full bg-[#0c73af]"></span>
                        </span>
                        <p class="text-gray-200">
                          <span class="font-semibold text-[#0c73af]">Goods:</span> 
                          <span class="ml-1">${goods}</span>
                        </p>
                      </div>
                      <div class="flex items-center gap-2">
                        <span class="p-1 rounded bg-[#0c73af]/10">
                          <span class="block w-2 h-2 rounded-full bg-[#0c73af]"></span>
                        </span>
                        <p class="text-gray-200">
                          <span class="font-semibold text-[#0c73af]">Delivery:</span>
                          <span class="ml-1">${deliveryTime}</span>
                        </p>
                      </div>
                      <div class="flex items-center gap-2">
                        <span class="p-1 rounded bg-[#0c73af]/10">
                          <span class="block w-2 h-2 rounded-full bg-[#0c73af]"></span>
                        </span>
                        <p class="text-gray-200">
                          <span class="font-semibold text-[#0c73af]">Total:</span>
                          <span class="ml-1">${totalDeliveries}</span>
                        </p>
                      </div>
                    </div>
                  </div>
                `);
                            }}
                            onMouseLeave={() => setTooltipContent("")}
                        >
                            <g transform="translate(-12, -24)">
                                <path
                                    d="M12 0c-4.198 0-8 3.403-8 7.602 0 4.198 3.469 9.21 8 16.398 4.531-7.188 8-12.2 8-16.398 0-4.199-3.801-7.602-8-7.602zm0 11c-1.657 0-3-1.343-3-3s1.343-3 3-3 3 1.343 3 3-1.343 3-3 3z"
                                    fill="#0c73af"
                                    stroke="#fff"
                                    strokeWidth="1.5"
                                    filter="drop-shadow(0px 2px 3px rgba(12,115,175,0.3))"
                                />
                                <circle
                                    cx="12"
                                    cy="8"
                                    r="3"
                                    fill="#0c73af"
                                    opacity="0.5"
                                >
                                    <animate
                                        attributeName="r"
                                        from="3"
                                        to="12"
                                        dur="2s"
                                        begin="0s"
                                        repeatCount="indefinite"
                                    />
                                    <animate
                                        attributeName="opacity"
                                        from="0.6"
                                        to="0"
                                        dur="2s"
                                        begin="0s"
                                        repeatCount="indefinite"
                                    />
                                </circle>
                                <circle
                                    cx="12"
                                    cy="8"
                                    r="3"
                                    fill="#0c73af"
                                    opacity="0.5"
                                >
                                    <animate
                                        attributeName="r"
                                        from="3"
                                        to="12"
                                        dur="2s"
                                        begin="0.5s"
                                        repeatCount="indefinite"
                                    />
                                    <animate
                                        attributeName="opacity"
                                        from="0.6"
                                        to="0"
                                        dur="2s"
                                        begin="0.5s"
                                        repeatCount="indefinite"
                                    />
                                </circle>
                            </g>
                        </Marker>
                    ))}
                </ZoomableGroup>
            </ComposableMap>

            {/* Add accessible list of locations for screen readers */}
            <div className="sr-only">
                <h3>Delivery Locations:</h3>
                <ul>
                    {deliveryLocations.map(location => (
                        <li key={location.id}>
                            {location.name} - Delivers {location.goods} within {location.deliveryTime}
                        </li>
                    ))}
                </ul>
            </div>

            <Tooltip
                id="location-tooltip"
                html={tooltipContent}
                className="bg-white rounded-lg shadow-xl border-2 border-[#0c73af]/20 p-2 max-w-xs"
                role="tooltip"
            />
        </section>
    );
};

export default WorldMap;
