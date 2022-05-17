import React from 'react'
import 'antd/dist/antd.css'
import { Input , Button , List } from 'antd'



export const TodoListUi = (props) => {
  
    return ( 
        <div style={{margin:'10px'}}>
            <div>

                <Input 
                placeholder='jspang'
                style={{ width:'250px', marginRight:'10px'}}
                onChange={props.inputchange}
                value={props.inputValue}

                
                />
                <Button type="primary"
                onClick={props.changebutton}
                
                >增加</Button>
            </div>
            <div style={{margin:'10px',width:'300px'}}>
                <List
                    bordered
                    //关键代码-----------start
                    dataSource={props.List}
                    //关键代码-----------end
                    renderItem={(item,index)=>(<List.Item onClick={()=>{props.deleteitem(index)}}>
                    {item}
                </List.Item>)}
                />    
            </div>
        </div>
     );
}