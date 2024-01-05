import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { deletehistory, getallhistory } from '../services/allapi';

export default function Watchhistory() {
  const [history, sethistory] = useState([])
  async function Watchhistory() {
    const response = await getallhistory();
    const { data } = response;
    sethistory(data)
  }
  useEffect(() => {
    Watchhistory();
  }, [])
  const handleDelete = async (id) => {
    await deletehistory(id);
    Watchhistory();
  }
  return (
    <>
      <div className='container mt-5 mb-5 d-flex justify-content-between'>
        <h5>Watch History</h5>
        <Link style={{ textDecoration: "none", color: "white", fontSize: "15px" }} to="/home"><i class='fa-solid fa-arrow-left'></i> Back to Home</Link>
      </div>

      <table className='table container mb-5'>
        <thead>
          <tr>
            <th>Sl no.</th>
            <th>Caption</th>
            <th>Url</th>
            <th>TimeStamp</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {
            history.length > 0 ?
              history.map((item, index) => (
                <tr>
                  <td>{index + 1}</td>
                  <td>{item.caption}</td>
                  <td>{item.embededLink}</td>
                  <td>{item.timestamp}</td>
                  <td><button onClick={() => handleDelete(item.id)} className='btn btn-danger'><i class="fa-solid fa-trash"></i></button></td>

                </tr>

              ))
              :
              <p>NO watch History Found</p>
          }

        </tbody>
      </table>

    </>

  )
}

