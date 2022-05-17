import {CHANG_INPUT_VALUE,ADDITEM,DELETEITEM} from './actionType'

export const inputchangeAction= (value)=>({
    type:CHANG_INPUT_VALUE,
    value
})


export const changebuttonAction=()=>(
    {
        type:ADDITEM
    }
    
)
export const deleteitemAction =(index)=>({
    type:DELETEITEM,
            index
})