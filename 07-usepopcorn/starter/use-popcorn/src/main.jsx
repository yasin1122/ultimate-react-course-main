import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import StarRating from './StarRating'
// import './index.css'
// import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <App /> */}
    <StarRating
      maxRating={5}
      messages={['Terrible', 'Bad', 'Okay', 'Good', 'Amazing']}
    />
    <StarRating
      size={24}
      color='green'
      className='test'
      defaultRating={3}
    />
  </StrictMode>
)
