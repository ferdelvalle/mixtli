
var spreadsheetId17 = "1rUAMPGBYEk6IFiLYiqi_CJarkJ1MqxL1ckMbbadJjXY",
  url = "https://spreadsheets.google.com/feeds/list/" +
  spreadsheetId17 +
  "/od6/public/basic?alt=json";
var titulo17 = "17 Does your organization currently use any cloud computing service , or does it have plans to use any within 2021?";
var rendering17 = 'chart-container-17';
var xtitleName17 = "";

$.get({
  url: url,
  success: function(response) {
    var data = response.feed.entry,
      len = data.length,
      i = 0,
      parsedData = [];

    for (i = 0; i < len; i++) {
      parsedData.push({
        label: data[i].title.$t,
        value: data[i].content.$t.replace('incidencia: ', '')
      });
    }

    FusionCharts.ready(function() {
      var chart = new FusionCharts({
          type: 'bar2d',
          renderAt: rendering17,
          width: '100%',
          height: '400',
          dataFormat: 'json',
          dataSource: {
            "chart": {
              // caption configuration
              "caption": titulo17,
              "captionFontBold": "0",
              "captionFontSize": "20",

              // x and y axes configuration
              "xAxisName": "",
              "xAxisNameFontSize": "18",
              "xAxisNameFontBold": "0",
              "yAxisName": xtitleName17,
              "yAxisNameFontSize": "18",
              "yAxisNameFontBold": "0",
              "showLimits": "0",

              // general chart configuration
              "baseFont": "Open Sans",
              "paletteColors": "#00b4ff",
              "plotFillAlpha": "70",
              "usePlotGradientColor": "0",
              "numberPrefix": "",
              "numberSuffix": "",
              "bgcolor": "F5F5F5",
              "bgalpha": "95",
              "canvasbgalpha": "0",
              "basefontcolor": "#00b4ff",
              "showAlternateHGridColor": "0",
              "divlinealpha": "50",
              "divlinedashed": "0",
              "rotateyaxisname": "1",
              "canvasbordercolor": "#00b4ff",
              "canvasborderthickness": "0",
              "canvasborderalpha": "00",
              "showValues": "1",
              "plotSpacePercent": "12",
              "showPlotBorder": "1",
              "plotBorderColor": "#00b4ff",
              "plotBorderThickness": "1",
              "labelFontSize": "15",
              "outCnvBaseFontSize": "15",

              // tooltip configuration
              "toolTipBgColor": "#FFF",
              "numberSuffix": "",
              "toolTipPadding": "12",
              "toolTipBorderRadius": "3",
              "toolTipBorderThickness": "1",
              "toolTipBorderColor": "#ccc",
              "toolTipBgAlpha": "60",
              "plotToolText": "<div class='plotToolText'>$label: $dataValue</div>"
            },

            "data": parsedData
          }
        })
        .render();
    });
  }
});