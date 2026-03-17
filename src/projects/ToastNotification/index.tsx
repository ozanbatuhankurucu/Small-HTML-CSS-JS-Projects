import { Helmet } from 'react-helmet'
import ToastNotification from './ToastNotification'

const Wrapper = () => (
  <>
    <Helmet>
      <meta charSet='utf-8' />
      <title>Toast Notification</title>
    </Helmet>
    <ToastNotification />
  </>
)
export default Wrapper
