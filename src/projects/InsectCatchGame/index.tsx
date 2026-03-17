import { Helmet } from 'react-helmet'
import InsectCatchGame from './InsectCatchGame'

const Wrapper = () => (
  <>
    <Helmet>
      <meta charSet='utf-8' />
      <title>Insect Catch Game</title>
    </Helmet>
    <InsectCatchGame />
  </>
)
export default Wrapper
