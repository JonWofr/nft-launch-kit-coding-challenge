/**
 * Part of the response model returned from the Rarible API https://multichain-api.rarible.org/v0.1/tag/ownership-controller#operation/getOwnershipsByItem
 */
interface GetOwnershipsByItemsResponse {
  ownerships: { owner: string }[];
}

export default GetOwnershipsByItemsResponse;
