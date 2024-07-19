var wms_layers = [];


        var lyr_GoogleSatellite_0 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var format_Buildings_confidence_gte_075_1 = new ol.format.GeoJSON();
var features_Buildings_confidence_gte_075_1 = format_Buildings_confidence_gte_075_1.readFeatures(json_Buildings_confidence_gte_075_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Buildings_confidence_gte_075_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Buildings_confidence_gte_075_1.addFeatures(features_Buildings_confidence_gte_075_1);
var lyr_Buildings_confidence_gte_075_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Buildings_confidence_gte_075_1, 
                style: style_Buildings_confidence_gte_075_1,
                popuplayertitle: "Buildings_confidence_gte_075",
                interactive: true,
                title: 'Buildings_confidence_gte_075'
            });
var format_gte_75_2 = new ol.format.GeoJSON();
var features_gte_75_2 = format_gte_75_2.readFeatures(json_gte_75_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_gte_75_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_gte_75_2.addFeatures(features_gte_75_2);
var lyr_gte_75_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_gte_75_2, 
                style: style_gte_75_2,
                popuplayertitle: "gte_75",
                interactive: true,
                title: '<img src="styles/legend/gte_75_2.png" /> gte_75'
            });
var format_Buildings_confidence_065_070_3 = new ol.format.GeoJSON();
var features_Buildings_confidence_065_070_3 = format_Buildings_confidence_065_070_3.readFeatures(json_Buildings_confidence_065_070_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Buildings_confidence_065_070_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Buildings_confidence_065_070_3.addFeatures(features_Buildings_confidence_065_070_3);
var lyr_Buildings_confidence_065_070_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Buildings_confidence_065_070_3, 
                style: style_Buildings_confidence_065_070_3,
                popuplayertitle: "Buildings_confidence_065_070",
                interactive: true,
                title: 'Buildings_confidence_065_070'
            });
var format_65_70_4 = new ol.format.GeoJSON();
var features_65_70_4 = format_65_70_4.readFeatures(json_65_70_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_65_70_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_65_70_4.addFeatures(features_65_70_4);
var lyr_65_70_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_65_70_4, 
                style: style_65_70_4,
                popuplayertitle: "65_70",
                interactive: true,
                title: '<img src="styles/legend/65_70_4.png" /> 65_70'
            });
var format_Buildings_confidence_070_075_5 = new ol.format.GeoJSON();
var features_Buildings_confidence_070_075_5 = format_Buildings_confidence_070_075_5.readFeatures(json_Buildings_confidence_070_075_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Buildings_confidence_070_075_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Buildings_confidence_070_075_5.addFeatures(features_Buildings_confidence_070_075_5);
var lyr_Buildings_confidence_070_075_5 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Buildings_confidence_070_075_5, 
                style: style_Buildings_confidence_070_075_5,
                popuplayertitle: "Buildings_confidence_070_075",
                interactive: true,
                title: 'Buildings_confidence_070_075'
            });
var format_70_75_6 = new ol.format.GeoJSON();
var features_70_75_6 = format_70_75_6.readFeatures(json_70_75_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_70_75_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_70_75_6.addFeatures(features_70_75_6);
var lyr_70_75_6 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_70_75_6, 
                style: style_70_75_6,
                popuplayertitle: "70_75",
                interactive: true,
                title: '<img src="styles/legend/70_75_6.png" /> 70_75'
            });

