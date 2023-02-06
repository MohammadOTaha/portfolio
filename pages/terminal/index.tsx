import Terminal from '../../components/Terminal';

export default function TerminalPage() {
  return (
    <div className='
      flex
      flex-col
      gap-8
      items-center
      '>
      <div className='
        flex
        flex-col
        items-center
        text-center
        text-2xl
        md:text-4xl
        mt-20
      '>
        {/* eslint-disable-next-line react/no-unescaped-entities */}
        <span className='text-gray-800 font-bold'>Welcome!</span>
        <span className='text-gray-500 mt-2 font-bold'>Use the
          <span className='text-gray-700 text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-fuchsia-400 to-violet-400'> Terminal </span>
          to know more about me
        </span>
      </div>

      <Terminal />

      <div
        className='fixed top-1/2 right-1/2 w-80 h-80 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob' />
      <div
        className='fixed bottom-96 w-80 h-80 bg-yellow-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000' />
      <div
        className='fixed top-96 right-1/3 w-80 h-80 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000' />

    </div>
  );
}
