# ![LOGO](logo.png) iotDpsClient **flow**ground Connector

## Description

A generated **flow**ground connector for the iotDpsClient API (version 2017-11-15).

Generated from: https://api.apis.guru/v2/specs/azure.com/provisioningservices-iotdps/2017-11-15/swagger.json<br/>
Generated at: 2019-06-11T18:14:09+03:00

## API Description

API for using the Azure IoT Hub Device Provisioning Service features.

## Authorization

Supported authorization schemes:
- OAuth2

For OAuth 2.0 you need to specify OAuth Client credentials as environment variables in the connector repository:
* `OAUTH_CLIENT_ID` - your OAuth client id
* `OAUTH_CLIENT_SECRET` - your OAuth client secret

## Actions

### Lists all of the available Microsoft.Devices REST API operations.

*Tags:* `Operations`

#### Input Parameters
* `api-version` - _required_ - The version of the API.

### Check if a provisioning service name is available.

> Check if a provisioning service name is available. This will validate if the name is syntactically valid and if the name is usable

*Tags:* `POST`

#### Input Parameters
* `subscriptionId` - _required_ - The subscription identifier.
* `api-version` - _required_ - The version of the API.

### Get all the provisioning services in a subscription.

> List all the provisioning services for a given subscription id.

*Tags:* `GET`

#### Input Parameters
* `subscriptionId` - _required_ - The subscription identifier.
* `api-version` - _required_ - The version of the API.

### Get a list of all provisioning services in the given resource group.

*Tags:* `GET`

#### Input Parameters
* `subscriptionId` - _required_ - The subscription identifier.
* `resourceGroupName` - _required_ - Resource group identifier.
* `api-version` - _required_ - The version of the API.

### Delete the Provisioning Service

> Deletes the Provisioning Service.

*Tags:* `DELETE`

#### Input Parameters
* `provisioningServiceName` - _required_ - Name of provisioning service to delete.
* `subscriptionId` - _required_ - The subscription identifier.
* `resourceGroupName` - _required_ - Resource group identifier.
* `api-version` - _required_ - The version of the API.

### Get the non-security related metadata of the provisioning service.

> Get the metadata of the provisioning service without SAS keys.

*Tags:* `GET`

#### Input Parameters
* `provisioningServiceName` - _required_ - Name of the provisioning service to retrieve.
* `subscriptionId` - _required_ - The subscription identifier.
* `resourceGroupName` - _required_ - Resource group name.
* `api-version` - _required_ - The version of the API.

### Update an existing provisioning service's tags.

> Update an existing provisioning service's tags. to update other fields use the CreateOrUpdate method

*Tags:* `PATCH`

#### Input Parameters
* `subscriptionId` - _required_ - The subscription identifier.
* `resourceGroupName` - _required_ - Resource group identifier.
* `provisioningServiceName` - _required_ - Name of provisioning service to create or update.
* `api-version` - _required_ - The version of the API.

### Create or update the metadata of the provisioning service.

> Create or update the metadata of the provisioning service. The usual pattern to modify a property is to retrieve the provisioning service metadata and security metadata, and then combine them with the modified values in a new body to update the provisioning service.

*Tags:* `PUT`

#### Input Parameters
* `subscriptionId` - _required_ - The subscription identifier.
* `resourceGroupName` - _required_ - Resource group identifier.
* `provisioningServiceName` - _required_ - Name of provisioning service to create or update.
* `api-version` - _required_ - The version of the API.

### Get all the certificates tied to the provisioning service.

*Tags:* `GET`

#### Input Parameters
* `subscriptionId` - _required_ - The subscription identifier.
* `resourceGroupName` - _required_ - Name of resource group.
* `provisioningServiceName` - _required_ - Name of provisioning service to retrieve certificates for.
* `api-version` - _required_ - The version of the API.

### Delete the Provisioning Service Certificate.

> Deletes the specified certificate assosciated with the Provisioning Service

*Tags:* `DELETE`

#### Input Parameters
* `subscriptionId` - _required_ - The subscription identifier.
* `resourceGroupName` - _required_ - Resource group identifier.
* `If-Match` - _required_ - ETag of the certificate
* `provisioningServiceName` - _required_ - The name of the provisioning service.
* `certificateName` - _required_ - This is a mandatory field, and is the logical name of the certificate that the provisioning service will access by.
* `certificate.name` - _optional_ - This is optional, and it is the Common Name of the certificate.
* `certificate.rawBytes` - _optional_ - Raw data within the certificate.
* `certificate.isVerified` - _optional_ - Indicates if certificate has been verified by owner of the private key.
* `certificate.purpose` - _optional_ - A description that mentions the purpose of the certificate.
    Possible values: clientAuthentication, serverAuthentication.
* `certificate.created` - _optional_ - Time the certificate is created.
* `certificate.lastUpdated` - _optional_ - Time the certificate is last updated.
* `certificate.hasPrivateKey` - _optional_ - Indicates if the certificate contains a private key.
* `certificate.nonce` - _optional_ - Random number generated to indicate Proof of Possession.
* `api-version` - _required_ - The version of the API.

### Get the certificate from the provisioning service.

*Tags:* `GET`

#### Input Parameters
* `certificateName` - _required_ - Name of the certificate to retrieve.
* `subscriptionId` - _required_ - The subscription identifier.
* `resourceGroupName` - _required_ - Resource group identifier.
* `provisioningServiceName` - _required_ - Name of the provisioning service the certificate is associated with.
* `If-Match` - _optional_ - ETag of the certificate.
* `api-version` - _required_ - The version of the API.

