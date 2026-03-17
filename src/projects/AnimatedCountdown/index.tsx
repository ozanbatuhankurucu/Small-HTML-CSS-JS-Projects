import { Helmet } from 'react-helmet'
import AnimatedCountdown from './AnimatedCountdown'

const Wrapper = () => (
  <>
    <Helmet>
      <meta charSet='utf-8' />
      <title>Animated Countdown</title>
    </Helmet>
    <AnimatedCountdown />
  </>
)
export default Wrapper
