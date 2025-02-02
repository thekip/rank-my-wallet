import { BlockchainAddress } from "./BlockhainAddress"

/**
 * Catch all class for all unrecognizable addresses.
 */
export class UnrecognizedAddress extends BlockchainAddress {
  constructor(address: string) {
    super(address) // sets address property in the base class (lowercased there)
    this.class = this.constructor.name
  }
}
