//  query ExampleQuery {
//    HeaderMenus {
//      label
//      link
//      submenus {
//        label
//        link
//      }
//    }
//  }

import { getHeaderById } from "../service/headerMenu"

// query GetHeader( $headerMenuId: ID!) {
//   HeaderMenu(id: $headerMenuId) {
//     id
//     label
//     link
//     submenus {
//       label
//       link
//     }
//   }
// } 

// query ExampleQuery {
//   HeaderMenus {
//     label
//     link
//     submenus {
//       label
//       link
//     }
//   }
// }


// # mutation ExampleCreateGrid($input: GridContentInput!){
// #   createGridDetails(input: $input) {
// #     title
// #     subHeader
// #     description
// #     images {
// #       url
// #       altText
// #     }
// #   }
// # }

// # query GetHeader( $headerMenuId: ID!) {
// #   HeaderMenu(id: $headerMenuId) {
// #     label
// #     link
// #     submenus {
// #       label
// #       link
// #     }
// #   }
// # } 

// Body for create and getHeaderById
// {
//   "input": {
//     "title": "Sky Sports",
//     "subHeader": "Big Weekend",
//     "description": "All 9 dedicated sports channels, including Premier League, F1 and more. Includes Sky Sports+",
//     "images": [
//       {
//         "url": "https://www.dishtv.in/adobe/dynamicmedia/deliver/dm-aid--c8dc3f5c-3900-4166-b368-ab5a13ca2487/NewjourneymobBanner.png.webp?preferwebp=true",
//         "altText": "Sky Sports Big Weekend"
//       },
//       {
//         "url": "https://i0.wp.com/www.themediaant.com/blog/wp-content/uploads/2022/02/Top-10-Sports-Channel-In-India.jpg?fit=740%2C740&ssl=1",
//         "altText": "Sky Sports Channels"
//       }
//     ]
//   },
// }

// {
//   "headerMenuId": "68efab82e27b6d9399a76e45"
// } 