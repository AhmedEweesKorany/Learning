import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import SayHello from './components/SayHello'
import React from 'react'
import Status from './components/Status'
import Heading from './components/Heading'
import Layout from './components/Layout'
import Styles from './components/Styles'

function App() {
return (<>

<Status status = "loading"/>
<Layout >
<Styles styles={{display:"flex",fontSize:"20px"}} />

</Layout>
</>)
}

export default App
