import React, { Component } from 'react';
import mapboxgl from 'mapbox-gl';

import ScrollPercentage from 'react-scroll-percentage';

const MARKER_SIZE = 14;
const MARKER_CIRCLE = MARKER_SIZE / 2;

const Marker = props => (
  <svg
    className="marker-svg"
    xmlns="http://www.w3.org/2000/svg"
    version="1.1"
    height={MARKER_SIZE * 2}
    width={MARKER_SIZE}
  >
    {['main', 'child-1', 'child-2'].map((circle, index) => (
      <circle
        key={circle}
        className={`dot ${circle}`}
        cx={MARKER_CIRCLE}
        cy={MARKER_CIRCLE}
        r={MARKER_CIRCLE}
      />
    ))}
  </svg>
);

class MemberMap extends Component {
  constructor(props) {
    super(props);

    this.state = {
      pitch: 20,
      minPitch: 20,
      pitchMultiplier: 40,
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
          if (member.coordinates) {
            features.push({
              type: 'Feature',
              properties: member,
              geometry: {
                type: 'Point',
                coordinates: member.coordinates
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
          el.style.width = MARKER_SIZE + 'px';
          el.style.height = MARKER_SIZE * 2 + 'px';
          el.innerHTML = document.querySelector('.marker-svg').outerHTML;

          el.addEventListener('mouseenter', () => {
            el.className = el.className + ' active';
            this.props.setCurrentMember(marker.properties);
          });

          el.addEventListener('mouseleave', () => {
            el.className = el.className.replace(/ active/g, '');
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
        <Marker />
        <div ref={el => (this.mapContainer = el)} />
      </ScrollPercentage>
    );
  }
}

export default MemberMap;
