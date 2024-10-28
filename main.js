function initMap() {
  let location = {
    lat: 3.8322414887549443,
    lng: 11.470703654165721,
  };

  let map = new google.maps.Map(document.querySelector("#map"), {
    zoom: 12,
    center: location,
  });
  let marker = new google.maps.Marker({
    position: location,
    map: map,
  });
}
