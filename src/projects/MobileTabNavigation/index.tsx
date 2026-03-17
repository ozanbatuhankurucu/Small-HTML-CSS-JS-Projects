import { Helmet } from 'react-helmet'
import MobileTabNavigation from './MobileTabNavigation'

const Wrapper = () => (
  <>
    <Helmet>
      <meta charSet='utf-8' />
      <title>Mobile Tab Navigation</title>
    </Helmet>
    <MobileTabNavigation />
  </>
)
export default Wrapper
