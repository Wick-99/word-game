"use client";
import React, { useState, useEffect } from "react";
import { WORDS } from "@/components/words";
import Input from "./Input";
import Matrix from "./Matrix";
import Stats from "./Stats";

const GameClient = () => {
   const [targetWord, setTargetWord] = useState<string>("");
   const [guesses, setGuesses] = useState<string[]>([]);

   useEffect(() => {
      const randomWord = WORDS[Math.floor(Math.random() * WORDS.length)];
      console.log(randomWord)
      setTargetWord(randomWord);
   }, []);

   return (
      <>
         {targetWord && (
            <>
               <Input guesses={guesses} setGuesses={setGuesses} />

               <div className="w-100 gap-10 flex flex-col items-center">
                  <Matrix guesses={guesses} targetWord={targetWord} />
                  <Stats guesses={guesses} targetWord={targetWord} />
               </div>
            </>
         )}
      </>
   );
};

export default GameClient;
