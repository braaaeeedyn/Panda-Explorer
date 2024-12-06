const map = L.map('map-container', {
    center: [50, 0],
    zoom: 3,
    minZoom: 2,
});

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '© OpenStreetMap contributors',
    noWrap: true
}).addTo(map);

const pandaIcon  = L.icon({
    iconUrl: 'https://images.vexels.com/content/196211/preview/cute-panda-character-245b50.png',
    iconSize:     [60, 60],
    iconAnchor: [30, 60],
    });

const pandaLocations = [
    { name: "Chengdu Research Base of Giant Panda Breeding", coords: [30.7330, 104.1458] },
    { name: "San Diego Zoo", coords: [32.7353, -117.1490] },
    { name: "Edinburgh Zoo", coords: [55.9420, -3.2690] },
    { name: "Vienna Zoo (Tiergarten Schönbrunn)", coords: [48.1831, 16.3025] },
    { name: "Ocean Park Hong Kong", coords: [22.2474, 114.1758] },
    { name: "Beijing Zoo", coords: [39.9370, 116.3330] },
    { name: "Smithsonian's National Zoo", coords: [38.9296, -77.0488] },
    { name: "Chongqing Zoo", coords: [29.5087, 106.4788] },
];

const pandaLocationsUnlisted = [
    { name: "Zoo Negara", coords: [3.2110, 101.7560] },
    { name: "Taipei Zoo", coords: [24.9987, 121.5793] },
    { name: "ZooParc de Beauval", coords: [47.2502, 1.3617] },
    { name: "Pairi Daiza Zoo", coords: [50.5886, 3.8820] },
    { name: "Zoo Madrid", coords: [40.4115, -3.7632] },
    { name: "Adelaide Zoo", coords: [-34.9156, 138.6056] },
    { name: "River Wonders", coords: [1.4043, 103.7905] },
    { name: "Chapultepec Zoo", coords: [19.4185, -99.1995] },
    { name: "Chiang Mai Zoo", coords: [18.8090, 98.9446] },
    { name: "Ueno Zoo", coords: [35.7150, 139.7739] },
];

pandaLocations.forEach(location => {
    L.marker(location.coords, { icon: pandaIcon })
        .addTo(map)
        .bindPopup(`<b>${location.name}</b>`);
});

pandaLocationsUnlisted.forEach(location => {
    L.marker(location.coords)
        .addTo(map)
        .bindPopup(`<b>${location.name}</b>`);
});



const legend = document.getElementById('legend');
let isDragging = false;
let offsetX, offsetY;
const toggleButton = document.getElementById('legend-toggle');
const legendContent = document.getElementById('legend-content');

legend.addEventListener('mousedown', (e) => {
    isDragging = true;
    offsetX = e.clientX - legend.getBoundingClientRect().left;
    offsetY = e.clientY - legend.getBoundingClientRect().top;
    legend.style.cursor = 'grabbing';
});

document.addEventListener('mousemove', (e) => {
    if (!isDragging) return;
    const left = e.clientX - offsetX;
    const top = e.clientY - offsetY;

    legend.style.left = `${left}px`;
    legend.style.top = `${top}px`;
    legend.style.right = 'auto'; 
});


document.addEventListener('mouseup', () => {
    if (!isDragging) return;
    isDragging = false;
    legend.style.cursor = 'grab';
});

toggleButton.addEventListener('click', () => {
    legend.classList.toggle('minimized');

    if (legend.classList.contains('minimized')) {
        toggleButton.textContent = '+'; 
    } else {
        toggleButton.textContent = '−';
    }
});