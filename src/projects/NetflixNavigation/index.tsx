import { Helmet } from 'react-helmet'
import NetflixNavigation from './NetflixNavigation'

const Wrapper = () => (
  <>
    <Helmet>
      <meta charSet='utf-8' />
      <title>Netflix Navigation</title>
    </Helmet>
    <NetflixNavigation />
  </>
)
export default Wrapper
