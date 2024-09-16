import { createRoot } from 'react-dom/client'
import "bootstrap/dist/css/bootstrap.min.css"
import './index.css'
import Root from './pages/router/index'

createRoot(document.getElementById('root')).render(
    <Root />
)
