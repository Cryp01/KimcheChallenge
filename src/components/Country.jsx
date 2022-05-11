import React from "react";
import propTypes from "prop-types";

const Country = ({ country }) => {

  return (
    <div className="flex flex-col p-10 items-center justify-center bg-gray-200 my-2 card mx-2 border border-gray-400 shadow-lg rounded-lg">
      <img
        src={`https://countryflagsapi.com/png/${country?.code}`}
        alt={`${country?.emoji}`}
        className="w-26 h-20 my-1"
      />
      <span className="my-1 text-xl">{country?.name}</span>
      <span className="my-1 text-base">{country?.capital}</span>
      <span className="my-1 text-base">{country?.phone}</span>
      <div className="flex flex-wrap my-3 w-full justify-center items-center">
        {country?.languages?.map((languague, key) => {
          if(key < 4){
          return <span className="p-2 text-xs rounded-3xl text-center justify-center bg-blue-600 m-1 text-white">
            {languague?.name}
          </span>;
          }
        })}
      </div>
    </div>
  );
};

Country.propTypes = {
  country: propTypes.object.isRequired,
};

export default Country;
