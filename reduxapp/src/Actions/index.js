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


export const STATUS= ({Status,id}) => ({
    type:'STATUS',
    payload:{
        Status,
        id
    } 
})