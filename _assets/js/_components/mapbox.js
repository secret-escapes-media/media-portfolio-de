if( $('#map').length > 0 ){

  // Set map height
  $('#map').height( $(window).height() );

  //===================================
  // MAP TOGGLES
  //-----------------------------------

  // var i;
  // var j;
  // var index_highest = 0;
  //
  // var pins = ['secretescapes'];
  // var coll = document.getElementsByClassName("map-toggle");
  // var coll1 = document.getElementsByClassName("marker--secretescapes");
  //
  //
  //
  // document.getElementById('map-pin1').addEventListener("click", function(){
  //
  // for (i = 1; i <= coll1.length; i++) {
  //   var elem = document.getElementById('secretescapes'+i);
  //
  //   if (elem.style.display === "none") {
  //       elem.style.display = "block";
  // 			elem.style.zIndex = 20+i;
  // 			this.classList.add('map-toggle-active');
  //
  //     } else {
  //       elem.style.display = "none";
  // 			elem.style.zIndex = 5;
  // 			this.classList.remove('map-toggle-active');
  //
  //     }
  //   }
  // });




  //===================================
  // MAP
  //-----------------------------------

  mapboxgl.accessToken = 'pk.eyJ1IjoiaGFtaXNoamdyYXkiLCJhIjoiY2pkbjBmeGN6MDd1YzMzbXI3cWdpNThjayJ9.3YE8T1H2QUyqNIkxdKWxkg';

  var map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/hamishjgray/ck0mh0sak0c491coyj7amgdiy',
    center: [16.557087,46.999560],
    zoom: 2,
    minZoom: 2,
    maxZoom: 6,
    scrollZoom: false
  });

  // map.fitBounds([[
  //     110.7690568,
  //     -9.2379
  // ], [
  //     155.299813,
  //     -45.1714184
  // ]]);

  var nav = new mapboxgl.NavigationControl();
  map.addControl(nav, 'bottom-right');


  map.on('load', function() {
    // Insert the layer beneath any symbol layer.
    var layers = map.getStyle().layers;

    var labelLayerId;
    for (var i = 0; i < layers.length; i++) {
    if (layers[i].type === 'symbol' && layers[i].layout['text-field']) {
      labelLayerId = layers[i].id;
      break;
      }
    }

    });



    // code from the next step will go here!
    var geojson = {
      type: 'FeatureCollection',
      features: [



  //************** Location pins // secretescapes ************

  {
    type: 'Feature',
    geometry: {
      type: 'Point',
      coordinates: [4.536122,50.802553]
    },
    properties: {
      id: '1',
      cat: 'secretescapes',
      title: 'Belgium',
      img: 'belgium',
      description: '789,933'
    }
  },
  {
    type: 'Feature',
    geometry: {
      type: 'Point',
      coordinates: [5.758725,52.389158]
    },
    properties: {
      id: '2',
      cat: 'secretescapes',
      title: 'Netherlands',
      img: 'netherlands',
      description: '2,149,362'
    }
  },
  {
    type: 'Feature',
    geometry: {
      type: 'Point',
      coordinates: [12.506086,55.707772]
    },
    properties: {
      id: '3',
      cat: 'secretescapes',
      title: 'Denmark',
      img: 'denmark',
      description: '799,836'
    }
  },
  {
    type: 'Feature',
    geometry: {
      type: 'Point',
      coordinates: [10.327410,51.129415]
    },
    properties: {
      id: '4',
      cat: 'secretescapes',
      title: 'Germany',
      img: 'germany',
      description: '8,151,419'
    }
  },
  {
    type: 'Feature',
    geometry: {
      type: 'Point',
      coordinates: [12.296430,42.947951]
    },
    properties: {
      id: '5',
      cat: 'secretescapes',
      title: 'Italy',
      img: 'italy',
      description: '4,221,528'
    }
  },
  {
    type: 'Feature',
    geometry: {
      type: 'Point',
      coordinates: [9.216240,61.744660]
    },
    properties: {
      id: '6',
      cat: 'secretescapes',
      title: 'Norway',
      img: 'norway',
      description: '547,096'
    }
  },
  {
    type: 'Feature',
    geometry: {
      type: 'Point',
      coordinates: [-3.750246,40.387768]
    },
    properties: {
      id: '7',
      cat: 'secretescapes',
      title: 'Spain',
      img: 'spain',
      description: '1,848,932'
    }
  },
  {
    type: 'Feature',
    geometry: {
      type: 'Point',
      coordinates: [15.528966,62.904235]
    },
    properties: {
      id: '8',
      cat: 'secretescapes',
      title: 'Sweden',
      img: 'sweden',
      description: '1,376,733'
    }
  },
  {
    type: 'Feature',
    geometry: {
      type: 'Point',
      coordinates: [8.294111,46.922465]
    },
    properties: {
      id: '9',
      cat: 'secretescapes',
      title: 'Switzerland',
      img: 'switzerland',
      description: '439,340'
    }
  },
  {
    type: 'Feature',
    geometry: {
      type: 'Point',
      coordinates: [-2.351723,53.929235]
    },
    properties: {
      id: '10',
      cat: 'secretescapes',
      title: 'United Kingdom',
      img: 'united-kingdom',
      description: '21,896,715'
    }
  },
  {
    type: 'Feature',
    geometry: {
      type: 'Point',
      coordinates: [-98.730704,39.055484]
    },
    properties: {
      id: '11',
      cat: 'secretescapes',
      title: 'United States',
      img: 'united-states',
      description: '11,732,193'
    }
  },
  {
    type: 'Feature',
    geometry: {
      type: 'Point',
      coordinates: [2.688753,46.872053]
    },
    properties: {
      id: '12',
      cat: 'secretescapes',
      title: 'France',
      img: 'france',
      description: '1,810,631'
    }
  },
  {
    type: 'Feature',
    geometry: {
      type: 'Point',
      coordinates: [19.305790,52.059686]
    },
    properties: {
      id: '13',
      cat: 'secretescapes',
      title: 'Poland',
      img: 'poland',
      description: '5,007,817'
    }
  },
  {
    type: 'Feature',
    geometry: {
      type: 'Point',
      coordinates: [15.385859,49.849968]
    },
    properties: {
      id: '14',
      cat: 'secretescapes',
      title: 'Czech Republic',
      img: 'czech-republic',
      description: '240,823'
    }
  },
  {
    type: 'Feature',
    geometry: {
      type: 'Point',
      coordinates: [19.575240,47.125380]
    },
    properties: {
      id: '15',
      cat: 'secretescapes',
      title: 'Hungary',
      img: 'hungary',
      description: '608,239'
    }
  },
  {
    type: 'Feature',
    geometry: {
      type: 'Point',
      coordinates: [19.763483,48.828791]
    },
    properties: {
      id: '16',
      cat: 'secretescapes',
      title: 'Slovakia',
      img: 'slovakia',
      description: '264,123'
    }
  },
  {
    type: 'Feature',
    geometry: {
      type: 'Point',
      coordinates: [103.877760,1.306118]
    },
    properties: {
      id: '17',
      cat: 'secretescapes',
      title: 'Singapore',
      img: 'singapore',
      description: '143,011'
    }
  },
  {
    type: 'Feature',
    geometry: {
      type: 'Point',
      coordinates: [114.187258,22.383585]
    },
    properties: {
      id: '18',
      cat: 'secretescapes',
      title: 'Hong Kong',
      img: 'hong-kong',
      description: '53,969'
    }
  },
  {
    type: 'Feature',
    geometry: {
      type: 'Point',
      coordinates: [102.670332,3.792089]
    },
    properties: {
      id: '19',
      cat: 'secretescapes',
      title: 'Malaysia',
      img: 'malaysia',
      description: '96,189'
    }
  },
  {
    type: 'Feature',
    geometry: {
      type: 'Point',
      coordinates: [122.395874,-4.365064]
    },
    properties: {
      id: '20',
      cat: 'secretescapes',
      title: 'Indonesia',
      img: 'indonesia',
      description: '50,077'
    }
  }

      ]
    };




      // add markers to map
    geojson.features.forEach(function(marker) {

      // create a HTML element for each feature
      var el = document.createElement('a');
      //el.innerHTML = 'onlick';

      //document.body.appendChild(el);
      el.className = 'map-show marker marker--'+marker.properties.cat;
      el.id = marker.properties.cat+marker.properties.id;


      //alert(marker.properties.id);

      // make a marker for each feature and add to the map
    new mapboxgl.Marker(el, {
        offset: [0, -10]
    })
      .setLngLat(marker.geometry.coordinates)
      .setPopup(new mapboxgl.Popup({ offset: 25 }) // add popups
      .setHTML('<div class="bg-img bg-img--16-9" style="background-image: url(../_assets/img/map/'+marker.properties.img+'.jpg); "></div><div class="boxpad--sm"><div class="title title--xxs" >' + marker.properties.title + '</div><p class="text--upper text--bold text--wide text--md title title--sans">' + marker.properties.description + ' members</p></div>'))

      .addTo(map);



    });

}
