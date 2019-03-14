/*
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

'use strict';

/**
 * Class representing a SubmitDsrOperationRequest.
 */
class SubmitDsrOperationRequest {
  /**
   * Create a SubmitDsrOperationRequest.
   * @property {string} [request] Possible values include: 'Delete', 'Purge',
   * 'UndoDelete', 'Export'
   * @property {string} [accountId]
   * @property {string} [appId]
   * @property {string} [operationId] The DSR operation ID provided by the GDPR
   * coordinator. Used for tracking only.
   * @property {string} [requestId] Request ID provided by the GDPR
   * coordinator. Used for tracking.
   */
  constructor() {
  }

  /**
   * Defines the metadata of SubmitDsrOperationRequest
   *
   * @returns {object} metadata of SubmitDsrOperationRequest
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'SubmitDsrOperationRequest',
      type: {
        name: 'Composite',
        className: 'SubmitDsrOperationRequest',
        modelProperties: {
          request: {
            required: false,
            serializedName: 'request',
            type: {
              name: 'String'
            }
          },
          accountId: {
            required: false,
            serializedName: 'accountId',
            type: {
              name: 'String'
            }
          },
          appId: {
            required: false,
            serializedName: 'appId',
            type: {
              name: 'String'
            }
          },
          operationId: {
            required: false,
            serializedName: 'operationId',
            type: {
              name: 'String'
            }
          },
          requestId: {
            required: false,
            serializedName: 'requestId',
            type: {
              name: 'String'
            }
          }
        }
      }
    };
  }
}

module.exports = SubmitDsrOperationRequest;
