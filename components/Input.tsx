"use client";
import React, { useState } from "react";

type InputProps = {
   guesses: string[];
   setGuesses: React.Dispatch<React.SetStateAction<string[]>>;
};

const Input = ({ guesses, setGuesses }: InputProps) => {
   const [currentGuess, setCurrentGuess] = useState("");

   const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
      if (e.key === "Enter") {
         if (currentGuess.length !== 5) return;
         if (guesses.length >= 5) return;

         setGuesses([...guesses, currentGuess.toLowerCase()]);
         setCurrentGuess("");
      }
   };

   return (
      <input
         type="text"
         maxLength={5}
         value={currentGuess}
         onChange={(e) => setCurrentGuess(e.target.value)}
         onKeyDown={handleKeyDown}
         className="border px-3 py-2 rounded text-center uppercase tracking-widest"
         placeholder="Guess The Word"
      />
   );
};

export default Input;
