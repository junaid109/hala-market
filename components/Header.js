import React from 'react'

const style = {
    header: {
        backgroundColor: '#333',
        color: '#fff',
        padding: '10px'
    },
    h1: {
        fontSize: '24px'
    }
}

export default function Header() {
  return (
    <header style={style.header}>
        <h1 style={style.h1}>Hala Market</h1>
    </header>
    
  )
}
