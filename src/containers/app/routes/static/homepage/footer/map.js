import React, { Component } from 'react';

import ScrollPercentage from 'react-scroll-percentage';

const canUseDOM = !!(
  typeof window !== 'undefined' &&
  window.document &&
  window.document.createElement
);

let mapboxgl;

// TODO: Weird SSR thing... let's figure out a better solution!
if (canUseDOM) {
  mapboxgl = require('mapbox-gl');
  require('intersection-observer');
}

class MemberMap extends Component {
  constructor(props) {
    super(props);

    this.state = {
      pitch: 10,
      minPitch: 10,
      pitchMultiplier: 45,
      hasAddedMembers: false
    };
  }

  componentDidMount() {
    mapboxgl.accessToken =
      'pk.eyJ1Ijoib3Blbm1pbmVkIiwiYSI6ImNqaDY2aHJ2ZTE4NGcyeG1yeGxic2JueXQifQ.IC8EkSKoaEyJW5qBOlcxuA';

    this.map = new mapboxgl.Map({
      container: this.mapContainer,
      style: 'mapbox://styles/openmined/cjh68v9d73d812so26vm5u6sp',
      center: [20, 20],
      zoom: 1.15,
      pitch: this.state.pitch,
      renderWorldCopies: false,
      interactive: false
    });
  }

  componentDidUpdate(prevProps, prevState) {
    this.map.jumpTo({ pitch: prevState.pitch });
  }

  componentWillReceiveProps({ members }) {
    if (members.length > 0 && !this.state.hasAddedMembers) {
      this.setState({ hasAddedMembers: true });

      this.map.on('load', ({ target }) => {
        const features = [];

        members.forEach(member => {
          if (member.coords) {
            features.push({
              type: 'Feature',
              properties: member,
              geometry: {
                type: 'Point',
                coordinates: member.coords
              }
            });
          }
        });

        var geojson = {
          type: 'FeatureCollection',
          features
        };

        geojson.features.forEach(marker => {
          var el = document.createElement('div');
          el.className = 'marker';

          el.addEventListener('mouseenter', () => {
            this.props.setCurrentMember(marker.properties);
          });

          el.addEventListener('mouseleave', () => {
            this.props.setCurrentMember(null);
          });

          new mapboxgl.Marker(el)
            .setLngLat(marker.geometry.coordinates)
            .addTo(target);
        });
      });
    }
  }

  componentWillUnmount() {
    this.map.remove();
  }

  render() {
    return (
      <ScrollPercentage
        id="member-map"
        onChange={pitch =>
          this.setState({
            pitch: this.state.minPitch + pitch * this.state.pitchMultiplier
          })
        }
      >
        <div ref={el => (this.mapContainer = el)} />
      </ScrollPercentage>
    );
  }
}

export default MemberMap;
