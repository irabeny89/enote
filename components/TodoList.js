import Todo from './Todo'

const TodoList = ({ todos, handleCheck, handleRemove }) =>
  <div style={{ minHeight: "73vh" }} className="container">
    <div className="row h5">
      <div className="col-2">No.</div>
      <div className="col-7">Todo</div>
      <div className="col-3">Done?</div>
    </div><hr />
    {todos.map((todoItem, i) =>
      <Todo key={todoItem.id} {...todoItem} sn={i + 1}
        handleCheck={handleCheck} handleRemove={handleRemove} />)}
  </div>

export default TodoList