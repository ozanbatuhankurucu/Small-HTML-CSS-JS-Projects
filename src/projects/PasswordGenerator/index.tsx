import { Helmet } from 'react-helmet'
import PasswordGenerator from './PasswordGenerator'

const Wrapper = () => (
  <>
    <Helmet>
      <meta charSet='utf-8' />
      <title>Password Generator</title>
    </Helmet>
    <PasswordGenerator />
  </>
)
export default Wrapper
