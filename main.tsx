import React, { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Example from './src/App.homepage'
import KombaiWrapper from './KombaiWrapper'
import './src/index.css'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <KombaiWrapper>
      <Example />
    </KombaiWrapper>
  </StrictMode>,
)