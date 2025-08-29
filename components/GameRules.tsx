import React from "react";

const GameRules = () => {
   return (
      <div className="mt-8 w-full max-w-xl bg-gray-800 p-6 shadow-lg ">
         <h2 className="text-lg font-semibold text-white mb-4">Game Rules</h2>
         <ul className="space-y-3 text-sm sm:text-base">
            <li className="flex items-center gap-3">
               <span className="w-6 h-6 rounded bg-yellow-500 inline-block"></span>
               <span className="text-gray-300">
                  The letter is in the word, but in the <b>wrong position</b>.
               </span>
            </li>
            <li className="flex items-center gap-3">
               <span className="w-6 h-6 rounded bg-green-500 inline-block"></span>
               <span className="text-gray-300">
                  The letter is in the <b>correct position</b>.
               </span>
            </li>
            <li className="flex items-center gap-3">
               <span className="w-6 h-6 rounded bg-red-500 inline-block"></span>
               <span className="text-gray-300">
                  The letter is <b>not in the word</b>.
               </span>
            </li>
         </ul>
      </div>
   );
};

export default GameRules;
