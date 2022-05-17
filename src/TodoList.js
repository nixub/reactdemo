import React, { Component } from 'react'

import 'antd/dist/antd.css'


import store from './store';

import { TodoListUi } from './TodoListUi';

import {inputchangeAction,changebuttonAction,deleteitemAction} from './store/actionCreate'






class  TodoList extends Component {

    constructor(props){

        super(props)
    //关键代码-----------start
        this.state=store.getState();
    //关键代码-----------end
        

        this.inputchange=this.inputchange.bind(this)
        this.storeChange=this.storeChange.bind(this)
        this.changebutton=this.changebutton.bind(this)
        this.deleteitem=this.deleteitem.bind(this)
        store.subscribe(this.storeChange)
        


    }

    

    render() { 
        
// 业务与组件分离， 就涉及到父子组件传值。
        return ( 
            <TodoListUi 
            inputValue={this.state.inputValue}

            List ={this.state.list}

            inputchange={this.inputchange}

            changebutton={this.changebutton}

            deleteitem={this.deleteitem}

            />
            
         );
    }


    inputchange(e){
        const action=inputchangeAction(e.target.value)
        store.dispatch(action)
    
    }
    // 监听数据变化
    storeChange(){
        this.setState(store.getState())
    }
    changebutton(){
        
        const action=changebuttonAction()
        store.dispatch(action)
    }

    deleteitem(index){
        console.log('delete正常')

        const action=deleteitemAction(index)
        store.dispatch(action)
    }

}

 
export default  TodoList;


