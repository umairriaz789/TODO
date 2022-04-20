const initialState={
    todoList: [
        {
        title:'First',
        Status : 'Active',
        id: '1'
        }
    ]
}


const todoreducer = (state = initialState , action) => {
    switch (action.type){
        case 'ADD' : {
            return { ...state, todoList: [...state.todoList , action?.payload]}
        }

        case 'DELETE' : {
            return { ...state, todoList: state.todoList.filter((item)=> item.id !== action.payload.id)}
        }


        case 'EDIT':{
            return{ ...state, todoList: state.todoList.map((item)=>{
                if (item.id === action.payload.id){
                    return {
                        ...item,
                         title: action.payload.title,
                         Status: action.payload.Status,
                        
                        }
                }

                else {
                    return item;
                }

            }

            )}
        }





        case 'ALL_DELETE':{
            return {
                ...state , todoList: []
            }
        }

        default: {
            return state
        }
    }

}


export default todoreducer