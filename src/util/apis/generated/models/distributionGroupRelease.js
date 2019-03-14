/*
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

'use strict';

/**
 * Response for getting a list of releases in a distribution group
 *
 */
class DistributionGroupRelease {
  /**
   * Create a DistributionGroupRelease.
   * @property {number} [id] ID identifying this unique release.
   * @property {string} [version] The release's version.<br>
   * For iOS: CFBundleVersion from info.plist.<br>
   * For Android: android:versionCode from AppManifest.xml.
   * @property {string} [shortVersion] The release's short version.<br>
   * For iOS: CFBundleShortVersionString from info.plist.<br>
   * For Android: android:versionName from AppManifest.xml.
   * @property {boolean} [mandatoryUpdate] A boolean which determines whether
   * the release is a mandatory update or not.
   * @property {string} [uploadedAt] UTC time in ISO 8601 format of the
   * uploaded time.
   * @property {boolean} [enabled] This value determines the whether a release
   * currently is enabled or disabled.
   */
  constructor() {
  }

  /**
   * Defines the metadata of DistributionGroupRelease
   *
   * @returns {object} metadata of DistributionGroupRelease
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'DistributionGroupRelease',
      type: {
        name: 'Composite',
        className: 'DistributionGroupRelease',
        modelProperties: {
          id: {
            required: false,
            serializedName: 'id',
            type: {
              name: 'Number'
            }
          },
          version: {
            required: false,
            serializedName: 'version',
            type: {
              name: 'String'
            }
          },
          shortVersion: {
            required: false,
            serializedName: 'short_version',
            type: {
              name: 'String'
            }
          },
          mandatoryUpdate: {
            required: false,
            serializedName: 'mandatory_update',
            type: {
              name: 'Boolean'
            }
          },
          uploadedAt: {
            required: false,
            serializedName: 'uploaded_at',
            type: {
              name: 'String'
            }
          },
          enabled: {
            required: false,
            serializedName: 'enabled',
            type: {
              name: 'Boolean'
            }
          }
        }
      }
    };
  }
}

module.exports = DistributionGroupRelease;
