sap.ui.define(['sap/fe/test/ListReport'], function(ListReport) {
    'use strict';

    var CustomPageDefinitions = {
        actions: {},
        assertions: {}
    };

    return new ListReport(
        {
            appId: 'rmdproject1',
            componentId: 'MitigationsList',
            contextPath: '/Mitigations'
        },
        CustomPageDefinitions
    );
});