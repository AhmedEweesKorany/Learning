import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import React from 'react'
import Status from './components/Status'
import Heading from './components/Heading'
import Layout from './components/Layout'
import Styles from './components/Styles'

function App() {

    const [ipAddress, setIpAddress] = useState('')
    const [geoInfo,setGeoInfo] = useState({})


    useEffect(()=>{
        getVisitorIp()
    },[])
    const getVisitorIp = async ()=>{
        try {
            const response = await fetch('https://api.ipify.org')
            setIpAddress(await response.text())
        } catch (error) {
            
        }
    }

    const fectchGeo = async()=>{
        try {
            const response = await fetch(`http://ip-api.com/json/${ipAddress}`)
            const data = await response.json()

            console.log(data)
        } catch (error) {
            console.log(error)
        }
    }

return (<>

<Layout >
<button onClick={fectchGeo}>
    Click me ya 3m 
</button>
</Layout>
</>)
}

export default App
