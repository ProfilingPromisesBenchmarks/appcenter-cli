/*
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

'use strict';

/**
 * Class representing a Release.
 */
class Release {
  /**
   * Create a Release.
   * @property {string} release Release Id.
   */
  constructor() {
  }

  /**
   * Defines the metadata of Release
   *
   * @returns {object} metadata of Release
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'Release',
      type: {
        name: 'Composite',
        className: 'Release',
        modelProperties: {
          release: {
            required: true,
            serializedName: 'release',
            type: {
              name: 'String'
            }
          }
        }
      }
    };
  }
}

module.exports = Release;
