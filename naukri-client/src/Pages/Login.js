import React from 'react'
import Container from '../BuildingBlocks/Container/Container'
import Login from '../Components/Login/Login'
import Navbar from '../Components/Navbar/Navbar'

export default function LoginPage() {
    return (
        <Container className="login-container">
            <Navbar />
            <Login />
        </Container>
    )
}
