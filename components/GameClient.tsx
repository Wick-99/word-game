"use client";
import React, { useState, useEffect } from "react";
import { WORDS } from "@/components/words";
import Input from "./Input";
import Matrix from "./Matrix";
import Stats from "./Stats";

const GameClient = () => {
   const [targetWord, setTargetWord] = useState<string>("");
   const [guesses, setGuesses] = useState<string[]>([]);

   const pickRandomWord = () => {
      const randomWord = WORDS[Math.floor(Math.random() * WORDS.length)];
      setTargetWord(randomWord);
   };

   useEffect(() => {
      pickRandomWord();
   }, []);

   const handleRetry = () => {
      setGuesses([]);
      pickRandomWord();
   };

   const guessedCorrectly = guesses.some(
      (g) => g.toLowerCase() === targetWord.toLowerCase()
   );
   const gameOver = guesses.length === 5 || guessedCorrectly;

   return (
      <>
         {targetWord && (
            <>
               {!gameOver && (
                  <Input guesses={guesses} setGuesses={setGuesses} />
               )}

               <div className="w-full gap-10 flex flex-col items-center">
                  <Matrix guesses={guesses} targetWord={targetWord} />
                  <Stats guesses={guesses} targetWord={targetWord} />

                  {gameOver && (
                     <button
                        onClick={handleRetry}
                        className="mt-4 px-5 py-2 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700 transition cursor-pointer"
                     >
                        ⟳ Retry
                     </button>
                  )}
               </div>
            </>
         )}
      </>
   );
};

export default GameClient;
