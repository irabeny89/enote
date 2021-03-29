import Link from 'next/link'
import { BiAddToQueue, BiArrowBack } from 'react-icons/bi'

const Add = ({ inputData, onInputChange, handleSave }) =>
  <div className="container">
    <h3 className="d-flex justify-content-between">
      <div>Add Todo</div>
      <Link href="/">
        <button className="btn-lg btn-outline-secondary">
          <BiArrowBack /> back
        </button>
      </Link>
    </h3><hr />
    <textarea className="form-control" value={inputData}
      onChange={onInputChange} /><br />
    <button className="btn-lg btn-block btn-primary"
      onClick={handleSave}
      disabled={`${inputData}` ? false : true}
    ><BiAddToQueue /> Add</button>
  </div>

export default Add