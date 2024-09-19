import { Button } from "@mui/material"
import axios from "axios"

const Index = () => {
  const createCategory = async()=> {
    try {
      const response = await axios.post
    } catch (error) {
      console.log(error)
    }
  }
  return (
    <div><h1>Students</h1>
  
    <Button variant="outlined" color='primary' onClick={createCategory}>Create</Button>
    </div>

  )
}

export default Index