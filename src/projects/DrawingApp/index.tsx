import { Helmet } from 'react-helmet'
import DrawingApp from './DrawingApp'

const Wrapper = () => (
  <>
    <Helmet>
      <meta charSet='utf-8' />
      <title>Drawing App</title>
    </Helmet>
    <DrawingApp />
  </>
)
export default Wrapper
