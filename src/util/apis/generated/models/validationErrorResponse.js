/*
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

'use strict';

/**
 * Class representing a ValidationErrorResponse.
 */
class ValidationErrorResponse {
  /**
   * Create a ValidationErrorResponse.
   * @property {string} id
   * @property {string} code
   * @property {string} message
   */
  constructor() {
  }

  /**
   * Defines the metadata of ValidationErrorResponse
   *
   * @returns {object} metadata of ValidationErrorResponse
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'ValidationErrorResponse',
      type: {
        name: 'Composite',
        className: 'ValidationErrorResponse',
        modelProperties: {
          id: {
            required: true,
            serializedName: 'id',
            type: {
              name: 'String'
            }
          },
          code: {
            required: true,
            serializedName: 'code',
            type: {
              name: 'String'
            }
          },
          message: {
            required: true,
            serializedName: 'message',
            type: {
              name: 'String'
            }
          }
        }
      }
    };
  }
}

module.exports = ValidationErrorResponse;
