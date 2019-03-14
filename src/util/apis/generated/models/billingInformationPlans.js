/*
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

'use strict';

/**
 * Billing Plans section in the Billing Information
 *
 */
class BillingInformationPlans {
  /**
   * Create a BillingInformationPlans.
   * @property {object} [buildService]
   * @property {boolean} [buildService.canSelectTrialPlan] Can customer select
   * trial plan for that service (if it exists)?
   * @property {string} [buildService.lastTrialPlanExpirationTime] Expiration
   * time of the last selected trial plan. Will be null if trial plan was not
   * used.
   * @property {object} [buildService.currentBillingPeriod]
   * @property {string} [buildService.currentBillingPeriod.startTime] Inclusive
   * start of the period
   * @property {string} [buildService.currentBillingPeriod.endTime] Exclusive
   * end of the period.
   * @property {object} [buildService.currentBillingPeriod.byAccount]
   * @property {number} [buildService.currentBillingPeriod.byAccount.count]
   * Number of instances of the billing plan.
   * @property {object} [buildService.currentBillingPeriod.byAccount.plan]
   * @property {string} [buildService.currentBillingPeriod.byAccount.plan.id]
   * The Billing Plan ID
   * @property {string}
   * [buildService.currentBillingPeriod.byAccount.plan.version] Version of the
   * Billing Plan schema
   * @property {number}
   * [buildService.currentBillingPeriod.byAccount.plan.price] Price of the
   * Billing Plan
   * @property {string}
   * [buildService.currentBillingPeriod.byAccount.plan.paymentSource] Service
   * that receives payments for this billing plan. Possible values include:
   * 'None', 'AppCenter', 'GitHub', 'Xtc'
   * @property {string}
   * [buildService.currentBillingPeriod.byAccount.plan.service] Name of the
   * service that the plan applies to. Possible values include: 'Build',
   * 'Push', 'Test'
   * @property {object}
   * [buildService.currentBillingPeriod.byAccount.plan.limits]
   * @property {object}
   * [buildService.currentBillingPeriod.byAccount.plan.attributes]
   * @property {string}
   * [buildService.currentBillingPeriod.byAccount.plan.parentId]
   * @property {object} [pushService]
   * @property {boolean} [pushService.canSelectTrialPlan] Can customer select
   * trial plan for that service (if it exists)?
   * @property {string} [pushService.lastTrialPlanExpirationTime] Expiration
   * time of the last selected trial plan. Will be null if trial plan was not
   * used.
   * @property {object} [pushService.currentBillingPeriod]
   * @property {string} [pushService.currentBillingPeriod.startTime] Inclusive
   * start of the period
   * @property {string} [pushService.currentBillingPeriod.endTime] Exclusive
   * end of the period.
   * @property {object} [pushService.currentBillingPeriod.byAccount]
   * @property {number} [pushService.currentBillingPeriod.byAccount.count]
   * Number of instances of the billing plan.
   * @property {object} [pushService.currentBillingPeriod.byAccount.plan]
   * @property {string} [pushService.currentBillingPeriod.byAccount.plan.id]
   * The Billing Plan ID
   * @property {string}
   * [pushService.currentBillingPeriod.byAccount.plan.version] Version of the
   * Billing Plan schema
   * @property {number} [pushService.currentBillingPeriod.byAccount.plan.price]
   * Price of the Billing Plan
   * @property {string}
   * [pushService.currentBillingPeriod.byAccount.plan.paymentSource] Service
   * that receives payments for this billing plan. Possible values include:
   * 'None', 'AppCenter', 'GitHub', 'Xtc'
   * @property {string}
   * [pushService.currentBillingPeriod.byAccount.plan.service] Name of the
   * service that the plan applies to. Possible values include: 'Build',
   * 'Push', 'Test'
   * @property {object}
   * [pushService.currentBillingPeriod.byAccount.plan.limits]
   * @property {object}
   * [pushService.currentBillingPeriod.byAccount.plan.attributes]
   * @property {string}
   * [pushService.currentBillingPeriod.byAccount.plan.parentId]
   * @property {object} [testService]
   * @property {boolean} [testService.canSelectTrialPlan] Can customer select
   * trial plan for that service (if it exists)?
   * @property {string} [testService.lastTrialPlanExpirationTime] Expiration
   * time of the last selected trial plan. Will be null if trial plan was not
   * used.
   * @property {object} [testService.currentBillingPeriod]
   * @property {string} [testService.currentBillingPeriod.startTime] Inclusive
   * start of the period
   * @property {string} [testService.currentBillingPeriod.endTime] Exclusive
   * end of the period.
   * @property {object} [testService.currentBillingPeriod.byAccount]
   * @property {number} [testService.currentBillingPeriod.byAccount.count]
   * Number of instances of the billing plan.
   * @property {object} [testService.currentBillingPeriod.byAccount.plan]
   * @property {string} [testService.currentBillingPeriod.byAccount.plan.id]
   * The Billing Plan ID
   * @property {string}
   * [testService.currentBillingPeriod.byAccount.plan.version] Version of the
   * Billing Plan schema
   * @property {number} [testService.currentBillingPeriod.byAccount.plan.price]
   * Price of the Billing Plan
   * @property {string}
   * [testService.currentBillingPeriod.byAccount.plan.paymentSource] Service
   * that receives payments for this billing plan. Possible values include:
   * 'None', 'AppCenter', 'GitHub', 'Xtc'
   * @property {string}
   * [testService.currentBillingPeriod.byAccount.plan.service] Name of the
   * service that the plan applies to. Possible values include: 'Build',
   * 'Push', 'Test'
   * @property {object}
   * [testService.currentBillingPeriod.byAccount.plan.limits]
   * @property {object}
   * [testService.currentBillingPeriod.byAccount.plan.attributes]
   * @property {string}
   * [testService.currentBillingPeriod.byAccount.plan.parentId]
   */
  constructor() {
  }

  /**
   * Defines the metadata of BillingInformationPlans
   *
   * @returns {object} metadata of BillingInformationPlans
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'BillingInformationPlans',
      type: {
        name: 'Composite',
        className: 'BillingInformationPlans',
        modelProperties: {
          buildService: {
            required: false,
            serializedName: 'buildService',
            type: {
              name: 'Composite',
              className: 'ServiceBillingPlans'
            }
          },
          pushService: {
            required: false,
            serializedName: 'pushService',
            type: {
              name: 'Composite',
              className: 'ServiceBillingPlans'
            }
          },
          testService: {
            required: false,
            serializedName: 'testService',
            type: {
              name: 'Composite',
              className: 'ServiceBillingPlans'
            }
          }
        }
      }
    };
  }
}

module.exports = BillingInformationPlans;
