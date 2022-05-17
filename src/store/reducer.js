import {CHANG_INPUT_VALUE,ADDITEM,DELETEITEM} from './actionType'



const defaultState={
    inputValue:'111111',
    list:[
        'Racing car sprays burning fuel into crowd.',
    'Japanese princess to wed commoner.',
    'Australian walks 100km after outback crash.',
    'Man charged over missing wedding girl.',
    'Los Angeles battles huge wildfires.',
    ]
}   


let reducerState=(state=defaultState,action)=>{
    if(action.type===CHANG_INPUT_VALUE){
        let newsState=JSON.parse(JSON.stringify(state))
        newsState.inputValue=action.value
        return newsState

    }
    if (action.type===ADDITEM) {
        let newsState=JSON.parse(JSON.stringify(state))

        newsState.list.push(newsState.inputValue)

        newsState.inputValue=''
        
        return newsState
        
    }

    if(action.type===DELETEITEM){
        let newsState=JSON.parse(JSON.stringify(state))
        newsState.list.splice(action.index,1)
        return newsState

    }
    return state


}

export default reducerState