import React,{useState} from 'react'
import AddIcon from '@mui/icons-material/Add';
import Button from '@mui/material/Button';
import { v4 as uuidv4 } from 'uuid';
import TextField from '@mui/material/TextField';

const AddList = () => {

 const [list, setList] = useState(true) 

  const addList=()=>{
    setList(l=>!l);
  }
  return (
    <div>
      <div className='List_btn_div'>
      <Button variant="outlined" className='List_add_btn' onClick={()=>addList()}> <AddIcon/>  Add List</Button> 
      </div>
      {list &&
      <div className='List_add_class'>
        <TextField/>
      </div>}
    </div>
  )
}

export default AddList