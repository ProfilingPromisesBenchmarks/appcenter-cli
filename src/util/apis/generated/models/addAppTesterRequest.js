/*
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

'use strict';

/**
 * Class representing a AddAppTesterRequest.
 */
class AddAppTesterRequest {
  /**
   * Create a AddAppTesterRequest.
   * @property {uuid} userId The user ID of the tester that needs to be added
   * @property {number} releaseId The ID of the release the user was added to
   */
  constructor() {
  }

  /**
   * Defines the metadata of AddAppTesterRequest
   *
   * @returns {object} metadata of AddAppTesterRequest
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'AddAppTesterRequest',
      type: {
        name: 'Composite',
        className: 'AddAppTesterRequest',
        modelProperties: {
          userId: {
            required: true,
            serializedName: 'user_id',
            type: {
              name: 'String'
            }
          },
          releaseId: {
            required: true,
            serializedName: 'release_id',
            type: {
              name: 'Number'
            }
          }
        }
      }
    };
  }
}

module.exports = AddAppTesterRequest;
