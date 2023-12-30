import { useState } from 'react'
import { Header } from './components/Header'

function App() {
  return (
    <>
      <div className='flex justify-center'>
        <div className='mt-3 min-w-96 w-3/4'>
          <Header />
        </div>
      </div>
    </>
  )
}

export default App
