var wms_layers = [];


        var lyr_OSMStandard_0 = new ol.layer.Tile({
            'title': 'OSM Standard',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: '&nbsp;&middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_Section1_1 = new ol.format.GeoJSON();
var features_Section1_1 = format_Section1_1.readFeatures(json_Section1_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Section1_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Section1_1.addFeatures(features_Section1_1);
var lyr_Section1_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Section1_1, 
                style: style_Section1_1,
                popuplayertitle: 'Section 1',
                interactive: true,
                title: '<img src="styles/legend/Section1_1.png" /> Section 1'
            });
var format_PohonKelapa_2 = new ol.format.GeoJSON();
var features_PohonKelapa_2 = format_PohonKelapa_2.readFeatures(json_PohonKelapa_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PohonKelapa_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PohonKelapa_2.addFeatures(features_PohonKelapa_2);
var lyr_PohonKelapa_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PohonKelapa_2, 
                style: style_PohonKelapa_2,
                popuplayertitle: 'Pohon Kelapa',
                interactive: true,
                title: '<img src="styles/legend/PohonKelapa_2.png" /> Pohon Kelapa'
            });

lyr_OSMStandard_0.setVisible(true);lyr_Section1_1.setVisible(true);lyr_PohonKelapa_2.setVisible(true);
var layersList = [lyr_OSMStandard_0,lyr_Section1_1,lyr_PohonKelapa_2];
lyr_Section1_1.set('fieldAliases', {'id': 'id', 'POLY_ID': 'POLY_ID', 'UNIQUE_ID': 'UNIQUE_ID', 'AREA': 'AREA', 'POINTX': 'POINTX', 'POINTY': 'POINTY', 'Luas (Ha)': 'Luas (Ha)', 'Method': 'Method', 'Value1': 'Value1', 'Value2': 'Value2', 'BlendEnabl': 'BlendEnabl', 'BlendWidth': 'BlendWidth', 'BlendSubse': 'BlendSubse', 'BlendEnabl_1': 'BlendEnabl_1', 'BlendSubse_1': 'BlendSubse_1', 'BlendEnabl_2': 'BlendEnabl_2', 'BlendSubse_2': 'BlendSubse_2', 'Section': 'Section', });
lyr_PohonKelapa_2.set('fieldAliases', {'X Coor': 'X Coor', 'Ycoor': 'Ycoor', 'Blok': 'Blok', 'Status': 'Status', 'Nmr Bibit': 'Nmr Bibit', 'Varietas': 'Varietas', 'Umur': 'Umur', 'Wrna Plph': 'Wrna Plph', });
lyr_Section1_1.set('fieldImages', {'id': 'TextEdit', 'POLY_ID': 'TextEdit', 'UNIQUE_ID': 'TextEdit', 'AREA': 'TextEdit', 'POINTX': 'TextEdit', 'POINTY': 'TextEdit', 'Luas (Ha)': 'TextEdit', 'Method': 'TextEdit', 'Value1': 'TextEdit', 'Value2': 'TextEdit', 'BlendEnabl': 'TextEdit', 'BlendWidth': 'Range', 'BlendSubse': 'TextEdit', 'BlendEnabl_1': 'TextEdit', 'BlendSubse_1': 'TextEdit', 'BlendEnabl_2': 'TextEdit', 'BlendSubse_2': 'TextEdit', 'Section': 'TextEdit', });
lyr_PohonKelapa_2.set('fieldImages', {'X Coor': '', 'Ycoor': '', 'Blok': '', 'Status': '', 'Nmr Bibit': '', 'Varietas': '', 'Umur': '', 'Wrna Plph': '', });
lyr_Section1_1.set('fieldLabels', {'id': 'no label', 'POLY_ID': 'no label', 'UNIQUE_ID': 'no label', 'AREA': 'no label', 'POINTX': 'no label', 'POINTY': 'no label', 'Luas (Ha)': 'no label', 'Method': 'no label', 'Value1': 'no label', 'Value2': 'no label', 'BlendEnabl': 'no label', 'BlendWidth': 'no label', 'BlendSubse': 'no label', 'BlendEnabl_1': 'no label', 'BlendSubse_1': 'no label', 'BlendEnabl_2': 'no label', 'BlendSubse_2': 'no label', 'Section': 'no label', });
lyr_PohonKelapa_2.set('fieldLabels', {'X Coor': 'inline label - always visible', 'Ycoor': 'inline label - always visible', 'Blok': 'inline label - always visible', 'Status': 'inline label - always visible', 'Nmr Bibit': 'inline label - always visible', 'Varietas': 'inline label - always visible', 'Umur': 'inline label - always visible', 'Wrna Plph': 'inline label - always visible', });
lyr_PohonKelapa_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});