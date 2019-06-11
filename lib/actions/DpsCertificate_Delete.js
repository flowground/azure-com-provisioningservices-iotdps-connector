/**
 * Auto-generated action file for "iotDpsClient (provisioningservices-iotdps)" API.
 *
 * Generated at: 2019-06-11T15:14:09.606Z
 * Mass generator version: 1.1.0
 *
 * flowground :- Telekom iPaaS / azure-com-provisioningservices-iotdps-connector
 * Copyright © 2019, Deutsche Telekom AG
 * contact: flowground@telekom.de
 *
 * All files of this connector are licensed under the Apache 2.0 License. For details
 * see the file LICENSE on the toplevel directory.
 *
 *
 * Operation: 'DpsCertificate_Delete'
 * Endpoint Path: '/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Devices/provisioningServices/{provisioningServiceName}/certificates/{certificateName}'
 * Method: 'delete'
 *
 */

const Swagger = require('swagger-client');
const processWrapper = require('../services/process-wrapper');
const spec = require('../spec.json');

// this wrapers offers a simplified emitData(data) function
module.exports.process = processWrapper(processAction);

// parameter names for this call
const PARAMETERS = [
    "subscriptionId",
    "resourceGroupName",
    "If-Match",
    "provisioningServiceName",
    "certificateName",
    "certificate.name",
    "certificate.rawBytes",
    "certificate.isVerified",
    "certificate.purpose",
    "certificate.created",
    "certificate.lastUpdated",
    "certificate.hasPrivateKey",
    "certificate.nonce",
    "api-version"
];

// mappings from connector field names to API field names
const FIELD_MAP = {
    "subscriptionId": "subscriptionId",
    "resourceGroupName": "resourceGroupName",
    "If_Match": "If-Match",
    "provisioningServiceName": "provisioningServiceName",
    "certificateName": "certificateName",
    "certificate_name": "certificate.name",
    "certificate_rawBytes": "certificate.rawBytes",
    "certificate_isVerified": "certificate.isVerified",
    "certificate_purpose": "certificate.purpose",
    "certificate_created": "certificate.created",
    "certificate_lastUpdated": "certificate.lastUpdated",
    "certificate_hasPrivateKey": "certificate.hasPrivateKey",
    "certificate_nonce": "certificate.nonce",
    "api_version": "api-version"
};

function processAction(msg, cfg) {
    var isVerbose = process.env.debug || cfg.verbose;

    if (isVerbose) {
        console.log(`---MSG: ${JSON.stringify(msg)}`);
        console.log(`---CFG: ${JSON.stringify(cfg)}`);
        console.log(`---ENV: ${JSON.stringify(process.env)}`);
    }

    const contentType = undefined;

    const body = msg.body;
    mapFieldNames(body);

    let parameters = {};
    for(let param of PARAMETERS) {
        parameters[param] = body[param];
    }

    // credentials for this operation
    let securities = {};
    securities['azure_auth'] = {token: cfg['auth_azure_auth']};

    let callParams = {
        spec: spec,
        operationId: 'DpsCertificate_Delete',
        pathName: '/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Devices/provisioningServices/{provisioningServiceName}/certificates/{certificateName}',
        method: 'delete',
        parameters: parameters,
        requestContentType: contentType,
        requestBody: body.requestBody,
        securities: {authorized: securities},
        server: spec.servers[cfg.server] || cfg.otherServer,
    };

    if (isVerbose) {
        let out = Object.assign({}, callParams);
        out.spec = '[omitted]';
        console.log(`--SWAGGER CALL: ${JSON.stringify(out)}`);
    }

    // Call operation via Swagger client
    return Swagger.execute(callParams).then(data => {
        // emit a single message with data
        this.emitData(data);

        // if the response contains an array of entities, you can emit them one by one:

        // data.obj.someItems.forEach((item) => {
        //     this.emitData(item);
        // }
    });
}

function mapFieldNames(obj) {
    if(Array.isArray(obj)) {
        obj.forEach(mapFieldNames);
    }
    else if(typeof obj === 'object' && obj) {
        Object.keys(obj).forEach(key => {
            mapFieldNames(obj[key]);

            let goodKey = FIELD_MAP[key];
            if(goodKey && goodKey !== key) {
                obj[goodKey] = obj[key];
                delete obj[key];
            }
        });
    }
}