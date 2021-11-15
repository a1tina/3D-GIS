require([
    "esri/config",
    "esri/Map",
    "esri/views/MapView",
    "esri/symbols/TextSymbol",
    "esri/Graphic",
    "esri/layers/GraphicsLayer",
 ], function (esriConfig, Map, MapView, TextSymbol, Graphic, GraphicsLayer) {
    esriConfig.apiKey =
       "AAPK2db12f26db5c401f897cd80567fb1edfq3I6KhGM86tsxBGhvDBXYE5FvzeB8nNpWmCiriOH9pSbcwqqOrBHMdnW94sIMLun";
 
    const map = new Map({
       basemap: "arcgis-topographic", //Basemap layer service
    });
 
    const view = new MapView({
       map,
       center: [105.90563538, 9.8530646], //Longitude, latitude
       zoom: 9,
       container: "viewDiv",
    });
 
    // Add layer
    const graphicsLayer = new GraphicsLayer();
    map.add(graphicsLayer);
 
 
    /* ------------ Polygon geometry ------------------ */
    const simpleFillSymbol = {
       type: "simple-fill",
       color: [224, 189, 1, 1], // Orange, opacity 80%
       outline: {
          color: [0, 0, 0],
          width: 0,
       },
    };
 
    var objectData = {
       population: NaN,
       area: NaN,
    };

    /* ------------ Cà Mau ------------------ */
    objectData.population = "1,191" + " million people";
    objectData.area = "5.294,8" + " km2";
    drawGeometry(
       "polygon",
       pCaMau,
       handleFillColor("Yellow"),
       handleContentPopup("Cà Mau", handleContent(objectData))
    );
 
    /* ------------ Kiên Giang ------------------ */
    objectData.population = "1,730" + " million people";
    objectData.area = "6.348,8" + " km2";
    drawGeometry(
       "polygon",
       pKienGiang,
       handleFillColor("Blue"),
       handleContentPopup("Kiên Giang", handleContent(objectData))
    );
 
    /* ------------ Bạc Liêu ------------------ */
    objectData.population = "917" + " thousand people";
    objectData.area = "2669" + " km2";
    drawGeometry(
       "polygon",
       pBacLieu,
       handleFillColor("Pale-White"),
       handleContentPopup("Bạc Liêu", handleContent(objectData))
    );
 
   /* ------------ Sóc Trăng ------------------ */
    objectData.population = "1,181" + " million people";
    objectData.area = "3311,8" + " km2";
    drawGeometry(
       "polygon",
       pSocTrang,
       handleFillColor("Brown"),
       handleContentPopup("Sóc Trăng", handleContent(objectData))
    );
 
    /* ------------ Hậu Giang ------------------ */
    objectData.population = "728,2" + " thousand people";
    objectData.area = "1621,8" + " km2";
    drawGeometry(
       "polygon",
       pHauGiang,
       handleFillColor("Green"),
       handleContentPopup("Hậu Giang", handleContent(objectData))
    );
 
    /* ------------ An Giang ------------------ */
    objectData.population = "1,864" + " million people";
    objectData.area = "3536,7" + " km2";
    drawGeometry(
       "polygon",
       pAnGiang,
       handleFillColor("Pale-Yellow"),
       handleContentPopup("An Giang", handleContent(objectData))
    );
 
    /* ------------ Cần Thơ ------------------ */
    objectData.population = "1,244" + " million people";
    objectData.area = "1439,2" + " km2";
    drawGeometry(
       "polygon",
       pCanTho,
       handleFillColor("Pink"),
       handleContentPopup("Cần Thơ", handleContent(objectData))
    );
 
    /* ------------ Đồng Tháp ------------------ */
    objectData.population = "1,586" + " million people";
    objectData.area = "3383,8" + " km2";
    drawGeometry(
       "polygon",
       pDongThap,
       handleFillColor("Violet"),
       handleContentPopup("Đồng Tháp", handleContent(objectData))
    );
 
    /* ------------ Vĩnh Long ------------------ */
    objectData.population = "1,022" + " million people";
    objectData.area = "1475" + " km2";
    drawGeometry(
       "polygon",
       pVinhLong,
       handleFillColor("Dark-Blue"),
       handleContentPopup("Vĩnh Long", handleContent(objectData))
    );
 
    /* ------------ Trà Vinh ------------------ */
    objectData.population = "1,01" + " million people";
    objectData.area = "2358,2" + " km2";
    drawGeometry(
       "polygon",
       pTraVinh,
       handleFillColor("Gray"),
       handleContentPopup("Trà Vinh", handleContent(objectData))
    );
 
   /* ------------ Bến Tre ------------------ */
    objectData.population = "1,295" + " million people";
    objectData.area = "2394,6" + " km2";
    drawGeometry(
       "polygon",
       pBenTre,
       handleFillColor("Pale-Green"),
       handleContentPopup("Bến Tre", handleContent(objectData))
    );
 
    /* ------------ Tiền Giang ------------------ */
    objectData.population = "1,783" + " million people";
    objectData.area = "2510,5" + " km2";
    drawGeometry(
       "polygon",
       pTienGiang,
       handleFillColor("Pale-Pink"),
       handleContentPopup("Tiền Giang", handleContent(objectData))
    );
 
    /* ------------ Long An ------------------ */
    objectData.population = "1,744" + " million people";
    objectData.area = "4490,2" + " km2";
    drawGeometry(
       "polygon",
       pLongAn,
       handleFillColor("Pale-Blue"),
       handleContentPopup("Long An", handleContent(objectData))
    );
 
    /* ------------ Hồ Chí Minh ------------------ */
    objectData.population = "9,411" + " million people";
    objectData.area = "2061" + " km2";
    drawGeometry(
       "polygon",
       pHCM,
       handleFillColor("Dark-Pink"),
       handleContentPopup("Thành phố Hồ Chí Minh", handleContent(objectData))
    );
 
      /* ------------ Tây Ninh ------------------ */
    objectData.population = "1,19" + " million people";
    objectData.area = "4041,4" + " km2";
    drawGeometry(
       "polygon",
       pTayNinh,
       handleFillColor("Dark-Yellow"),
       handleContentPopup("Tây Ninh", handleContent(objectData))
    );
 
     /* ------------ Bình Dương ------------------ */
    objectData.population = "1,19" + " million people";
    objectData.area = "4041,4" + " km2";
    drawGeometry(
       "polygon",
       pBinhDuong,
       handleFillColor("Dark-Green"),
       handleContentPopup("Bình Dương", handleContent(objectData))
    );
 
    /* ------------ Đồng Nai ------------------ */
    objectData.population = "3,236" + " million people";
    objectData.area = "5905,7" + " km2";
    drawGeometry(
       "polygon",
       pDongNai,
       handleFillColor("Dark-Brown"),
       handleContentPopup("Đồng Nai", handleContent(objectData))
    );
 
     /* ------------ Bà Tịa - Vũng Tàu ------------------ */
    objectData.population = "1,181" + " million people";
    objectData.area = "1980,8" + " km2";
    drawGeometry(
       "polygon",
       pBRVT,
       handleFillColor("Red"),
       handleContentPopup("Bà Rịa - Vũng Tàu", handleContent(objectData))
    );
 

    /* ------------ Point Section ------------------ */
    /* ------------ University ------------------ */
    drawGeometry(
       "point",
       [106.8031976, 10.8805585],
       handleSimpleMarkerSymbolPicture("university"),
       handleContentPopup("Trường Đại học Bách Khoa")
    );
 
    drawGeometry(
       "point",
       [106.8029111, 10.8700484],
       handleSimpleMarkerSymbolPicture("university"),
       handleContentPopup("Trường Đại học Công nghệ thông tin")
    );
 
    drawGeometry(
       "point",
       [105.7684266, 10.029939],
       handleSimpleMarkerSymbolPicture("university"),
       handleContentPopup("Trường Đại học Cần Thơ")
    );
 
    drawGeometry(
       "point",
       [106.6975809, 10.7326742],
       handleSimpleMarkerSymbolPicture("university"),
       handleContentPopup("Trường Đại học Tôn Đức Thắng")
    );
 
    drawGeometry(
       "point",
       [106.6908869, 10.7295723],
       handleSimpleMarkerSymbolPicture("university"),
       handleContentPopup("Trường Đại học RMIT")
    );
 
    drawGeometry(
       "point",
       [106.6754147, 10.7731605],
       handleSimpleMarkerSymbolPicture("university"),
       handleContentPopup("Trường Đại học Kinh tế TPHCM")
    );
 
    drawGeometry(
       "point",
       [106.3443306, 9.9234569],
       handleSimpleMarkerSymbolPicture("university"),
       handleContentPopup("Trường Đại học Trà Vinh")
    );
 
    drawGeometry(
       "point",
       [105.4301502, 10.3716611],
       handleSimpleMarkerSymbolPicture("university"),
       handleContentPopup("Trường Đại học An Giang")
    );
 
    drawGeometry(
       "point",
       [105.641629, 10.4197288],
       handleSimpleMarkerSymbolPicture("university"),
       handleContentPopup("Trường Đại học Đồng Tháp")
    );
 
    drawGeometry(
       "point",
       [106.661124, 10.7543727],
       handleSimpleMarkerSymbolPicture("university"),
       handleContentPopup("Trường Đại học Y dược TPHCM")
    );
 
    /* ------------ Park ------------------ */
    drawGeometry(
       "point",
       [106.6720154, 10.811316],
       handleSimpleMarkerSymbolPicture("park"),
       handleContentPopup("Công viên Tao Đàn")
    );
 
    drawGeometry(
       "point",
       [106.6902534, 10.7745432],
       handleSimpleMarkerSymbolPicture("park"),
       handleContentPopup("Công viên Gia Định")
    );
 
    drawGeometry(
       "point",
       [106.6622986, 10.8019073],
       handleSimpleMarkerSymbolPicture("park"),
       handleContentPopup("Công viên Hoàng Văn Thụ")
    );
 
    drawGeometry(
       "point",
       [106.3736412, 10.2416546],
       handleSimpleMarkerSymbolPicture("park"),
       handleContentPopup("Công viên Đồng Khởi")
    );
 
    drawGeometry(
       "point",
       [105.7501972, 10.2945196],
       handleSimpleMarkerSymbolPicture("park"),
       handleContentPopup("Công viên Sa Đéc")
    );
 
    drawGeometry(
       "point",
       [106.7654562, 10.898166],
       handleSimpleMarkerSymbolPicture("park"),
       handleContentPopup("Công viên Dĩ An")
    );
 
    drawGeometry(
       "point",
       [106.4594364, 10.9004319],
       handleSimpleMarkerSymbolPicture("park"),
       handleContentPopup("Công viên 7 Kỳ Quan")
    );
 
    drawGeometry(
       "point",
       [106.8201223, 10.9515063],
       handleSimpleMarkerSymbolPicture("park"),
       handleContentPopup("Công viên Biên Hùng")
    );
 
    drawGeometry(
       "point",
       [106.1281302, 11.2869927],
       handleSimpleMarkerSymbolPicture("park"),
       handleContentPopup("Công viên Hoà Thành")
    );
 
    drawGeometry(
       "point",
       [107.0722407, 10.3420833],
       handleSimpleMarkerSymbolPicture("park"),
       handleContentPopup("Công viên Bãi Trước")
    );
 
    /* ------------ Museum ------------------ */
    drawGeometry(
       "point",
       [106.7025489, 10.7879893],
       handleSimpleMarkerSymbolPicture("museum"),
       handleContentPopup("Bảo tàng Lịch sử Việt Nam")
    );
 
    drawGeometry(
       "point",
       [106.685444, 10.7836866],
       handleSimpleMarkerSymbolPicture("museum"),
       handleContentPopup("Bảo tàng Phụ nữ Nam Bộ")
    );
 
    drawGeometry(
       "point",
       [106.6899029, 10.7795159],
       handleSimpleMarkerSymbolPicture("museum"),
       handleContentPopup("Bảo tàng Chứng tích chiến tranh")
    );
 
    drawGeometry(
       "point",
       [106.697141, 10.7698661],
       handleSimpleMarkerSymbolPicture("museum"),
       handleContentPopup("Bảo tàng Mỹ Thuật TPHCM")
    );
 
    drawGeometry(
       "point",
       [105.7845977, 10.0352704],
       handleSimpleMarkerSymbolPicture("museum"),
       handleContentPopup("Bảo tàng Cần Thơ")
    );
 
    drawGeometry(
       "point",
       [105.630321, 10.4532131],
       handleSimpleMarkerSymbolPicture("museum"),
       handleContentPopup("Bảo tàng Đồng Tháp")
    );
 
    drawGeometry(
       "point",
       [105.974662, 9.6092341],
       handleSimpleMarkerSymbolPicture("museum"),
       handleContentPopup("Bảo tàng Khmer Sóc Trăng")
    );
 
    drawGeometry(
       "point",
       [105.4328617, 10.3893699],
       handleSimpleMarkerSymbolPicture("museum"),
       handleContentPopup("Bảo tàng An Giang")
    );
 
    drawGeometry(
       "point",
       [107.0672968, 10.350218],
       handleSimpleMarkerSymbolPicture("museum"),
       handleContentPopup("Bảo tàng Bà Rịa - Vũng Tàu")
    );
 
    drawGeometry(
       "point",
       [106.704578, 10.7682284],
       handleSimpleMarkerSymbolPicture("museum"),
       handleContentPopup("Bảo tàng Hồ Chí Minh")
    );
 
    /* ------------ Bridge ------------------ */
    drawGeometry(
       "point",
       [106.7258392, 10.7988811],
       handleSimpleMarkerSymbolPicture("bridge"),
       handleContentPopup("Cầu Sài Gòn")
    );
 
    drawGeometry(
       "point",
       [106.7087022, 10.8248944],
       handleSimpleMarkerSymbolPicture("bridge"),
       handleContentPopup("Cầu Bình Lợi")
    );
 
    drawGeometry(
       "point",
       [106.8265197, 10.9358111],
       handleSimpleMarkerSymbolPicture("bridge"),
       handleContentPopup("Cầu Hiệp Hoà")
    );
 
    drawGeometry(
       "point",
       [105.017706, 8.8534303],
       handleSimpleMarkerSymbolPicture("bridge"),
       handleContentPopup("Cầu Đầm Cùng")
    );
 
    drawGeometry(
       "point",
       [105.0781467, 10.042144],
       handleSimpleMarkerSymbolPicture("bridge"),
       handleContentPopup("Cầu Rạch Giá 1")
    );
 
    drawGeometry(
       "point",
       [105.7225963, 9.2842723],
       handleSimpleMarkerSymbolPicture("bridge"),
       handleContentPopup("Cầu Kim Sơn")
    );
 
    drawGeometry(
       "point",
       [105.4402207, 9.7889224],
       handleSimpleMarkerSymbolPicture("bridge"),
       handleContentPopup("Cầu Sông Lá"));
 
    drawGeometry(
       "point",
       [105.907926, 10.2771518],
       handleSimpleMarkerSymbolPicture("bridge"),
       handleContentPopup("Cầu Mỹ Thuận")
    );
 
    drawGeometry(
       "point",
       [106.3418068, 10.335926],
       handleSimpleMarkerSymbolPicture("bridge"),
       handleContentPopup("Cầu Rạch Miễu")
    );
 
    drawGeometry(
       "point",
       [106.4055309, 10.5558716],
       handleSimpleMarkerSymbolPicture("bridge"),
       handleContentPopup("Cầu Tân An")
    );
 
 
    /* ------------ Line Section ------------------ */
    const simpleLineSymbol = {
       type: "simple-line",
       color: [65, 69, 85],
       width: 1.5,
    };
    var objectData = {
       length: NaN,
       provinces: [],
    };
 
    /* ------------ QL61 ------------------ */
    objectData.length = 96 + " km";
    objectData.provinces = ["Cần Thơ", "Hậu Giang"];
    drawGeometry(
       "polyline",
       rQL61,
       simpleLineSymbol,
       handleContentPopup("Quốc lộ 61", handleContent(objectData))
    );
 
    /* ------------ QL56 ------------------ */
    objectData.length = 51 + " km";
    objectData.provinces = ["Đồng Nai", "Bà Rịa - Vũng Tàu"];
    drawGeometry(
       "polyline",
       rQL56,
       simpleLineSymbol,
       handleContentPopup("Quốc lộ 56", handleContent(objectData))
    );
 
    /* ------------ Quản lộ Phụng Hiệp ------------------ */
    objectData.length = 122 + " km";
    objectData.provinces = ["Hậu Giang", "Sóc Trăng", "Bạc Liêu", "Cà Mau"];
    drawGeometry(
       "polyline",
       rQLPhungHiep,
       simpleLineSymbol,
       handleContentPopup("Quản Lộ Phụng Hiệp", handleContent(objectData))
    );
 
   /* ------------ QL30 ------------------ */
    objectData.length = 120 + " km";
    objectData.provinces = ["Tiền Giang", "Đồng Tháp"];
    drawGeometry(
       "polyline",
       rQL30,
       simpleLineSymbol,
       handleContentPopup("Quốc lộ 30", handleContent(objectData))
    );
 
    /* ------------ QL63 ------------------ */
    objectData.length = 100 + " km";
    objectData.provinces = ["Cà Mau", "Kiên Giang"];
    drawGeometry(
       "polyline",
       rQL63,
       simpleLineSymbol,
       handleContentPopup("Quốc lộ 63", handleContent(objectData))
    );
 
    /* ------------ QL61B ------------------ */
    objectData.length = 41 + " km";
    objectData.provinces = ["Cần Thơ", "Hậu Giang"];
    drawGeometry(
       "polyline",
       rQL61B,
       simpleLineSymbol,
       handleContentPopup("Quốc lộ 61B", handleContent(objectData))
    );
 
   /* ------------ QL91 ------------------ */
    objectData.length = 142 + " km";
    objectData.provinces = ["Cần Thơ", "An Giang"];
    drawGeometry(
       "polyline",
       rQL91,
       simpleLineSymbol,
       handleContentPopup("Quốc lộ 91", handleContent(objectData))
    );
 
    /* ------------ QL80 ------------------ */
    objectData.length = 215 + " km";
    objectData.provinces = ["Vĩnh Long", "Đồng Tháp", "An Giang", "Cần Thơ", "Kiên Giang"];
    drawGeometry(
       "polyline",
       rQL80,
       simpleLineSymbol,
       handleContentPopup("Quốc lộ 80", handleContent(objectData))
    );
 
    /*
     * Draw geometry
     *
     * @var type
     * @var arrPoint = []
     * @var simpleMarkerSymbol = {}
     * @var attributesPoint = {}
     */
    function drawGeometry(
       type,
       arrPoint,
       simpleMarkerSymbol,
       attributesPoint = {}
    ) {
       let geometry = {
          type: type,
       };
 
       switch (type) {
          case "point":
             geometry = {
                ...geometry,
                longitude: arrPoint[0],
                latitude: arrPoint[1],
             };
             break;
 
          case "polyline":
             geometry = {
                ...geometry,
                paths: arrPoint
             };
             break;
 
          case "polygon":
             geometry = {
                ...geometry,
                rings: arrPoint
             };
             break;
       }
 
       const popupTemplatePoint = {
          title: "{name}",
          content: "{content}",
       };
 
       var arrParams = [
          geometry,
          simpleMarkerSymbol,
          attributesPoint,
          popupTemplatePoint,
       ];
       handleAddGraphicLayer(arrParams);
    }
 
    /*
     * Handle add graphic layer
     *
     * @var arrParams = []
     */
    function handleAddGraphicLayer(arrParams) {
       const pointGraphic = new Graphic({
          geometry: arrParams[0],
          symbol: arrParams[1],
 
          attributes: arrParams[2],
          popupTemplate: arrParams[3],
       });
       graphicsLayer.add(pointGraphic);
    }
 
    /*
     * Handle content popup
     *
     * @var name
     * @var content
     */
    function handleContentPopup(name, content = "") {
       return {
          name,
          content,
       };
    }
 
    /*
     * Handle simple marker symbol - for picture
     *
     * @var type
     */
    function handleSimpleMarkerSymbolPicture(type) {
       return {
          type: "picture-marker",
          url: `./res/${type}.png`,
          width: "30px",
          height: "30px",
       };
    }
 
    function handleFillColor(color) {
       switch (color) {
          case "Blue":
             return {
                type: "simple-fill",
                   color: [142, 217, 248, 0.5],
                   outline: {
                      color: [142, 217, 248],
                      width: 0,
                   },
             };
          case "Pale-Blue":
             return {
                type: "simple-fill",
                   color: [203, 230, 192, 0.5],
                   outline: {
                      color: [203, 230, 192],
                      width: 0,
                   },
             };
          case "Yellow":
             return {
                type: "simple-fill",
                   color: [224, 189, 1, 0.5],
                   outline: {
                      color: [224, 189, 1],
                      width: 0,
                   },
             };
          case "Pale-Yellow":
             return {
                type: "simple-fill",
                   color: [244, 244, 174, 0.5],
                   outline: {
                      color: [244, 244, 174],
                      width: 0,
                   },
             };
          case "Dark-Yellow":
             return {
                type: "simple-fill",
                   color: [253, 250, 54, 0.5],
                   outline: {
                      color: [253, 250, 54],
                      width: 0,
                   },
             };
          case "Pale-White":
             return {
                type: "simple-fill",
                   color: [236, 201, 203, 0.5],
                   outline: {
                      color: [236, 201, 203],
                      width: 0,
                   },
             };
          case "Brown":
             return {
                type: "simple-fill",
                   color: [194, 135, 91, 0.5],
                   outline: {
                      color: [194, 135, 91],
                      width: 0,
                   },
             };
          case "Dark-Brown":
             return {
                type: "simple-fill",
                   color: [168, 140, 105, 0.5],
                   outline: {
                      color: [168, 140, 105],
                      width: 0,
                   },
             };
          case "Green":
             return {
                type: "simple-fill",
                   color: [204, 205, 105, 0.5],
                   outline: {
                      color: [204, 205, 105],
                      width: 0,
                   },
             };
          case "Pale-Green":
             return {
                type: "simple-fill",
                   color: [155, 206, 105, 0.5],
                   outline: {
                      color: [155, 206, 105],
                      width: 0,
                   },
             };
          case "Dark-Green":
             return {
                type: "simple-fill",
                   color: [151, 233, 126, 0.5],
                   outline: {
                      color: [151, 233, 126],
                      width: 0,
                   },
             };
 
          case "Pink":
             return {
                type: "simple-fill",
                   color: [246, 171, 203, 0.5],
                   outline: {
                      color: [246, 171, 203],
                      width: 0,
                   },
             };
          case "Pale-Pink":
             return {
                type: "simple-fill",
                   color: [246, 211, 200, 0.5],
                   outline: {
                      color: [246, 211, 200],
                      width: 0,
                   },
             };
          case "Dark-Pink":
             return {
                type: "simple-fill",
                   color: [232, 120, 140, 0.5],
                   outline: {
                      color: [232, 120, 140],
                      width: 0,
                   },
             };
          case "Violet":
             return {
                type: "simple-fill",
                   color: [172, 164, 183, 0.5],
                   outline: {
                      color: [172, 164, 183],
                      width: 0,
                   },
             };
          case "Dark-Blue":
             return {
                type: "simple-fill",
                   color: [100, 151, 202, 0.5],
                   outline: {
                      color: [100, 151, 202],
                      width: 0,
                   },
             };
          case "Gray":
             return {
                type: "simple-fill",
                   color: [193, 181, 155, 0.5],
                   outline: {
                      color: [193, 181, 155],
                      width: 0,
                   },
             };
          case "Orange":
             return {
                type: "simple-fill",
                   color: [249, 211, 158, 0.5],
                   outline: {
                      color: [249, 211, 158],
                      width: 0,
                   },
             };
          case "Red":
             return {
                type: "simple-fill",
                   color: [238, 28, 40, 0.5],
                   outline: {
                      color: [238, 28, 40],
                      width: 0,
                   },
             };

       }
    }
    /*
     * handle content for content popup
     *
     * @var objectData = {}
     */
    function handleContent(objectData) {
       var str = "";
       for (const key in objectData) {
          if (Object.hasOwnProperty.call(objectData, key)) {
             const value = objectData[key];
             str += `
                ${key.charAt(0).toUpperCase() + key.slice(1)}: ${value}
             `;
          }
       }
       return str;
    }
 });