import { Helmet } from 'react-helmet'
import TodoList from './TodoList'

const Wrapper = () => (
  <>
    <Helmet>
      <meta charSet='utf-8' />
      <title>Todo List</title>
    </Helmet>
    <TodoList />
  </>
)
export default Wrapper
