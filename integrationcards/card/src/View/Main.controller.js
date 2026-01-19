sap.ui.define([
	"sap/ui/core/mvc/Controller"
], function (Controller) {
	"use strict";

	return Controller.extend("sap.workzone.cpkg.card.sample.View.Main", {
		onInit: function () {
			// this.getView().byId("img").setSrc(sap.ui.require.toUrl("my/component/sample/cardContent/Image.png"));
		}
	});
});