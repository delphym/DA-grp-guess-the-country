import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from 'react-router-dom'
import App from './components/App.tsx'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      {/* <Route index element={<Game />} /> */}
      {/* <Route path="help" element={<Help />} */}
      {/* <Route path="help:code" element */}
    </Route>,
  ),
)

export default router
