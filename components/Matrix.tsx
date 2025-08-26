"use client";

import React from "react";

type Props = {
   guesses: string[];
   targetWord: string;
};

const Matrix = ({ targetWord, guesses }: Props) => {
   const getLetterColor = (letter: string, index: number) => {
      if (!targetWord) return "bg-gray-200";

      if (targetWord[index] === letter) {
         return "bg-green-500 text-white";
      } else if (targetWord.includes(letter)) {
         return "bg-yellow-400 text-white";
      }
      return "bg-red-400 text-white";
   };
   return (
      <div className="flex flex-col gap-2">
         {Array.from({ length: 5 }).map((_, row) => {
            const guess = guesses[row] || "";
            return (
               <div key={row} className="flex gap-2">
                  {Array.from({ length: 5 }).map((_, col) => {
                     const letter = guess[col] || "";
                     return (
                        <div
                           key={col}
                           className={`w-12 h-12 flex items-center justify-center border rounded text-lg font-bold uppercase ${
                              guess
                                 ? getLetterColor(letter, col)
                                 : "bg-gray-100 text-gray-500"
                           }`}
                        >
                           {letter}
                        </div>
                     );
                  })}
               </div>
            );
         })}
      </div>
   );
};

export default Matrix;
