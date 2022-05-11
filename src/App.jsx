import React, { useState } from "react";
import { InMemoryCache, useQuery, ApolloClient } from "@apollo/client";
import { ApolloProvider } from "@apollo/react-hooks";
import { CountriesQuery } from "./graphql/queries";
import Country from "./components/Country";

const client = new ApolloClient({
  cache: new InMemoryCache(),
  uri: "https://countries.trevorblades.com",
});

const App = () => {
  let { data, loading } = useQuery(CountriesQuery, {
    client,
  });

  const [filterMode, setFilterMode] = useState(true);
  const [countryInput, setCountryInput] = useState("");

  if (loading) {
    return (
      <div className="flex w-screen h-screen items-center justify-center">
        <img src="https://titulos.upea.bo/public/img/gif/loader__.gif" alt="loader" />
      </div>
    );
  }

  const handleGroupData = (data) => {
    const local = filterMode
      ? data?.reduce((acc, item) => {
          if (acc[item?.continent?.name] === undefined) {
            acc[item?.continent?.name] = [item];
          } else {
            acc[item?.continent?.name].push(item);
          }
          return acc;
        }, {})
      : data?.reduce((acc, item) => {
          if (acc[item?.languages[0]?.name] === undefined) {
            acc[item?.languages[0]?.name] = [item];
          } else {
            acc[item?.languages[0]?.name].push(item);
          }
          return acc;
        }, {});

    return local;
  };

  let dataFiltered = handleGroupData(data?.countries);

  if (countryInput !== "") {
    dataFiltered = handleGroupData(
      data?.countries?.filter((Country) =>
        Country.name.toLowerCase().startsWith(countryInput.toLowerCase())
      )
    );
  }

  const handleSetGroup = (type) => {
    setFilterMode(type);
  };

  return (
    <ApolloProvider client={client}>
      <div className="lg:w-3/4 w-full">
        <div className="flex flex-col m-10">
          <span className="text-3xl">Country Search</span>
          <div className="flex flex-col mt-2">
            <input
              className="bg-gray-200 w-full rounded-xl py-1 text-center"
              placeholder="Search Country"
              onKeyUp={(e) => {
                setCountryInput(e.target.value);
              }}
            />
            <div className="flex flex-row mt-10 items-center">
              <span className="text-2xl mx-2">Group By: </span>
              <button
                className={`p-5 flex items-center justify-center  cursor-pointer mx-5 rounded-lg ${
                  filterMode
                    ? "bg-blue-600 text-white"
                    : "bg-gray-200 text-black"
                }`}
                onClick={() => handleSetGroup(true)}
              >
                Continent
              </button>
              <button
                className={`p-5 flex items-center justify-center  cursor-pointer mx-5 rounded-lg ${
                  !filterMode
                    ? "bg-blue-600 text-white"
                    : "bg-gray-200 text-black"
                }`}
                onClick={() => handleSetGroup(false)}
              >
                Languague
              </button>
            </div>
            <div className="flex mt-10 flex-col ">
              {Object.keys(dataFiltered).map((key) => {
                return (
                  <div className="flex flex-col ">
                    <span className="text-xl mb-2">{key}</span>
                    <div className="mx-2 flex flex-wrap">
                    {dataFiltered[key].map((country) => {
                      return <Country country={country} />;
                    })}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </ApolloProvider>
  );
};
export default App;
