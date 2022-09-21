/**
 * Part of the response model returned from the Rarible API https://multichain-api.rarible.org/v0.1/tag/item-controller#operation/getItemsByOwner
 */
interface GetListActivitiesByItemResponse {
  activities: { price: string }[];
}

export default GetListActivitiesByItemResponse;
