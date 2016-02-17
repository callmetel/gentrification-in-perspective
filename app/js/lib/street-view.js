

function initPano() {
  // Note: constructed panorama objects have visible: true
  // set by default.
  var panorama2011 = new google.maps.StreetViewPanorama(
      document.getElementById('streetview2011'), {
        position: {lat: 39.961766, lng: -75.202296},
        imageDate: '2011-07',
        addressControlOptions: {
          position: google.maps.ControlPosition.BOTTOM_CENTER
        },
        imageDateControl: true,
        linksControl: false,
        panControl: false,
        enableCloseButton: false
  });

  var panorama2016 = new google.maps.StreetViewPanorama(
      document.getElementById('streetview2016'), {
        position: {lat: 39.961766, lng: -75.202296},
        imageDate: '2011-07',
        addressControlOptions: {
          position: google.maps.ControlPosition.BOTTOM_CENTER
        },
        imageDateControl: true,
        linksControl: false,
        panControl: false,
        enableCloseButton: false
  });

}
