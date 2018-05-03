import { Injectable } from '@angular/core';
import { environment } from '../environments/environment';

import * as mapboxgl from 'mapbox-gl';
import { Map } from 'mapbox-gl';

@Injectable()
export class MapService {

  constructor() {
    mapboxgl.accessToken = environment.mapbox.accessToken;
    console.log(Map);
  }


  getMarkers() {
    console.log('** Get Markers **');
  }

  createMarker() {
    console.log('** Create Markers **');
  }

  removeMarker($key: string) {
    console.log('** Remove Marker **');
  }

}
