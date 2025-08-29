import React from "react";
import GameClient from "@/components/GameClient";
import GameRules from "@/components/GameRules";

const WordGame = () => {
   return (
      <div className="flex flex-col items-center gap-6 mt-10">
         <h1 className="text-2xl font-bold">Word Guess Game</h1>
         <p className="text-gray-600">Guess the 5-letter word (5 chances)</p>
         <GameClient />
         <GameRules />
      </div>
   );
};

export default WordGame;
