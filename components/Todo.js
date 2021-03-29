import Link from 'next/link';
import { BiEdit, BiTrash } from 'react-icons/bi'

const Todo = ({ sn, todo, done, id, createdAt, handleCheck, handleDelete }) =>
  <div>
    <div className="text-center">{createdAt}</div>
    <div className="row h5">
      <div className="col-2">{sn}.</div>
      <div className="col-7 overflow-auto">{todo}</div>
      <div className="col-3">
        <input type="checkbox" checked={done}
          onChange={() => handleCheck(id)} />
      </div>
    </div>
    <div className="d-flex justify-content-around">
      <Link href={`/edit/${id}`}>
        <button className="btn btn-warning">
          <BiEdit /> Edit
        </button>
      </Link>
      <button className="btn btn-danger" onClick={() => handleDelete(id)}>
        <BiTrash /> Delete
      </button>
    </div>
    <hr />
  </div>

export default Todo;