import Link from 'next/link'
import { BiArrowBack } from 'react-icons/bi'
import { GrDocumentUpdate } from 'react-icons/gr'

const Edit = ({ inputData, onInputChange, handleSave }) => 
  <div className="container">
    <h3 className="d-flex justify-content-between">
      <div>Edit Todo</div>
      <Link href="/">
        <button className="btn-lg btn-outline-secondary">
          <BiArrowBack /> back
        </button>
      </Link>
    </h3><hr />
    <textarea className="form-control" value={inputData}
      onChange={onInputChange} autoFocus /><br />
    <button className="btn-lg btn-block btn-primary"
      onClick={handleSave} disabled={`${inputData}` ? false : true}
    ><GrDocumentUpdate /> Save</button>
  </div>

export default Edit