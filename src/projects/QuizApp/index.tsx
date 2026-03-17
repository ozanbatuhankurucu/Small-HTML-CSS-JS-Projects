import { Helmet } from 'react-helmet'
import QuizApp from './QuizApp'

const Wrapper = () => (
  <>
    <Helmet>
      <meta charSet='utf-8' />
      <title>Quiz App</title>
    </Helmet>
    <QuizApp />
  </>
)
export default Wrapper
