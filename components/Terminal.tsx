import { useEffect, useRef, useState } from 'react';

export default function Terminal() {
  const terminalRef = useRef<HTMLDivElement>(null);
  const [commandsHistory, setCommandsHistory] = useState(Array<{ input: string; output: string; }>());

  useEffect(() => {
    terminalRef.current?.scrollTo(0, terminalRef.current.scrollHeight);
  });

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      const input = e.currentTarget.value;
      setCommandsHistory([...commandsHistory, { input, output: 'output' }]);
      e.currentTarget.value = '';
    }
  };

  return (
    <div className='flex flex-col gap-4 mt-8 mx-24 rounded-xl border shadow-lg shadow-indigo-100 p-4 text-left'>
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
      <div className='flex flex-col gap-2 overflow-y-auto max-h-96' ref={terminalRef}>
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

            <span className='text-gray-700'>{command.output}</span>
          </div>
        ))}

        {/*new command*/}
        <div className='flex'>
          <span className='text-gray-500'>visitor@</span>
          <span className='text-gray-700'>Omar-Portfolio</span>
          <span className='text-gray-500'>:&nbsp;</span>
          <span className='text-gray-700'>~</span>
          <span className='text-gray-500'>$&nbsp;</span>

          <input className='flex-grow bg-transparent outline-none' onKeyDown={handleKeyDown} />
        </div>
      </div>
    </div>
  );
}
