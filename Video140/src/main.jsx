import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {store} from "./redux/store.js"
import {Provider} from 'react-redux'
// importing store and provider

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
      {/* So hum Provider ke andar apni iss App ko wrap krdege bss .
      So now huamare App ko Store ka access mil jayega. */}
      <App />
    </Provider>
   
  </StrictMode>,
)