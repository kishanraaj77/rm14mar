sap.ui.define(['sap/fe/test/ObjectPage'], function(ObjectPage) {
    'use strict';

    var CustomPageDefinitions = {
        actions: {},
        assertions: {}
    };

    return new ObjectPage(
        {
            appId: 'rmdproject1',
            componentId: 'MitigationsObjectPage',
            contextPath: '/Mitigations'
        },
        CustomPageDefinitions
    );
});