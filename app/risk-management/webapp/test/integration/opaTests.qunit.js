sap.ui.require(
    [
        'sap/fe/test/JourneyRunner',
        'riskmanagement/test/integration/FirstJourney',
		'riskmanagement/test/integration/pages/RisksList',
		'riskmanagement/test/integration/pages/RisksObjectPage'
    ],
    function(JourneyRunner, opaJourney, RisksList, RisksObjectPage) {
        'use strict';
        var JourneyRunner = new JourneyRunner({
            // start test/flpSandbox.html?sap-ui-xx-viewCache=false#riskmanagement-tile in web folder
            launchUrl: sap.ui.require.toUrl('riskmanagement') + '/test/flpSandbox.html?sap-ui-xx-viewCache=false#riskmanagement-tile'
        });

       
        JourneyRunner.run(
            {
                pages: { 
					onTheRisksList: RisksList,
					onTheRisksObjectPage: RisksObjectPage
                }
            },
            opaJourney.run
        );
    }
);