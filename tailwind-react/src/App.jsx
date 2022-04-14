import './App.css'


function App() {

  return (
    <div className='py-16 bg-gradient-to-br from-green-50 to-cyan-100 w-full h-screen flex items-center'>
      <div className='flex  items-center flex-col space-y-10'>
        <div className='flex justify-center flex-col w-96 items-center space-y-3 w-screen'>
          <span className='border border-green-300 rounded-full text-green-600  bg-green-100 w-10 px-3 py-1.5 w-14	'>Blog</span>
          <h1 className='text-5xl text-cyan-900 font-bold' >Sharing is Caring</h1>
          <p className='w-4/12 text-center text-gray-600 text-xl'>Quam hic dolore cumque voluptate rerum beatae et quae, tempore sunt, debitis dolorum officia aliquid explicabo? Excepturi, voluptate?</p>
        </div>
        <div className='flex space-x-4 justify-center'>
          <div className='flex bg-white bg-opacity-50 rounded-xl w-4/12 ' >
            <img src="https://tailus.io/sources/blocks/twocards/preview/images/woman.jpg" alt="art cover" loading="lazy" width="1000" height="667" className='px-2 py-2 h-56 rounded-2xl h-96  w-80 object-cover object-top rounded-lg ' />
            <div className='flex flex-col justify-center space-y-4'>
              <p className='w-11/12 text-3xl font-semibold text-cyan-900'>Provident de illo eveniet commodi fuga fugiat laboriosam expedita.</p>
              <p className='text-gray-600 w-11/12 text-xl'>Laborum saepe laudantium in, voluptates ex placeat quo harum aliquam totam, doloribus eum impedit atque! Temporibus...</p>
              <a href="" className='text-sky-500' >Read more</a>
            </div>
          </div>
          <div className='flex bg-white bg-opacity-50 rounded-2xl w-4/12'  >
            <img src="https://tailus.io/sources/blocks/twocards/preview/images/man.jpg" alt="art cover" loading="lazy" width="1000" height="667" className='px-2 py-2 rounded-2xl h-96  w-80  object-cover object-top rounded-lg ' />
            <div className='flex flex-col justify-center space-y-4  '>
              <p className='w-111/12 text-3xl font-semibold text-cyan-900'>Provident de illo eveniet commodi fuga fugiat laboriosam expedita.</p>
              <p className='text-gray-600 w-11/12 text-xl '>Laborum saepe laudantium in, voluptates ex placeat quo harum aliquam totam, doloribus eum impedit atque! Temporibus...</p>
              <a href="" className='text-sky-500'>Read more</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
