import React, { useState } from "react";
import { characters } from "../data/characters";
import { scoredCharacters } from './Quiz';
import "../App.css";

function AllCharacters() {
  let [index, setIndex] = useState(-1);

  function characterClick(characterName: string) {
    for (let i: number = 0; i < characters.length; i++) {
      if (characters[i].name === characterName) {
        console.log("clicked: " + characterName);
        setIndex(i);
        return index;
      }
    }
  }

  const sortedCharacters = scoredCharacters.sort((a,b) => b.score - a.score);
  let characterList = sortedCharacters.map((character) => {
    return (
      <li
        key={character.name}
        onClick={() => characterClick(character.name)}
        className="mt-6 mx-6 text-[#61dafb]"
      >
        <div className="flex justify-center">
          <img src={character.image} alt={character.name} />
        </div>
        {character.name}
      </li>
    );
  });

  function selectedCharacter(index: number) {
    if (index === -1) {
      return <p className="hidden">Keep it nothing </p>;
    } else {
      return (
        <div
          id="defaultModal"
          tabIndex={-1}
          aria-hidden="true"
          className="flex justify-center pt-20 overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 w-full md:inset-0 h-modal md:h-full"
        >
          <div className="relative p-4 w-full max-w-2xl h-full md:h-auto">
            <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
              <div className="flex justify-between items-start p-4 rounded-t border-b dark:border-gray-600">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                  {sortedCharacters[index].name}
                </h3>
                <button
                  type="button"
                  className="exitbutton text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white"
                >
                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                </button>
              </div>

              <div className="p-6 space-y-6">
                <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                  {sortedCharacters[index].flavortext}
                </p>
                <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                  {sortedCharacters[index].traits + " "}
                </p>
              </div>
              <div className="flex items-center p-6 space-x-2 rounded-b border-t border-gray-200 dark:border-gray-600">
                <button
                  type="button"
                  className="text-white bg-blue-600 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                  Overview
                </button>
                <button
                  type="button"
                  className="text-white bg-blue-600 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg text-sm font-medium px-5 py-2.5"
                >
                  Build Guide
                </button>
              </div>
            </div>
          </div>
        </div>
      );
    }
  }

  function toggleVisibility() {
    //toggle visibility by changing index to -1, as it is negative 1 when nothing is selected
    setIndex(-1);
  }

  return (
    <div>
      <div className="characters m-auto">
        <ul className="mt-20 characterList flex flex-wrap justify-center">
          {characterList}
        </ul>
      </div>
      <div className="characterCard" onClick={toggleVisibility}>
        {selectedCharacter(index)}
      </div>
    </div>
  );
}

export default AllCharacters;