lyr_GoogleSatellite_0.setVisible(true);lyr_Buildings_confidence_gte_075_1.setVisible(true);lyr_gte_75_2.setVisible(true);lyr_Buildings_confidence_065_070_3.setVisible(true);lyr_65_70_4.setVisible(true);lyr_Buildings_confidence_070_075_5.setVisible(true);lyr_70_75_6.setVisible(true);
var layersList = [lyr_GoogleSatellite_0,lyr_Buildings_confidence_gte_075_1,lyr_gte_75_2,lyr_Buildings_confidence_065_070_3,lyr_65_70_4,lyr_Buildings_confidence_070_075_5,lyr_70_75_6];
lyr_Buildings_confidence_gte_075_1.set('fieldAliases', {'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'longitude_latitude': 'longitude_latitude', 'confidence': 'confidence', 'area_in_meters': 'area_in_meters', 'system_index': 'system_index', 'full_plus_code': 'full_plus_code', });
lyr_gte_75_2.set('fieldAliases', {'Name': 'Name', 'descriptio': 'descriptio', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMo': 'altitudeMo', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'longitude_': 'longitude_', 'confidence': 'confidence', 'area_in_me': 'area_in_me', 'system_ind': 'system_ind', 'full_plus_': 'full_plus_', });
lyr_Buildings_confidence_065_070_3.set('fieldAliases', {'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'longitude_latitude': 'longitude_latitude', 'confidence': 'confidence', 'area_in_meters': 'area_in_meters', 'system_index': 'system_index', 'full_plus_code': 'full_plus_code', });
lyr_65_70_4.set('fieldAliases', {'Name': 'Name', 'descriptio': 'descriptio', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMo': 'altitudeMo', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'longitude_': 'longitude_', 'confidence': 'confidence', 'area_in_me': 'area_in_me', 'system_ind': 'system_ind', 'full_plus_': 'full_plus_', });
lyr_Buildings_confidence_070_075_5.set('fieldAliases', {'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'longitude_latitude': 'longitude_latitude', 'confidence': 'confidence', 'area_in_meters': 'area_in_meters', 'system_index': 'system_index', 'full_plus_code': 'full_plus_code', });
lyr_70_75_6.set('fieldAliases', {'Name': 'Name', 'descriptio': 'descriptio', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMo': 'altitudeMo', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'longitude_': 'longitude_', 'confidence': 'confidence', 'area_in_me': 'area_in_me', 'system_ind': 'system_ind', 'full_plus_': 'full_plus_', });
lyr_Buildings_confidence_gte_075_1.set('fieldImages', {'Name': '', 'description': '', 'timestamp': '', 'begin': '', 'end': '', 'altitudeMode': '', 'tessellate': '', 'extrude': '', 'visibility': '', 'drawOrder': '', 'icon': '', 'longitude_latitude': '', 'confidence': '', 'area_in_meters': '', 'system_index': '', 'full_plus_code': '', });
lyr_gte_75_2.set('fieldImages', {'Name': '', 'descriptio': '', 'timestamp': '', 'begin': '', 'end': '', 'altitudeMo': '', 'tessellate': '', 'extrude': '', 'visibility': '', 'drawOrder': '', 'icon': '', 'longitude_': '', 'confidence': '', 'area_in_me': '', 'system_ind': '', 'full_plus_': '', });
lyr_Buildings_confidence_065_070_3.set('fieldImages', {'Name': '', 'description': '', 'timestamp': '', 'begin': '', 'end': '', 'altitudeMode': '', 'tessellate': '', 'extrude': '', 'visibility': '', 'drawOrder': '', 'icon': '', 'longitude_latitude': '', 'confidence': '', 'area_in_meters': '', 'system_index': '', 'full_plus_code': '', });
lyr_65_70_4.set('fieldImages', {'Name': '', 'descriptio': '', 'timestamp': '', 'begin': '', 'end': '', 'altitudeMo': '', 'tessellate': '', 'extrude': '', 'visibility': '', 'drawOrder': '', 'icon': '', 'longitude_': '', 'confidence': '', 'area_in_me': '', 'system_ind': '', 'full_plus_': '', });
lyr_Buildings_confidence_070_075_5.set('fieldImages', {'Name': '', 'description': '', 'timestamp': '', 'begin': '', 'end': '', 'altitudeMode': '', 'tessellate': '', 'extrude': '', 'visibility': '', 'drawOrder': '', 'icon': '', 'longitude_latitude': '', 'confidence': '', 'area_in_meters': '', 'system_index': '', 'full_plus_code': '', });
lyr_70_75_6.set('fieldImages', {'Name': '', 'descriptio': '', 'timestamp': '', 'begin': '', 'end': '', 'altitudeMo': '', 'tessellate': '', 'extrude': '', 'visibility': '', 'drawOrder': '', 'icon': '', 'longitude_': '', 'confidence': '', 'area_in_me': '', 'system_ind': '', 'full_plus_': '', });
lyr_Buildings_confidence_gte_075_1.set('fieldLabels', {'Name': 'no label', 'description': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMode': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', 'longitude_latitude': 'no label', 'confidence': 'no label', 'area_in_meters': 'no label', 'system_index': 'no label', 'full_plus_code': 'no label', });
lyr_gte_75_2.set('fieldLabels', {'Name': 'no label', 'descriptio': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMo': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', 'longitude_': 'no label', 'confidence': 'no label', 'area_in_me': 'no label', 'system_ind': 'no label', 'full_plus_': 'no label', });
lyr_Buildings_confidence_065_070_3.set('fieldLabels', {'Name': 'no label', 'description': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMode': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', 'longitude_latitude': 'no label', 'confidence': 'no label', 'area_in_meters': 'no label', 'system_index': 'no label', 'full_plus_code': 'no label', });
lyr_65_70_4.set('fieldLabels', {'Name': 'no label', 'descriptio': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMo': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', 'longitude_': 'no label', 'confidence': 'no label', 'area_in_me': 'no label', 'system_ind': 'no label', 'full_plus_': 'no label', });
lyr_Buildings_confidence_070_075_5.set('fieldLabels', {'Name': 'no label', 'description': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMode': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', 'longitude_latitude': 'no label', 'confidence': 'no label', 'area_in_meters': 'no label', 'system_index': 'no label', 'full_plus_code': 'no label', });
lyr_70_75_6.set('fieldLabels', {'Name': 'no label', 'descriptio': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMo': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', 'longitude_': 'no label', 'confidence': 'no label', 'area_in_me': 'no label', 'system_ind': 'no label', 'full_plus_': 'no label', });
lyr_70_75_6.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});