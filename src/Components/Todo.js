import { BiEdit, BiTrash } from 'react-icons/bi'

const Todo = ({ sn, todo, done, id, handleCheck }) => 
  <>
    <div className="row h5">
      <div className="col-2">{sn}.</div>
      <div className="col-7">{todo}</div>
      <div className="col-3">
        <input type="checkbox" checked={done}
          onChange={() => handleCheck(id)} />
      </div>
    </div>
    <div className="d-flex justify-content-around">
      <div className="btn btn-warning"><BiEdit /> Edit</div>
      <div className="btn btn-danger"><BiTrash /> Delete</div>
    </div>
    <hr />
  </>

export default Todo;