import React ,{useState} from "react";
import {useSelector, useDispatch} from 'react-redux';
import {ADD, ALLDELETE} from '../Actions/index';
import List from "./list";
import { v4 as uuid } from 'uuid';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import '../App.css';
import Table from "react-bootstrap/esm/Table";


const Todo =()=> {
    
    const [inputData, setinputData]=useState();
    const [inputstatus, setinputstatus]=useState();

    const list = useSelector ((val) =>
    {
        return val.todoreducer.todoList
    })


    console.log(list);
    const dispath = useDispatch();

    const handletodo =(task,Sta)=>{
        try{
            if (!task) throw 'Empty'
            const payload ={
                title: task,
                Status:Sta,
                id: uuid(),
            }
            

            const action = ADD(payload)
            dispath(action);

        }
        catch (error){
            
        }
    }



    return (
        <div>
            <div>
                <input className="form-control" value={inputData}  placeholder={'Add Items'} onChange={(e) => setinputData(e.target.value)}/>
                <Form.Select  value={inputstatus} onChange={(e) => setinputstatus(e.target.value)}>
                <option>status</option>
                <option value="Active">Active</option>
                <option value="Inactive">Inactive</option>
                </Form.Select>
                <div className="button">
                <Button onClick={()=>handletodo(inputData,inputstatus)}>Add Todo</Button>
                </div>

            <div>
                <Table>
                <div>
            <Table responsive>
                <thead>
                <tr>

                 <th>TITLE</th>
                 <th>STATUS</th>
                 <th>DELETE</th>
                 <th>EDIT</th>
               </tr>
            </thead>
                </Table>
            </div>
                </Table>
            </div>

            </div>
            {
                list.map((item) => {
                    return (
                       <div key={item.id}>
                        <List data={item}/>
                        </div>
                     
                    )
                })
            }
            
             <Button variant="danger" onClick={()=>dispath(ALLDELETE())}>Delete All</Button>
        </div>
        
    )
}

export default Todo