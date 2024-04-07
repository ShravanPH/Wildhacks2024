import L from "leaflet";
import { createControlComponent } from "@react-leaflet/core";
import "leaflet-routing-machine";

const createRoutineMachineLayer = (props) => {
  console.log(props)
  const instance = L.Routing.control({
    waypoints: [
      // ["41.8357515, 41.8358197"],
      // ["-87.6393317, -87.6390329"]
      L.latLng(41.7729,-87.5764),
      L.latLng(41.996,-87.772)
    ],
    lineOptions: {
      styles: [{ color: "#7FA1EB", weight: 4 }]
    },
    show: false,
    addWaypoints: false,
    routeWhileDragging: true,
    draggableWaypoints: true,
    fitSelectedRoutes: true,
    showAlternatives: false
  });

  return instance;
};

const RoutingMachine = createControlComponent(createRoutineMachineLayer);

export default RoutingMachine;
