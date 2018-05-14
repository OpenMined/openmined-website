import React, { Component } from 'react';
import mapboxgl from 'mapbox-gl';
import ScrollPercentage from 'react-scroll-percentage';

class MemberMap extends Component {
  constructor(props) {
    super(props);

    this.state = {
      pitch: 0,
      maxPitch: 40,
      hasAddedMembers: false
    };
  }

  componentDidMount() {
    mapboxgl.accessToken =
      'pk.eyJ1Ijoib3Blbm1pbmVkIiwiYSI6ImNqaDY2aHJ2ZTE4NGcyeG1yeGxic2JueXQifQ.IC8EkSKoaEyJW5qBOlcxuA';

    const { pitch } = this.state;

    this.map = new mapboxgl.Map({
      container: this.mapContainer,
      style: 'mapbox://styles/openmined/cjh68v9d73d812so26vm5u6sp',
      center: [20, 20],
      zoom: 1.15,
      pitch,
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
              geometry: {
                type: 'Point',
                coordinates: [member.coordinates[0], member.coordinates[1]]
              }
            });
          }
        });

        var geojson = {
          type: 'FeatureCollection',
          features
        };

        target.addSource('point', {
          type: 'geojson',
          data: geojson
        });

        target.addLayer({
          id: 'point',
          type: 'circle',
          source: 'point',
          paint: {
            'circle-radius': 5,
            'circle-color': '#3887be'
          }
        });
      });
    }
  }

  componentWillUnmount() {
    this.map.remove();
  }

  render() {
    return (
      <div id="member-map">
        <ScrollPercentage
          onChange={pitch =>
            this.setState({ pitch: pitch * this.state.maxPitch })
          }
        >
          <div ref={el => (this.mapContainer = el)} />
        </ScrollPercentage>
      </div>
    );
  }
}

export default MemberMap;
