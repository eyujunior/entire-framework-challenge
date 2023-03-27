import { gql } from "@apollo/client";
export const GET_MENUITEMS = gql`
  query getMenuItems {
    menuItems {
      data {
        attributes {
          title
        }
      }
    }
  }
`;
