import React, { useEffect } from 'react'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import { addcategory, deletecategory, getAllCategory, getVideoDetailsByID, updateCategory } from '../services/allapi';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function Category() {
  const [show, setShow] = useState(false);
const[allcategory,setallcategory]=useState([])
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [categoryName, setCategoryName] = useState()
  const handleAddCategory = async () => {
    if (categoryName) {
      let body = {
        categoryName: categoryName,
        allVideos: []
      }

      const response = await addcategory(body);
      if (response.status == 201) {
        toast.success(`successfully inserted ${ categoryName }`);
        handleClose();
        getAllCat();
      }
      else {
        toast.danger("something went wrong")
      }
    }
    else {
      toast.warn("please enter  a category name")
    }
  }
  const getAllCat = async()=>{
    const response = await getAllCategory();
    const {data}=response;
    setallcategory(data);
  }
  const Deletecategory = async (id) => {
    await deletecategory(id);
    getAllCat();
  }

  useEffect(()=>{
    getAllCat();
  },[])

  const dragOver=(e)=>{
    e.preventDefault()
  }

  const drop=async(e,categoryID)=>{
        const videoid=e.dataTransfer.getData("videoID")
        const res=await getVideoDetailsByID(videoid)
        const {data}=res;
        let selectedcategory=allcategory?.find((item)=>item.id==categoryID)
        selectedcategory.allVideos.push(data);
        console.log(selectedcategory);
        const result=await updateCategory(categoryID,selectedcategory);
  }
  
  return (
    <>
      <div className=''>

        <button className='btn btn-warning' onClick={handleShow}>Add New Category</button>

      </div>

      <div className='mt-3'>
        {
        allcategory.length>0?
        allcategory.map((item)=>(
        <div className='ms-2 mt-2 border border-secondary rounded p-3' droppable onDragOver={(e)=>dragOver(e)} onDrop={(e)=>drop(e,item.id)}>
          <div className='d-flex justify-content-between align-items-center'>
            <h6>{item.categoryName}</h6>
            <button className='btn btn-danger ms-2' onClick={() => Deletecategory(item.id)}>
              <i class="fa-solid fa-trash"></i>
            </button>
          </div>
        </div>
        )):
        <p>No Category</p>
        }
        
      </div>

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title><i class="fa-solid fa-layer-group text-warning me-3"></i>Add Category</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>Please Fill The Form</p>
          <Form className='border border-secondary p-3 rounded'>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Control type="text" placeholder="Enter Category Name" onChange={(e)=>setCategoryName(e.target.value)}/>
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="warning" onClick={handleAddCategory}>Add Category</Button>
        </Modal.Footer>
      </Modal>
      <ToastContainer position="top-center" autoClose={1500} theme="colored"/>
    </>
  )
}

export default Category