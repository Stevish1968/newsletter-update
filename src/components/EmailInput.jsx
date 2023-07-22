import { TextField } from '@mui/material'
import { useState } from 'react'

function EmailInput({ setIsSubmitted, email, setEmail }) {

    const handleSubmit = (e) => {
        e.preventDefault();
        setIsSubmitted(true)
        setEmail(e.target.email.value)
    }

    return (
        <div className="email">
            <p>Email Address</p>
            <form onSubmit={handleSubmit}>
                <TextField
                    name='email'
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    helperText={!email ? 'Please enter a valid email address' : ''}
                    color='primary'
                    error={!email}
                    variant='outlined'
                    label='Email'
                    sx={{
                        width: '100%'
                    }}
                />
                <button className='btn'>Subscribe monthly newsletter</button>
            </form>
        </div>
    )
}

export default EmailInput