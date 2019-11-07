sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"Demo/Table/formatters/DOJ"
], function (Controller,DOJ) {
	"use strict";

	return Controller.extend("Demo.Table.controller.View1", {
		f1:DOJ,
		onInit: function () {
			var oTable = this.getView().byId("xyz");
			var oModel = new sap.ui.model.json.JSONModel();
			oModel.loadData("model/Employee.json");
			oTable.setModel(oModel);
			
		}
		
	});
});