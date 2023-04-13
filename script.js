var container = document.querySelector('#container');

// variabel foto 360
var panorama1 = new PANOLENS.ImagePanorama("foto1.jpeg"); 
var panorama2 = new PANOLENS.ImagePanorama("foto2.jpeg");
var panorama3 = new PANOLENS.ImagePanorama("foto3.jpeg");
var panorama4 = new PANOLENS.ImagePanorama("foto4.jpeg");
var panorama5 = new PANOLENS.ImagePanorama("foto5.jpeg");

var viewer = new PANOLENS.Viewer({container: container});
viewer.add(panorama1, panorama2, panorama3, panorama4, panorama5);

// infospot di foto1
var infospot = new PANOLENS.Infospot(350, PANOLENS.DataImage.Info);
infospot.position.set(0, -2000, -5000);
panorama1.add(infospot);

infospot.addEventListener('click', function() {
    viewer.setPanorama(panorama2); 
});

// infospot di foto2
var infospot2 = new PANOLENS.Infospot(350, PANOLENS.DataImage.Info);
infospot2.position.set(0, -2000, -5000);
panorama2.add(infospot2);

infospot2.addEventListener('click', function() {
    viewer.setPanorama(panorama3);
});

//infospot di foto3
var infospot3 = new PANOLENS.Infospot(350, PANOLENS.DataImage.Info);
infospot3.position.set(0, -2000, -5000);
panorama3.add(infospot3);

infospot3.addEventListener('click', function() {
    viewer.setPanorama(panorama4);
});

// infospot di foto4
var infospot4 = new PANOLENS.Infospot(350, PANOLENS.DataImage.Info);
infospot4.position.set(0, -2000, -5000);
panorama4.add(infospot4);

infospot4.addEventListener('click', function() {
    viewer.setPanorama(panorama5);
});

// infospot di foto5
var infospot5 = new PANOLENS.Infospot(350, PANOLENS.DataImage.Info);
infospot5.position.set(0, -2000, -5000);
panorama5.add(infospot5);

infospot5.addEventListener('click', function(){
    viewer.setPanorama(panorama1);
});
