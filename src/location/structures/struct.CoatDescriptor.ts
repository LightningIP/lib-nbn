import { z } from "zod";

/**
 * A field  to help RSPs identify why a particular location has changed technology, only applicable to nbn-initiated and customer-initiated COAT locations.
 */
export enum ECoatDescriptor {

  /**
   * Applies to locations in nbn’s Regional Satellite to Fixed Wireless upgrade program.
   */
  "Fixed Wireless and Satellite Upgrade Program" = "Fixed Wireless and Satellite Upgrade Program",

  /**
   * Applies to specific premises that have been unable to achieve 25 Mbps in the downlink and/or 5Mbps in the uplink or applies to locationswhere nbn has decided to resolve a Network Activity Ticket.
   */
  "Network Activity Ticket - Underperforming Lines Flip" = "Network Activity Ticket - Underperforming Lines Flip",

  /**
   * Applies to locations wherenbnhas made a decision to change the technology for a premises where a performance issue has been identified. (examples include but limited to speed, stability, repeat assurance issues)
   */
  "Assurance Fibre Upgrade" = "Assurance Fibre Upgrade",

  /**
   * Applies to locations where nbn makes strategic decisions to change the network for reasons such as network optimisation.
   */
  "Network Proactive Premises Flip" = "Network Proactive Premises Flip",
  
  /**
   * Applies to residential premises that were upgraded under the Full Fibre Upgrade For Strata Program
   */
  "MDU Fibre Upgrade - Residential" = "MDU Fibre Upgrade - Residential",

  /**
   * Applies to business premises that were upgraded under the Full Fibre Upgrade For Strata Program
   */
  "MDU Fibre Upgrade - Business" = "MDU Fibre Upgrade - Business",

  /**
   * Applies to locations in a Regional Co-Investment Fund and Regional Connectivity Programs agreement. These technology changes usually apply to multiple locations in regional areas.
   */
  "Regional Area Flip" = "Regional Area Flip",

  /**
   * Applies to locations that have undergone a change of technology due to a Technology Choice Individual Premises Switch or Deals agreement.
   */
  "Customer Funded - Individual Premises Flip" = "Customer Funded - Individual Premises Flip",

  /**
   * Applies to locations where the underlining reason for the technology change was not identifiable or is unknown.
   */
  "Historical COAT Reasons" = "Historical COAT Reasons",

  /**
   * Applies to never connected and inactive premises that have been flipped to Fibre.
   */
  "Never Connected and Inactive Premises Flip to Fibre" = "Never Connected and Inactive Premises Flip to Fibre",
}

/**
 * A field  to help RSPs identify why a particular location has changed technology, only applicable to nbn-initiated and customer-initiated COAT locations.
 */
export const ZCoatDescriptor = z.nativeEnum(ECoatDescriptor)
  .describe(
    'A field  to help RSPs identify why a particular location has changed technology, only applicable to nbn-initiated and customer-initiated COAT locations.'
  );