import { useState } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

import React from 'react'
import Header from './components/Header'

import FeebackData from './data/FeedbackData'
import FeedbackList from './components/FeedbackList'
import FeedbackStats from './components/FeedbackStats'
import FeedbackForm from './components/FeedbackForm'
import AboutPage from './pages/AboutPage'
import AboutIconLink from './components/AboutIconLink'
import { FeedbackProvider } from './context/FeedbackContext'

const App = () => {
  // eslint-disable-next-line
  const [feedback, setFeedback] = useState(FeebackData)

  return (
    <FeedbackProvider>
      <Router>
        <Header text='Hello World' />
        <div className='container'>
          <Routes>
            <Route
              path='/'
              element={
                <>
                  <FeedbackForm />
                  <FeedbackStats />
                  <FeedbackList />
                </>
              }
            />

            <Route path='/about' element={<AboutPage />} />
          </Routes>
          <AboutIconLink />
        </div>
      </Router>
    </FeedbackProvider>
  )
}

export default App
