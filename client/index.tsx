import { createRoot } from 'react-dom/client'

import App from './components/App.tsx'
import router from './router.tsx'
import { RouterProvider } from 'react-router-dom'

document.addEventListener('DOMContentLoaded', () => {
  createRoot(document.getElementById('app') as HTMLElement).render(
    <RouterProvider router={router} />,
  )
})
