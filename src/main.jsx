import React from 'react'
import ReactDOM from 'react-dom/client'
import Layout from "./Layout/layout.jsx"; // Importa Layout en lugar de App
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Layout />
  </React.StrictMode>,
)