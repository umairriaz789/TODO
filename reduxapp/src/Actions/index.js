export const ADD = ({title, Status,id}) => ({
    type:'ADD',
    payload:{
        title,
        Status,
        id
    } 
})


export const DELETE = ({id}) => ({
    type:'DELETE',
    payload:{
        id,
    } 
})



export const EDIT = ({title,Status,id}) => ({
    type:'EDIT',
    payload:{
        title,
        Status,
        id
    } 
})


export const ALLDELETE = () => ({
    type:'ALL_DELETE'
})


export const ACTIVE= ({title,Status}) => ({
    type:'ACTIVE',
    payload:{
        title,
        Status
    } 
})