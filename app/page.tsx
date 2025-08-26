import React from "react";
import GameClient from "@/components/GameClient";

const WordGame = () => {
   return (
      <div className="flex flex-col items-center gap-6 mt-10">
         <h1 className="text-2xl font-bold">Word Guess Game</h1>
         <p className="text-gray-600">Guess the 6-letter word (6 chances)</p>
         <GameClient />
      </div>
   );
};

export default WordGame;
