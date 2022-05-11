import React from "react";

const Modal = ({ country, show }) => {
  setTimeout(() => {
    document.querySelector("#modalcontent").classList.add("show");
  }, 50);
  return (
    <div className="modal justify-center items-center flex">
      <div
        className={`flex flex-col lg:w-1/2 w-11/12 out bg-white rounded-lg`}
        id="modalcontent"
      >
        <div className="flex  w-full justify-end">
          <svg
            className="w-6 h-6 text-black cursor-pointer transition duration-500 ease-in-out my-2 mx-1"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            onClick={() => show(false)}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </div>
        <div className="flex flex-col w-full items-center overflow-hidden overflow-y-scroll max-h-custom ">
          <span className="text-3xl BOLD">FLAG</span>
          <img
            src={`https://countryflagsapi.com/png/${country?.code}`}
            alt={`${country?.emoji}`}
            className="my-1 w-1/3"
          />
          <span className="text-2xl BOLD">NAME</span>
          <span className="text-xl my-1">{country?.name}</span>

          <span className="text-2xl BOLD">PHONE CODE(S)</span>
          <span className="text-xl my-1">{country?.phone}</span>

          <span className="text-2xl BOLD">CAPITAL</span>
          <span className="text-xl my-1">{country?.capital}</span>

          <span className="text-2xl BOLD">CONTINENT</span>
          <span className="text-xl my-1">{country?.continent?.name}</span>

          <span className="text-2xl BOLD">Languagues</span>
          <div className="flex flex-wrap my-3 w-full justify-center items-center">
            {country?.languages?.map((languague, index) => {
              return (
                <span
                  className="p-2 text-xs rounded-3xl text-center justify-center bg-blue-600 m-1 text-white"
                  key={index}
                >
                  {languague?.name}
                </span>
              );
            })}
          </div>

          {country?.states?.length > 0 && (
            <span className="text-2xl BOLD">States</span>
          )}

          <div className="flex flex-wrap my-3 w-full justify-center items-center">
            {country?.states?.map((state, index) => {
              return (
                <span
                  className="p-2 text-xs rounded-3xl text-center justify-center bg-blue-600 m-1 text-white"
                  key={index}
                >
                  {state?.name}
                </span>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
