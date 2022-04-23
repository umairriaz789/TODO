import React ,{useState} from "react";
import Table from 'react-bootstrap/Table';
import { DELETE, EDIT,STATUS } from "../Actions";
import { useDispatch} from 'react-redux';
import Button from "react-bootstrap/esm/Button";
import Form from 'react-bootstrap/Form';


const List = ({data}) => {

    const [inputData, setinputData]=useState();
    const [inputstatus, setinputstatus]=useState();
    const [inputeditData, setinputeditData]=useState(false);
    const [inputeditSta, setinputeditSta]=useState(false);
    


    const dispatch = useDispatch();

    
    const handledelete =(id)=>{
        dispatch(DELETE({id}))
    }


    const handleEdit =(task,Sta)=>{
        try{
            
            const payload ={
                title: task,
                Status:Sta,
                id: data.id,
            }
            

            const action = EDIT(payload)
            dispatch(action);
            console.log('action',action)

        }
        catch (error){
            
        }
    }


    return(
        <div>
        
            <div className="comp">
            <Table responsive>
            <tbody>
                <tr>
                    <td>{data.title}</td>
                    <td>{data.Status}</td>
                    <td><Button variant="danger" onClick={()=> handledelete(data.id)}>Delete</Button></td>
                    <td><Button variant="danger" onClick={()=> {
                        setinputeditData(!inputeditData);
                        setinputeditSta(!inputeditSta)

                    }}>Edit</Button></td>
                    {
                        inputeditSta &&  inputeditData ? 
                        <>
                        <input className="form-control" value={inputData}  placeholder={'Edit Items'} onChange={(e) => setinputData(e.target.value)}/>
                        <Form.Select  value={inputstatus} onChange={(e) => setinputstatus(e.target.value)}>
                        <option>status</option>
                        <option value="Active">Active</option>
                        <option value="Inactive">Inactive</option>
                        </Form.Select>
                        <Button onClick={()=> handleEdit(inputData,inputstatus)}>Update</Button>
                        </>
                        
                        : ""
                    }
                
                    
                   
             
                </tr>
            </tbody>

            </Table>
            </div>
        </div>

    )
}

export default List