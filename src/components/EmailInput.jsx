import { TextField } from '@mui/material'
import { useState } from 'react'

function EmailInput({ setIsSubmitted, email, setEmail }) {

    const [error, setError] = useState(true)

    const handleSubmit = (e) => {
        e.preventDefault();
        if (e.target.email.value === '') {
            setError(false)
            setIsSubmitted(false)
            return
        }
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
                    helperText={!error ? 'Please enter a valid email address' : ''}
                    color='primary'
                    error={!error}
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