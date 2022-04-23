import React ,{useState} from "react";
import Offcanvas from 'react-bootstrap/Offcanvas';
import Button from 'react-bootstrap/Button';
import List from "./list";
import {useSelector} from 'react-redux';

function OffCanvasExample({ name, ...props }) {
    const [show, setShow] = useState(false);
  
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    
    
    const list = useSelector ((val) =>
    {
        return val.todoreducer.todoList
    })
 


  
    return (
      <>
        <Button variant="primary" onClick={handleShow} className="me-2">
          {name}
        </Button>
        <Offcanvas show={show} onHide={handleClose} {...props}>
          <Offcanvas.Header closeButton>
            <Offcanvas.Title>List of InActive Products</Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
          {
                list.map((item) => {
                  if (item.Status === 'Inactive')
                    return (
                       <div key={item.id}>
                        <List data={item}/>
                        </div>
                     
                    )
                })
            }
          </Offcanvas.Body>
        </Offcanvas>
      </>
    );
  }
  
export default function Inactive() {
    return (
      <>
        {['InActive Status'].map((placement, idx) => (
          <OffCanvasExample key={idx} placement={placement} name={placement} />
        ))}
      </>
    );
  }
  
