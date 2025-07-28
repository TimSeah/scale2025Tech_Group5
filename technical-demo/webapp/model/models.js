/**
 * Data Models for SkyLink Airlines Demo
 * S.C.A.L.E 2025 Technical Demo
 */
sap.ui.define([
    "sap/ui/model/json/JSONModel",
    "sap/ui/Device"
], function (JSONModel, Device) {
    "use strict";

    return {
        /**
         * Create device model
         */
        createDeviceModel: function () {
            var oModel = new JSONModel(Device);
            oModel.setDefaultBindingMode("OneWay");
            return oModel;
        },

        /**
         * Create model for Challenge 1: Integrated Data Systems
         */
        createIntegratedDataModel: function() {
            // TODO: Create model with sample data for:
            // - Flight bookings
            // - Flight schedules  
            // - Aircraft maintenance records
            // - Cross-functional KPIs
            
            var oData = {
                bookings: [
                    // TODO: Sample booking data
                ],
                schedules: [
                    // TODO: Sample schedule data
                ],
                maintenance: [
                    // TODO: Sample maintenance data
                ],
                kpis: {
                    // TODO: Integrated KPI data
                }
            };
            
            return new JSONModel(oData);
        },

        /**
         * Create model for Challenge 2: Demand Forecasting & Pricing
         */
        createForecastingModel: function() {
            // TODO: Create model with sample data for:
            // - Historical demand data
            // - Forecast predictions
            // - Dynamic pricing rules
            // - Route performance analytics
            
            var oData = {
                demandHistory: [
                    // TODO: Historical demand data
                ],
                forecasts: [
                    // TODO: AI-generated forecasts
                ],
                pricing: {
                    // TODO: Dynamic pricing data
                },
                routes: [
                    // TODO: Route performance data
                ]
            };
            
            return new JSONModel(oData);
        },

        /**
         * Create model for Challenge 3: Predictive Maintenance
         */
        createMaintenanceModel: function() {
            // TODO: Create model with sample data for:
            // - Aircraft fleet status
            // - Maintenance schedules
            // - Predictive alerts
            // - Performance metrics
            
            var oData = {
                fleet: [
                    // TODO: Aircraft fleet data
                ],
                schedules: [
                    // TODO: Maintenance schedules
                ],
                alerts: [
                    // TODO: Predictive maintenance alerts
                ],
                metrics: {
                    // TODO: Maintenance performance metrics
                }
            };
            
            return new JSONModel(oData);
        }
    };
});
