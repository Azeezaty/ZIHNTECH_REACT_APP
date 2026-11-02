import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
// The document.getElementById('root') is used to select the root element in the HTML file. 
// The createRoot takes the selected root and prepares it for React. It is more like a container where the React will manage its application. 
// The render just like the name implies renders the component passed and display it into the website. It is the output displayed on the website. 
// The StrictMode is a wrapper that helps to identify potential problems in the application. It does not render any visible UI, but it activates additional checks and warnings for its descendants. It is like the checkpoint of the website to make sure that the application is running smoothly and without any issues. 
// It is a development tool that helps developers to write better code and avoid potential bugs in the future.