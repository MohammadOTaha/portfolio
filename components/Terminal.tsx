import React, { useEffect, useRef, useState } from 'react';
import executeCommand from '../services/ExecuteCommand';

export default function Terminal() {
  const terminalRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const [commandsHistory, setCommandsHistory] = useState(Array<{ input: string; output: string; }>());

  useEffect(() => {
    terminalRef.current?.scrollTo(0, terminalRef.current.scrollHeight);
    inputRef.current?.focus();
  });

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      const input = e.currentTarget.value;
      const output = executeCommand(input.trim().toLowerCase());

      setCommandsHistory([...commandsHistory, { input, output: output }]);

      e.currentTarget.value = '';
    } else if (e.ctrlKey && e.key === 'l') {
      setCommandsHistory([]);
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      if (commandsHistory.length > 0) {
        e.currentTarget.value = commandsHistory[commandsHistory.length - 1].input;
      }
    }
  };

  return (
    <div className='flex flex-col gap-4 rounded-xl border-2 shadow-xl p-4 w-6/12 mt-8'>
      {/*toolbar*/}
      <div className='flex'>
        {/*terminal buttons*/}
        <div className='flex items-center gap-2'>
          <div className='w-3 h-3 rounded-full bg-red-500' />
          <div className='w-3 h-3 rounded-full bg-yellow-500' />
          <div className='w-3 h-3 rounded-full bg-green-500' />
        </div>

        {/*title*/}
        <div className='flex-grow text-center'>
          <span className='text-gray-500'>visitor@</span>
          <span className='text-gray-700'>Omar-Portfolio</span>
          <span className='text-gray-500'>: </span>
          <span className='text-gray-700'>~</span>
        </div>
      </div>

      {/*terminal content*/}
      <div
        className='flex flex-col gap-2 overflow-y-auto max-h-96 scrollbar scrollbar-w-2 scrollbar-thumb-indigo-100 scrollbar-thumb-rounded-lg'
        ref={terminalRef}>
        {/*commands history*/}
        {commandsHistory.map((command, index) => (
          <div className='flex flex-col' key={index}>
            <div className='flex'>
              <span className='text-gray-500'>visitor@</span>
              <span className='text-gray-700'>Omar-Portfolio</span>
              <span className='text-gray-500'>:&nbsp;</span>
              <span className='text-gray-700'>~</span>
              <span className='text-gray-500'>$&nbsp;</span>
              <span>{command.input}</span>
            </div>

            {command.output.startsWith('http') ?
              (<a href={command.output}> <span className='text-blue-500'>{command.output}</span> </a>)
              : command.output.split('\n').map((line, index) => (
                <span className='text-gray-700' key={index}>{line}</span>
              ))
            }
          </div>
        ))}

        {/*new command*/}
        <div className='flex'>
          <span className='text-gray-500'>visitor@</span>
          <span className='text-gray-700'>Omar-Portfolio</span>
          <span className='text-gray-500 mr-1'>:</span>
          <span className='text-gray-700'>~</span>
          <span className='text-gray-500 mr-1'>$</span>
          <input className='flex-grow bg-transparent outline-none text-gray-700 w-fit z-10' onKeyDown={handleKeyDown}
                 ref={inputRef} />
        </div>
      </div>
    </div>
  );
}
