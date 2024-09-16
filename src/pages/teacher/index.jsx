import { useEffect } from "react"
import axios from "axios"
import { useState } from "react"
import { TeacherTable, TeacherModal } from "@components"
import Button from "@mui/material/Button/Button"

const Index = () => {
  const [data, setData] = useState([])
  const [course, setCourse] = useState([])
  const [open, setOpen] = useState(false)
    useEffect(()=> {
        axios.get("http://localhost:3000/teacher").then(res=> {
            setData(res?.data)
        })
    }, [])
    const handleClose =()=> {
      setOpen(false)
    }
    const openModal = async() => {
      const res = await axios.get("http://localhost:3000/course").then(res => {
        setCourse(res?.data)
      })
      setOpen(true)

    }
  return (
    <div>
    <TeacherTable data={data}/>
    <Button variant="contained" color="primary" onClick={openModal} style={{
      marginTop: "20px"
    }}>Open Modal</Button>
    <TeacherModal  open={open} handleClose={handleClose} course={course}/>
      </div>
  )
}

export default Index