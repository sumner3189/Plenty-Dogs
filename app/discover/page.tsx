'use client';
import React, { useState, useEffect } from 'react';

function Page() {
  const [matches, setMatches] = useState(0);
  const [dogData, setDogData] = useState<any>(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const [count, setCount] = useState(0);
  const [isMatch, setIsMatch] = useState(false);
  const myNumber = 2;
  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch('https://dog.ceo/api/breeds/image/random');
        const data = await response.json();
        console.log('🚀 ~ file: page.tsx:16 ~ fetchData ~ data', data);
        setDogData(data);
      } catch (error: any) {
        setError(error);
      } finally {
        setLoading(false);
      }
    }

    fetchData();
  }, [count]);
  const handleClick = (e: any) => {
    const randomNumber = Math.floor(Math.random() * 5) + 1;
    setCount(count + 1);
    if (e.target.name === 'thumbsup') {
      if (randomNumber === myNumber) {
        setMatches(matches + 1);
        setIsMatch(true);
      } else {
        setIsMatch(false);
      }
    } else {
      setIsMatch(false);
    }
  };
  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>An error occurred: {error}</p>;
  }
  return (
    <div>
      <h1>Make New Friends</h1>
      <h3>Thumbs up on any pups you'd like to meet!</h3>
      {dogData && <img src={dogData?.message} alt="random" />}
      <button name="thumbsup" onClick={(e) => handleClick(e)}>
        👍
      </button>
      <button onClick={handleClick}>👎</button>
      <h1>Made friends with {matches} pups so far!</h1>
      {isMatch ? 'Yay! That Pup Liked You Too!!!' : null}
    </div>
  );
}

export default Page;
