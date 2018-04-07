import React from 'react'
import {GoogleMap, Marker, withGoogleMap, withScriptjs} from 'react-google-maps'
import Columns from '../../components/ui/columns'
import Column from '../../components/ui/column'

const MyMapComponent = withScriptjs(
  withGoogleMap(({isMarkerShown}) => (
    <GoogleMap defaultZoom={8} defaultCenter={{lat: -34.397, lng: 150.644}}>
      {isMarkerShown && <Marker position={{lat: -34.397, lng: 150.644}} />}
    </GoogleMap>
  ))
)

const StepThree = () => (
  <Columns isCentered>
    <Column>
      <MyMapComponent
        isMarkerShown
        googleMapURL="https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places"
        loadingElement={<div style={{height: `100%`}} />}
        containerElement={<div style={{height: `400px`}} />}
        mapElement={<div style={{height: `100%`}} />}
      />
    </Column>
  </Columns>
)

export default StepThree
