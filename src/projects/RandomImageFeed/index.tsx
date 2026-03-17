import { Helmet } from 'react-helmet'
import RandomImageFeed from './RandomImageFeed'

const Wrapper = () => (
  <>
    <Helmet>
      <meta charSet='utf-8' />
      <title>Random Image Feed</title>
    </Helmet>
    <RandomImageFeed />
  </>
)
export default Wrapper
