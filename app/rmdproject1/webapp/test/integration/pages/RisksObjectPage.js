sap.ui.define(['sap/fe/test/ObjectPage'], function(ObjectPage) {
    'use strict';

    var CustomPageDefinitions = {
        actions: {},
        assertions: {}
    };

    return new ObjectPage(
        {
            appId: 'rmdproject1',
            componentId: 'RisksObjectPage',
            contextPath: '/Mitigations/risks'
        },
        CustomPageDefinitions
    );
});