### Upload the certificate to the provisioning service.

> Add new certificate or update an existing certificate.

*Tags:* `PUT`

#### Input Parameters
* `api-version` - _required_ - The version of the API.
* `subscriptionId` - _required_ - The subscription identifier.
* `resourceGroupName` - _required_ - Resource group identifier.
* `provisioningServiceName` - _required_ - The name of the provisioning service.
* `certificateName` - _required_ - The name of the certificate create or update.
* `If-Match` - _optional_ - ETag of the certificate. This is required to update an existing certificate, and ignored while creating a brand new certificate.

### Generate verification code for Proof of Possession.

*Tags:* `POST`

#### Input Parameters
* `certificateName` - _required_ - The mandatory logical name of the certificate, that the provisioning service uses to access.
* `If-Match` - _required_ - ETag of the certificate. This is required to update an existing certificate, and ignored while creating a brand new certificate.
* `subscriptionId` - _required_ - The subscription identifier.
* `resourceGroupName` - _required_ - name of resource group.
* `provisioningServiceName` - _required_ - Name of provisioning service.
* `certificate.name` - _optional_ - Common Name for the certificate.
* `certificate.rawBytes` - _optional_ - Raw data of certificate.
* `certificate.isVerified` - _optional_ - Indicates if the certificate has been verified by owner of the private key.
* `certificate.purpose` - _optional_ - Description mentioning the purpose of the certificate.
    Possible values: clientAuthentication, serverAuthentication.
* `certificate.created` - _optional_ - Certificate creation time.
* `certificate.lastUpdated` - _optional_ - Certificate last updated time.
* `certificate.hasPrivateKey` - _optional_ - Indicates if the certificate contains private key.
* `certificate.nonce` - _optional_ - Random number generated to indicate Proof of Possession.
* `api-version` - _required_ - The version of the API.

### Verify certificate's private key possession.

> Verifies the certificate's private key possession by providing the leaf cert issued by the verifying pre uploaded certificate.

*Tags:* `POST`

#### Input Parameters
* `certificateName` - _required_ - The mandatory logical name of the certificate, that the provisioning service uses to access.
* `If-Match` - _required_ - ETag of the certificate.
* `subscriptionId` - _required_ - The subscription identifier.
* `resourceGroupName` - _required_ - Resource group name.
* `provisioningServiceName` - _required_ - Provisioning service name.
* `certificate.name` - _optional_ - Common Name for the certificate.
* `certificate.rawBytes` - _optional_ - Raw data of certificate.
* `certificate.isVerified` - _optional_ - Indicates if the certificate has been verified by owner of the private key.
* `certificate.purpose` - _optional_ - Describe the purpose of the certificate.
    Possible values: clientAuthentication, serverAuthentication.
* `certificate.created` - _optional_ - Certificate creation time.
* `certificate.lastUpdated` - _optional_ - Certificate last updated time.
* `certificate.hasPrivateKey` - _optional_ - Indicates if the certificate contains private key.
* `certificate.nonce` - _optional_ - Random number generated to indicate Proof of Possession.
* `api-version` - _required_ - The version of the API.

### Get a shared access policy by name from a provisioning service.

> List primary and secondary keys for a specific key name

*Tags:* `POST`

#### Input Parameters
* `provisioningServiceName` - _required_ - Name of the provisioning service.
* `keyName` - _required_ - Logical key name to get key-values for.
* `subscriptionId` - _required_ - The subscription identifier.
* `resourceGroupName` - _required_ - The name of the resource group that contains the provisioning service.
* `api-version` - _required_ - The version of the API.

### Get the security metadata for a provisioning service.

> List the primary and secondary keys for a provisioning service.

*Tags:* `POST`

#### Input Parameters
* `provisioningServiceName` - _required_ - The provisioning service name to get the shared access keys for.
* `subscriptionId` - _required_ - The subscription identifier.
* `resourceGroupName` - _required_ - resource group name
* `api-version` - _required_ - The version of the API.

### Gets the status of a long running operation, such as create, update or delete a provisioning service.

*Tags:* `GET`

#### Input Parameters
* `operationId` - _required_ - Operation id corresponding to long running operation. Use this to poll for the status.
* `subscriptionId` - _required_ - The subscription identifier.
* `resourceGroupName` - _required_ - Resource group identifier.
* `provisioningServiceName` - _required_ - Name of provisioning service that the operation is running on.
* `asyncinfo` - _required_ - Async header used to poll on the status of the operation, obtained while creating the long running operation.
* `api-version` - _required_ - The version of the API.

### Get the list of valid SKUs for a provisioning service.

> Gets the list of valid SKUs and tiers for a provisioning service.

*Tags:* `GET`

#### Input Parameters
* `provisioningServiceName` - _required_ - Name of provisioning service.
* `subscriptionId` - _required_ - The subscription identifier.
* `resourceGroupName` - _required_ - Name of resource group.
* `api-version` - _required_ - The version of the API.

## License

**flow**ground :- Telekom iPaaS / azure-com-provisioningservices-iotdps-connector<br/>
Copyright © 2019, [Deutsche Telekom AG](https://www.telekom.de)<br/>
contact: flowground@telekom.de

All files of this connector are licensed under the Apache 2.0 License. For details
see the file LICENSE on the toplevel directory.
