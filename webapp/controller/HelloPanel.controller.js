sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/ui/model/json/JSONModel",
	"../model/formatter",
	"sap/ui/model/Filter",
	"sap/ui/model/FilterOperator"
], function(Controller, JSONModel, formatter, Filter, FilterOperator) {
	"use strict";

	return Controller.extend("test_task.controller.HelloPanel", {
	onInit: function() {

			var sServiceUrl =
				"https://api.openweathermap.org/data/2.5/onecall?lat=61.25&lon=73.4167&appid=3e7d6dd14d9c226935dac9e6d4a2933b&cnt=5&units=metric&sap-language=RU";
			var oModel = new JSONModel();
			oModel.loadData(sServiceUrl, {}, false, "GET");
			var tempEve = 0,
				pressure,
				listPressure= [];

			for (var i = 0; i < 5; i++) {
				tempEve = tempEve + oModel.oData.daily[i].temp.eve;
				listPressure[i] = oModel.oData.daily[i].pressure;

			}
			tempEve = tempEve / 5;
			this.byId("eve").setText('Средняя вечерняя температура за 5 дней: ' +tempEve);
			pressure=listPressure.sort()[0];
			this.byId("pressure").setText('Минимальное давление за 5 дней: ' +pressure);
			
			
		}
	});

});