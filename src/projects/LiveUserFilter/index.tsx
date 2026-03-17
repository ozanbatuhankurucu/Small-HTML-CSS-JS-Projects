import { Helmet } from 'react-helmet'
import LiveUserFilter from './LiveUserFilter'

const Wrapper = () => (
  <>
    <Helmet>
      <meta charSet='utf-8' />
      <title>Live User Filter</title>
    </Helmet>
    <LiveUserFilter />
  </>
)
export default Wrapper
