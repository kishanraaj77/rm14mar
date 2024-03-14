sap.ui.require(
    [
        'sap/fe/test/JourneyRunner',
        'rmdproject1/test/integration/FirstJourney',
		'rmdproject1/test/integration/pages/MitigationsList',
		'rmdproject1/test/integration/pages/MitigationsObjectPage',
		'rmdproject1/test/integration/pages/RisksObjectPage'
    ],
    function(JourneyRunner, opaJourney, MitigationsList, MitigationsObjectPage, RisksObjectPage) {
        'use strict';
        var JourneyRunner = new JourneyRunner({
            // start index.html in web folder
            launchUrl: sap.ui.require.toUrl('rmdproject1') + '/index.html'
        });

       
        JourneyRunner.run(
            {
                pages: { 
					onTheMitigationsList: MitigationsList,
					onTheMitigationsObjectPage: MitigationsObjectPage,
					onTheRisksObjectPage: RisksObjectPage
                }
            },
            opaJourney.run
        );
    }
);