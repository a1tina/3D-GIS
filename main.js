require([
   "esri/config",
   "esri/Map",
   "esri/views/MapView",

   "esri/Graphic",
   "esri/layers/GraphicsLayer"

], function (esriConfig, Map, MapView, Graphic, GraphicsLayer) {

   esriConfig.apiKey = "AAPK2db12f26db5c401f897cd80567fb1edfq3I6KhGM86tsxBGhvDBXYE5FvzeB8nNpWmCiriOH9pSbcwqqOrBHMdnW94sIMLun";

   const map = new Map({
      basemap: "arcgis-topographic" //Basemap layer service
   });

   const view = new MapView({
      map,
      center: [106.7976408, 10.8811081], //Longitude, latitude
      zoom: 15,
      container: "viewDiv"
   });

   // Add layer
   const graphicsLayer = new GraphicsLayer();
   map.add(graphicsLayer);

   /* ------------ Point ------------------ */
   drawGeometry('point', [106.803709, 10.869861], handleSimpleMarkerSymbolPicture('university'), handleContentPopup("UIT"));
   drawGeometry('point', [106.8031976, 10.8805585], handleSimpleMarkerSymbolPicture('university'), handleContentPopup("BK"));

   /* ------------ Line ------------------ */
   const simpleLineSymbol = {
      type: "simple-line",
      color: [0, 191, 0], // Orange
      width: 4
   };
   var objectData = {
      length: NaN,
      provinces: []
   };
   var arrPoint = [
      [106.789798, 10.887745], //Longitude, latitude
      [106.788972, 10.886576],
      [106.791654, 10.886671],
   ];
   objectData.length = 300+" km";
   objectData.provinces = ["Binh Duong", "Tp HCM", "Tay Ninh"];
   drawGeometry('polyline', arrPoint, simpleLineSymbol, handleContentPopup('Road 1', handleContent(objectData)));

   /* ------------ Polygon geometry ------------------ */
   const simpleFillSymbol = {
      type: "simple-fill",
      color: [0, 191, 0, 0.4], // Orange, opacity 80%
      outline: {
         color: [0, 3, 51],
         width: 3
      }
   };
   var objectData = {
      population: NaN,
      area: NaN
   };
   var arrPoint = [
      [106.799604, 10.887735], //Longitude, latitude
      [106.802361, 10.889568], //Longitude, latitude
      [106.804764, 10.887967], //Longitude, latitude
      [106.803251, 10.886155], //Longitude, latitude
      [106.799947, 10.886260] //Longitude, latitude
   ];
   objectData.population = 8.993 + " milion people";
   objectData.area = 2.061 + "km2"
   drawGeometry('polygon', arrPoint, simpleFillSymbol, handleContentPopup('Polygon 1', handleContent(objectData)));

   function drawGeometry(type, arrPoint, simpleMarkerSymbol, attributesPoint = {}) {
      let geometry = {
         type: type
      };
      switch (type) {
         case 'point':
            geometry = {...geometry, longitude: arrPoint[0], latitude: arrPoint[1]}
            break;
      
         case 'polyline':
            geometry = {...geometry, paths: arrPoint}
            break;

         case 'polygon':
            geometry = {...geometry, rings: arrPoint}
            break;
      }

      const popupTemplatePoint = {
         title: "{name}",
         content: "{content}"
      }

      var arrParams = [geometry, simpleMarkerSymbol, attributesPoint, popupTemplatePoint];
      handleAddGraphicLayer(arrParams);
   }

   function handleAddGraphicLayer(arrParams) {
      const pointGraphic = new Graphic({
         geometry: arrParams[0],
         symbol: arrParams[1],

         attributes: arrParams[2],
         popupTemplate: arrParams[3]
      });
      graphicsLayer.add(pointGraphic);
   }

   function handleContentPopup(name, content = "") {
      return {
         name,
         content
      };
   }

   function handleSimpleMarkerSymbolPicture(type) {
      return {
         type: "picture-marker",
         url: `./images/${type}.png`,
         width: "30px",
         height: "30px"
      };
   }

   function handleContent(objectData) {
      var str = "";
      for (const key in objectData) {
         if (Object.hasOwnProperty.call(objectData, key)) {
            const value = objectData[key];
            str += `
               ${key.charAt(0).toUpperCase()+key.slice(1)}: ${value}
            `;
         }
      }
      return str;
   }

});