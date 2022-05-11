import { gql } from "@apollo/client";
 

export const CountriesQuery = gql`

query{ 
  countries{
    code
    name
    emojiU
    emoji
    capital
    phone
    states{
      name
    }
    continent{
      code
      name
    }
    languages{
      code
      name
    }
  }
}
`