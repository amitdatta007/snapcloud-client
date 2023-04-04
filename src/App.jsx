import { RouterProvider } from 'react-router-dom'
import './App.css'
import router from './Routes/Router'
import 'react-day-picker/dist/style.css';

function App() {

  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
