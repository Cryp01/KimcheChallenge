import React from "react";
import ApolloClient, { InMemoryCache, useQuery } from "@apollo/client";
import { ApolloProvider } from "@apollo/react-hooks";
import { CountriesQuery } from "./graphql/queries";

const client = new ApolloClient({
  cache: new InMemoryCache(),
  uri: "https://countries.trevorblades.com",
});



const App = () => {

  const {data, loading} = useQuery(CountriesQuery, {
    client,
  });

  console.log(data);

  return (
    <ApolloProvider client={client}>
      <div className="bg-gray-700 hidden">

      </div>
    </ApolloProvider>
  );

}
export default App;
