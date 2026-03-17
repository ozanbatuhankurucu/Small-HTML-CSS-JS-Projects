import { Helmet } from 'react-helmet'
import NotesApp from './NotesApp'

const Wrapper = () => (
  <>
    <Helmet>
      <meta charSet='utf-8' />
      <title>Notes App</title>
    </Helmet>
    <NotesApp />
  </>
)
export default Wrapper
