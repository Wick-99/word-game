import React from "react";

type StatsProps = {
   guesses: string[];
   targetWord: string;
};

const Stats = ({ guesses, targetWord }: StatsProps) => {
   const normalizedTarget = targetWord.toLowerCase();
   const guessedCorrectly = guesses.some(
      (g) => g.toLowerCase() === normalizedTarget
   );

   return (
      <>
         {guessedCorrectly && (
            <p className="text-green-600 font-semibold text-xl mt-10">
               You guessed it! The word was {targetWord} 🎉
            </p>
         )}
         {guesses.length === 5 && !guessedCorrectly && (
            <p className="text-red-600 font-semibold">
               Game Over! The word was <span className="text-2xl">{targetWord}</span> ❌
            </p>
         )}
      </>
   );
};

export default Stats;
