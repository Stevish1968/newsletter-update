import Header from './components/Header'
import MainBody from './components/MainBody'
import EmailInput from './components/EmailInput'
import Thanks from './components/Thanks'

import { useState } from 'react'


function App() {

  const [isSubmitted, setIsSubmitted] = useState(false)
  const [email, setEmail] = useState()


  return (
    <div className='wrapper'>
      {isSubmitted ? <Thanks email={email} setIsSubmitted={setIsSubmitted} setEmail={setEmail}/> :
        <div className="container">
          <Header />
          <main>
            <MainBody />
            <EmailInput setIsSubmitted={setIsSubmitted} email={email} setEmail={setEmail}  />
          </main>
        </div>
      }
    </div >
  )
}

export default App
