import ReactDOM from 'react-dom/client'
import './index.css'

import AppRouter from './routerConfig/Router'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(<AppRouter />)
