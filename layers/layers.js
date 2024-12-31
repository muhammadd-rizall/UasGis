var wms_layers = [];


        var lyr_GoogleSatellite_0 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' &middot; <a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });

        var lyr_GoogleLabels_1 = new ol.layer.Tile({
            'title': 'Google Labels',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' &middot; <a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=h&x={x}&y={y}&z={z}'
            })
        });
var format_batas_2 = new ol.format.GeoJSON();
var features_batas_2 = format_batas_2.readFeatures(json_batas_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_batas_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_batas_2.addFeatures(features_batas_2);
var lyr_batas_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_batas_2, 
                style: style_batas_2,
                popuplayertitle: 'batas',
                interactive: true,
                title: '<img src="styles/legend/batas_2.png" /> batas'
            });
var format_rumah_3 = new ol.format.GeoJSON();
var features_rumah_3 = format_rumah_3.readFeatures(json_rumah_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_rumah_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_rumah_3.addFeatures(features_rumah_3);
var lyr_rumah_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_rumah_3, 
                style: style_rumah_3,
                popuplayertitle: 'rumah',
                interactive: true,
                title: '<img src="styles/legend/rumah_3.png" /> rumah'
            });
var format_fasilitas_4 = new ol.format.GeoJSON();
var features_fasilitas_4 = format_fasilitas_4.readFeatures(json_fasilitas_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_fasilitas_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_fasilitas_4.addFeatures(features_fasilitas_4);
var lyr_fasilitas_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_fasilitas_4, 
                style: style_fasilitas_4,
                popuplayertitle: 'fasilitas',
                interactive: true,
                title: '<img src="styles/legend/fasilitas_4.png" /> fasilitas'
            });
var format_gerbang_5 = new ol.format.GeoJSON();
var features_gerbang_5 = format_gerbang_5.readFeatures(json_gerbang_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_gerbang_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_gerbang_5.addFeatures(features_gerbang_5);
var lyr_gerbang_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_gerbang_5, 
                style: style_gerbang_5,
                popuplayertitle: 'gerbang',
                interactive: true,
                title: '<img src="styles/legend/gerbang_5.png" /> gerbang'
            });
var format_jalan_6 = new ol.format.GeoJSON();
var features_jalan_6 = format_jalan_6.readFeatures(json_jalan_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_jalan_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_jalan_6.addFeatures(features_jalan_6);
var lyr_jalan_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_jalan_6, 
                style: style_jalan_6,
                popuplayertitle: 'jalan',
                interactive: true,
                title: '<img src="styles/legend/jalan_6.png" /> jalan'
            });

lyr_GoogleSatellite_0.setVisible(true);lyr_GoogleLabels_1.setVisible(true);lyr_batas_2.setVisible(true);lyr_rumah_3.setVisible(true);lyr_fasilitas_4.setVisible(true);lyr_gerbang_5.setVisible(true);lyr_jalan_6.setVisible(true);
var layersList = [lyr_GoogleSatellite_0,lyr_GoogleLabels_1,lyr_batas_2,lyr_rumah_3,lyr_fasilitas_4,lyr_gerbang_5,lyr_jalan_6];
lyr_batas_2.set('fieldAliases', {'id': 'id', 'luas': 'luas', });
lyr_rumah_3.set('fieldAliases', {'id': 'id', 'nama': 'nama', 'luas': 'luas', 'status': 'status', 'type rumah': 'type rumah', });
lyr_fasilitas_4.set('fieldAliases', {'id': 'id', 'nama': 'nama', 'fungsi': 'fungsi', 'luas': 'luas', });
lyr_gerbang_5.set('fieldAliases', {'id': 'id', 'nama': 'nama', });
lyr_jalan_6.set('fieldAliases', {'id': 'id', 'nama': 'nama', 'panjang': 'panjang', });
lyr_batas_2.set('fieldImages', {'id': 'TextEdit', 'luas': '', });
lyr_rumah_3.set('fieldImages', {'id': 'TextEdit', 'nama': 'TextEdit', 'luas': '', 'status': '', 'type rumah': '', });
lyr_fasilitas_4.set('fieldImages', {'id': 'TextEdit', 'nama': 'TextEdit', 'fungsi': '', 'luas': '', });
lyr_gerbang_5.set('fieldImages', {'id': '', 'nama': '', });
lyr_jalan_6.set('fieldImages', {'id': 'TextEdit', 'nama': 'TextEdit', 'panjang': 'TextEdit', });
lyr_batas_2.set('fieldLabels', {'id': 'no label', 'luas': 'no label', });
lyr_rumah_3.set('fieldLabels', {'id': 'no label', 'nama': 'no label', 'luas': 'no label', 'status': 'no label', 'type rumah': 'no label', });
lyr_fasilitas_4.set('fieldLabels', {'id': 'no label', 'nama': 'header label - always visible', 'fungsi': 'header label - visible with data', 'luas': 'no label', });
lyr_gerbang_5.set('fieldLabels', {'id': 'no label', 'nama': 'no label', });
lyr_jalan_6.set('fieldLabels', {'id': 'no label', 'nama': 'inline label - always visible', 'panjang': 'inline label - visible with data', });
lyr_jalan_6.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});