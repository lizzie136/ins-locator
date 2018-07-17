const triangleCoords = [{
        lat: 25.774,
        lng: -80.190
    },
    {
        lat: 18.466,
        lng: -66.118
    },
    {
        lat: 32.321,
        lng: -64.757
    }
];

const notifyUser = () => {
    if (!("Notification" in window)) {
        alert('ISS is on your setted location');
    } else if (Notification.permission === "granted") {
        var notification = new Notification("Hey! ISS is on your setted location");
    } else if (Notification.permission !== "denied") {
        Notification.requestPermission(function (permission) {
            if (permission === "granted") {
                var notification = new Notification("Hey! ISS is on your setted location");
            }
        });
    }
};

const isOnCoords = (position, polygonCoords) => {
    var triangle = new google.maps.Polygon({
        paths: polygonCoords
    });
    const langLng =  new google.maps.LatLng(position); 
    return google.maps.geometry.poly.containsLocation(langLng, triangle);
};


const updatePosition = () => {
    const positionRequest = new Request('http://api.open-notify.org/iss-now.json');

    fetch(positionRequest).then(response => response.json()).then(response => {
        const position = {
            lat: Number(response.iss_position.latitude),
            lng: Number(response.iss_position.longitude)
        };
        if (!marker) {
            marker = new google.maps.Marker({
                position: position,
                map: map
            });
        } else {
            marker.setPosition(position);
        }
        map.setCenter(position);
        if (isOnCoords(position, triangleCoords)) {
            notifyUser();
        };
    });
}

window.addEventListener('load', () => {
    const infiniteUpdate = () => {
        updatePosition();
        setTimeout(infiniteUpdate, 3000);
    }
    infiniteUpdate();
});