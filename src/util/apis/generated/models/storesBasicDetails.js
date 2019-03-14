/*
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

'use strict';

/**
 * Class representing a StoresBasicDetails.
 */
class StoresBasicDetails {
  /**
   * Create a StoresBasicDetails.
   * @property {string} [id] ID identifying a unique distribution store.
   * @property {string} [name] A name identifying a unique distribution store.
   * @property {string} [type] type of the distribution store currently stores
   * type can be intune or googleplay. Possible values include: 'intune',
   * 'googleplay'
   * @property {string} [publishingStatus] publishing status of the release in
   * the store.
   */
  constructor() {
  }

  /**
   * Defines the metadata of StoresBasicDetails
   *
   * @returns {object} metadata of StoresBasicDetails
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'StoresBasicDetails',
      type: {
        name: 'Composite',
        className: 'StoresBasicDetails',
        modelProperties: {
          id: {
            required: false,
            serializedName: 'id',
            type: {
              name: 'String'
            }
          },
          name: {
            required: false,
            serializedName: 'name',
            type: {
              name: 'String'
            }
          },
          type: {
            required: false,
            serializedName: 'type',
            type: {
              name: 'String'
            }
          },
          publishingStatus: {
            required: false,
            serializedName: 'publishing_status',
            type: {
              name: 'String'
            }
          }
        }
      }
    };
  }
}

module.exports = StoresBasicDetails;
