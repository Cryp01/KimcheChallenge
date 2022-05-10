import { gql } from "@apollo/client";
 

export const CountriesQuery = gql`
query{ 
  countries{
    code
    name
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