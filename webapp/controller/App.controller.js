sap.ui.define([
    "sap/ui/core/mvc/Controller"
], (Controller) => {
    "use strict";

    return Controller.extend("com.sap.mybankdetails.controller.App", {
        onInit: function () {


             //Global JSON Model 
             this.setGlobalDataModel();
             var oJsonModel = new sap.ui.model.json.JSONModel({
                 profile: sap.ui.require.toUrl("com/sap/mybankdetails/images/profile.jpg")
             });
             this.getView().setModel(oJsonModel);

            // alert("This is onInit Function Block")
            // debugger
            
            //Checking browser lang and setting the global resource model
            var appLang;
            if (navigator.language == "es")
                appLang = "i18n_es"
            else if (navigator.language == "en")
                appLang = "i18n"
            else
                appLang = "i18n"

            var i18nModel = this.getOwnerComponent().getModel(appLang)
            this.getOwnerComponent().setModel(i18nModel, "i18n")
        },

        onOpenBankDetails: function () {
            //create dialog lazily
            if (!this.moreBankDetails) {
                this.moreBankDetails = this.loadFragment(
                    { name: "com.sap.mybankdetails.view.fragments.MoreDetails" }
                );
            }
            this.moreBankDetails.then(
                function (oDialog) {
                    oDialog.open();
                }
            );
        },

        onCloseBankDetails: function () {
            this.byId("moreBankDetails").close();
        },

         // Set Global Data Model
         setGlobalDataModel: function(){
            let bankDetailsModel = this.getOwnerComponent().getModel("oBankDetails");
            this.getView().setModel(bankDetailsModel);
            }


    });
});