import { useState } from 'react'
import './App.css'
import {Button, Card, Typography} from '@mui/material'
import { RecoilRoot, useRecoilValue , useSetRecoilState, atom} from 'recoil'

function App() {

  return (
    <RecoilRoot>
    <div style={{display:"flex", justifyContent:"center"}}>
    <Card style={{padding:10, width:500}}>
    <Typography variant="h5" style={{ textAlign: "center" }}>
      Counter
      </Typography>
      <br/>
      <br/>
      <br/>
      <Buttons />
      <CountComponent />
    </Card>
    </div>
   </RecoilRoot>
  )
}
function Buttons(){
  return <div style={{display:"flex", justifyContent:"space-between"}}>
    <Increase />
    <Decrease />
  </div>
}

function Increase(){
  const setCount = useSetRecoilState(countState);
  return <div>
    <Button variant={"contained"} onClick={()=>{
      setCount(existingCount => existingCount + 1) //setCount gives the existingCount as an argument to the inner function and updates it's
                                                   //state with whatever the function returns. 
    }}>Increase</Button>
  </div>
}
function Decrease(){
  const setCount = useSetRecoilState(countState);
  return <div>
    <Button variant={"contained"} onClick={()=>{
      setCount(existingCount => existingCount - 1)
    }}>Decrease</Button>
  </div>
}

function CountComponent(){
  const count = useRecoilValue(countState)
  return<div>
    <Typography variant='h5' textAlign={"center"}>{count}</Typography>
  </div>
}

export default App

const countState = atom({
  key: 'countState',
  default: 0
}); 