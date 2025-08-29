"use client";
import React, { useState } from "react";

type InputProps = {
   guesses: string[];
   setGuesses: React.Dispatch<React.SetStateAction<string[]>>;
};

const Input = ({ guesses, setGuesses }: InputProps) => {
   const [currentGuess, setCurrentGuess] = useState("");

   const handleSubmit = () => {
      if (currentGuess.length !== 5) return;
      if (guesses.length >= 5) return;

      setGuesses([...guesses, currentGuess.toLowerCase()]);
      setCurrentGuess("");
   };

   const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
      if (e.key === "Enter") {
         handleSubmit();
      }
   };

   return (
      <div className="flex items-center gap-2 w-full max-w-xs">
         <input
            type="text"
            maxLength={5}
            value={currentGuess}
            onChange={(e) => setCurrentGuess(e.target.value)}
            onKeyDown={handleKeyDown}
            className="flex-1 border px-3 py-2 rounded text-center uppercase tracking-widest"
            placeholder="Guess Word"
         />
         <button
            onClick={handleSubmit}
            className="px-3 py-2 text-sm bg-blue-600 text-white rounded-md hover:bg-blue-700 transition cursor-pointer"
         >
            ENTER
         </button>
      </div>
   );
};

export default Input;
