import React, { Component } from "react";
import { compose, withProps } from "recompose";
import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker
} from "react-google-maps";

import { getRequestedLocations } from "../api";
import Heatmap from "./Heatmap";
import HeatmapEnd from "./HeatmapEnd";
import Connections from "./Connections";
import Overview from "./Overview";

class Map extends Component {
  constructor(props) {
    super(props);
    this.state = {
      requests: []
    };
  }
  componentDidMount() {
    setInterval(() => {
      getRequestedLocations().then(requests => {
        this.setState({
          requests: requests.filter(
            request => Date.now() - request.timestamp < 10000
          )
        });
      });
    }, 1000);
  }
  render() {
    // center the map somewhere in London
    const center = {
      lat: 51.5,
      lng: 0
    };

    return [
      <Overview numberOfRides={this.state.requests.length} />,
      <GoogleMap
        defaultZoom={13}
        defaultCenter={{ lat: 52.518248, lng: 13.396607 }}
        defaultOptions={{ styles: mapOptions }}
      >
        <HeatmapEnd requests={this.state.requests} />
        <Heatmap requests={this.state.requests} />
        <Connections requests={this.state.requests} />
      </GoogleMap>
    ];
  }
}

export default compose(
  withProps({
    googleMapURL:
      "https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places,visualization",
    loadingElement: <div style={{ height: `100%` }} />,
    containerElement: <div style={{ height: `100vh` }} />,
    mapElement: <div style={{ height: `100%` }} />
  }),
  withScriptjs,
  withGoogleMap
)(Map);

const mapOptions = [
  {
    featureType: "all",
    elementType: "all",
    stylers: [
      {
        visibility: "on"
      }
    ]
  },
  {
    featureType: "all",
    elementType: "labels",
    stylers: [
      {
        visibility: "off"
      },
      {
        saturation: "-100"
      }
    ]
  },
  {
    featureType: "all",
    elementType: "labels.text.fill",
    stylers: [
      {
        saturation: 36
      },
      {
        color: "#000000"
      },
      {
        lightness: 40
      },
      {
        visibility: "off"
      }
    ]
  },
  {
    featureType: "all",
    elementType: "labels.text.stroke",
    stylers: [
      {
        visibility: "off"
      },
      {
        color: "#000000"
      },
      {
        lightness: 16
      }
    ]
  },
  {
    featureType: "all",
    elementType: "labels.icon",
    stylers: [
      {
        visibility: "off"
      }
    ]
  },
  {
    featureType: "administrative",
    elementType: "geometry.fill",
    stylers: [
      {
        color: "#000000"
      },
      {
        lightness: 20
      }
    ]
  },
  {
    featureType: "administrative",
    elementType: "geometry.stroke",
    stylers: [
      {
        color: "#000000"
      },
      {
        lightness: 17
      },
      {
        weight: 1.2
      }
    ]
  },
  {
    featureType: "landscape",
    elementType: "geometry",
    stylers: [
      {
        color: "#000000"
      },
      {
        lightness: 20
      }
    ]
  },
  {
    featureType: "landscape",
    elementType: "geometry.fill",
    stylers: [
      {
        color: "#4d6059"
      }
    ]
  },
  {
    featureType: "landscape",
    elementType: "geometry.stroke",
    stylers: [
      {
        color: "#4d6059"
      }
    ]
  },
  {
    featureType: "landscape.natural",
    elementType: "geometry.fill",
    stylers: [
      {
        color: "#4d6059"
      }
    ]
  },
  {
    featureType: "poi",
    elementType: "geometry",
    stylers: [
      {
        lightness: 21
      }
    ]
  },
  {
    featureType: "poi",
    elementType: "geometry.fill",
    stylers: [
      {
        color: "#4d6059"
      }
    ]
  },
  {
    featureType: "poi",
    elementType: "geometry.stroke",
    stylers: [
      {
        color: "#4d6059"
      }
    ]
  },
  {
    featureType: "road",
    elementType: "geometry",
    stylers: [
      {
        visibility: "on"
      },
      {
        color: "#7f8d89"
      }
    ]
  },
  {
    featureType: "road",
    elementType: "geometry.fill",
    stylers: [
      {
        color: "#7f8d89"
      }
    ]
  },
  {
    featureType: "road.highway",
    elementType: "geometry.fill",
    stylers: [
      {
        color: "#7f8d89"
      },
      {
        lightness: 17
      }
    ]
  },
  {
    featureType: "road.highway",
    elementType: "geometry.stroke",
    stylers: [
      {
        color: "#7f8d89"
      },
      {
        lightness: 29
      },
      {
        weight: 0.2
      }
    ]
  },
  {
    featureType: "road.arterial",
    elementType: "geometry",
    stylers: [
      {
        color: "#000000"
      },
      {
        lightness: 18
      }
    ]
  },
  {
    featureType: "road.arterial",
    elementType: "geometry.fill",
    stylers: [
      {
        color: "#7f8d89"
      }
    ]
  },
  {
    featureType: "road.arterial",
    elementType: "geometry.stroke",
    stylers: [
      {
        color: "#7f8d89"
      }
    ]
  },
  {
    featureType: "road.local",
    elementType: "geometry",
    stylers: [
      {
        color: "#000000"
      },
      {
        lightness: 16
      }
    ]
  },
  {
    featureType: "road.local",
    elementType: "geometry.fill",
    stylers: [
      {
        color: "#7f8d89"
      }
    ]
  },
  {
    featureType: "road.local",
    elementType: "geometry.stroke",
    stylers: [
      {
        color: "#7f8d89"
      }
    ]
  },
  {
    featureType: "transit",
    elementType: "geometry",
    stylers: [
      {
        color: "#000000"
      },
      {
        lightness: 19
      }
    ]
  },
  {
    featureType: "water",
    elementType: "all",
    stylers: [
      {
        color: "#2b3638"
      },
      {
        visibility: "on"
      }
    ]
  },
  {
    featureType: "water",
    elementType: "geometry",
    stylers: [
      {
        color: "#2b3638"
      },
      {
        lightness: 17
      }
    ]
  },
  {
    featureType: "water",
    elementType: "geometry.fill",
    stylers: [
      {
        color: "#24282b"
      }
    ]
  },
  {
    featureType: "water",
    elementType: "geometry.stroke",
    stylers: [
      {
        color: "#24282b"
      }
    ]
  },
  {
    featureType: "water",
    elementType: "labels",
    stylers: [
      {
        visibility: "off"
      }
    ]
  },
  {
    featureType: "water",
    elementType: "labels.text",
    stylers: [
      {
        visibility: "off"
      }
    ]
  },
  {
    featureType: "water",
    elementType: "labels.text.fill",
    stylers: [
      {
        visibility: "off"
      }
    ]
  },
  {
    featureType: "water",
    elementType: "labels.text.stroke",
    stylers: [
      {
        visibility: "off"
      }
    ]
  },
  {
    featureType: "water",
    elementType: "labels.icon",
    stylers: [
      {
        visibility: "off"
      }
    ]
  }
];
