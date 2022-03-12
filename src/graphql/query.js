import { gql } from "@apollo/client";

export const GET_ORDERS = gql`
{
  orders(first: 50,reverse: true) {
    edges {
      node {
        id
        name
        note
        createdAt
        displayFinancialStatus
        displayFulfillmentStatus
        totalPriceSet {
          shopMoney {
            amount
          }
          
        }
        customer {
          id
          displayName
        }
      }
    }
  }
}

`;