'use client';
/*Todo: 
When page is loads we want to make an api call to: https://dog.ceo/api/breeds/list
Then store the result in state: dogList


drop down, multiple select on the input field
every time in changes we want to display the filtered results from dogList

if the input value is not in the dog list then throw error
*/

import React, { useState, useEffect } from 'react';
export default function Page() {
  const [inputValue, setInputValue] = useState();
  const [dogData, setDogData] = useState<any>(null);
  const [dogList, setDogList] = useState<any>(null);
  const [error, setError] = useState(null);
  const [isNotMatch, setIsNotMatch] = useState(false);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch('https://dog.ceo/api/breeds/list');
        const data = await response.json();
        console.log('🚀 ~ file: page.tsx:16 ~ fetchData ~ data', data);
        setDogList(data);
      } catch (error: any) {
        setError(error);
      } finally {
        setLoading(false);
      }
    }

    fetchData();
  }, []);
  const handleChange = (e: any) => {
    setInputValue(e.target.value);
    if (inputValue !== '' && inputValue !== undefined) {
      const selectFilteredList = dogList?.message.filter((breed: any) =>
        breed.includes(inputValue),
      );
      setDogList({ message: selectFilteredList });
    }
  };
  const handleSubmit = async (e: any) => {
    setLoading(true);
    e.preventDefault();
    if (!dogList.message.includes(inputValue)) {
      setIsNotMatch(true);
    } else {
      try {
        const response = await fetch(
          `https://dog.ceo/api/breed/${inputValue}/images`,
        );
        const data = await response.json();
        setDogData(data);
      } catch (err: any) {
        setError(err);
      } finally {
        setLoading(false);
      }
    }
  };
  const dogDataMap = dogData?.message.map((item: string) => {
    return (
      <img style={{ width: 400, height: 400 }} src={item} alt="random image" />
    );
  });
  if (error) {
    return <p>An error occurred: {error}</p>;
  }
  if (dogData) {
    console.log('Dog Data', dogData.message);
  }

  return (
    <div className="flex flex-col items-center">
      <h1 className="mb-4 text-3xl font-bold">Search by Breed</h1>
      <div>{isNotMatch ? 'Breed name is not in our records' : null}</div>
      <form onSubmit={handleSubmit} className="w-full max-w-sm">
        <label className="mb-2 block text-xl font-bold">
          Breed name:
          <input
            type="text"
            placeholder="type a dogbreed to begin"
            value={inputValue}
            onChange={handleChange}
            list={dogList ? dogList : undefined}
            className="form-input w-full"
          />
          <select style={{ width: '10rem' }}>
            <option disabled selected value=""></option>
            {dogList
              ? dogList.message.map((item: string) => {
                  console.log(item, 'item');
                  return (
                    <option value={item} style={{ color: 'black' }}>
                      {item}
                    </option>
                  );
                })
              : null}
          </select>
        </label>
        <button type="submit" className="btn btn-blue mt-4 w-full">
          Search
        </button>
      </form>
      {dogData ? (
        <div className="mt-8 grid grid-cols-3 gap-4">{dogDataMap}</div>
      ) : null}
    </div>
    ); <div
      onClickCapture={() => setShowOptions(false)}
      className="flex flex-col items-center"
    >
      <h1 className="m-4 text-3xl ">Search by Breed!</h1>
      {IsNotMatch ? (
        <p className="mb-2 bg-red-500 p-2 text-center text-white">
          Breed name is misspelled or not in records
        </p>
      ) : null}
      <form onSubmit={handleSubmit} className="w-full max-w-sm">
        <div className="w-full">
          <label className="m-4m block text-xl">
            Breed name:
            <br />
            <input
              type="text"
              placeholder="Type in a dogbreed to begin"
              value={inputValue}
              onChange={(e) => handleChange(e)}
              onClick={() => setShowOptions(true)}
              className="form-input mt-4 w-full outline outline-2 outline-offset-2 outline-neutral-200"
            />
            {showOptions ? (
              <select
                onClick={(e) => handleSelectClick(e)}
                size={dogList?.message.length}
              >
                {dogList
                  ? dogList.message.map((item: string) => {
                      return <option>{item}</option>;
                    })
                  : null}
              </select>
            ) : (
              <select
                hidden
                onClick={(e) => handleSelectClick(e)}
                size={dogList?.message.length}
              >
                {dogList
                  ? dogList.message.map((item: string) => {
                      return <option>{item}</option>;
                    })
                  : null}
              </select>
            )}
          </label>
        </div>
        <div className="grid justify-items-center">
          <button
            type="submit"
            className="btn mt-4 rounded bg-green-500 py-1 px-4 text-white hover:bg-green-700"
          >
            Search
          </button>
        </div>
      </form>
      {dogData ? (
        <div className="mt-8 grid grid-cols-3 gap-4">{dogDataMap}</div>
      ) : null}
    </div>;
}
