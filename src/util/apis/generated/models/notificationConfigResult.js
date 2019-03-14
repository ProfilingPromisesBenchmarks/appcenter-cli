/*
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

'use strict';

/**
 * Generic notification configuration result.
 *
 */
class NotificationConfigResult {
  /**
   * Create a NotificationConfigResult.
   * @property {string} type Polymorphic Discriminator
   */
  constructor() {
  }

  /**
   * Defines the metadata of NotificationConfigResult
   *
   * @returns {object} metadata of NotificationConfigResult
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'NotificationConfigResult',
      type: {
        name: 'Composite',
        polymorphicDiscriminator: {
          serializedName: 'type',
          clientName: 'type'
        },
        uberParent: 'NotificationConfigResult',
        className: 'NotificationConfigResult',
        modelProperties: {
          type: {
            required: true,
            serializedName: 'type',
            isPolymorphicDiscriminator: true,
            type: {
              name: 'String'
            }
          }
        }
      }
    };
  }
}

module.exports = NotificationConfigResult;
