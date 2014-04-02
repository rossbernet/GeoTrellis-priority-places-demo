requirejs.config({
    baseUrl: 'js/lib',
    paths: {
        json: '../../json',
        app: '../app'
    }
});

requirejs(
  [
    'app/model',
    'app/tool-legend',
    'app/factors',
    'app/map',
    'app/parcel-details',
    'app/legend',
    'app/weighted-overlay',
    'app/color-ramps',
    'app/find-address',
    'app/report',
  ], 
  function(model, toolLegend, factors, map, parcelDetails, legend, weightedOverlay,colorRamps,findAddress,report){
    weightedOverlay.init();
    colorRamps.init();
    findAddress.bind('.tool-address-search');
    report.init();
    model.notifyChange();
  }
);
