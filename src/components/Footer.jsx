import React from 'react'

export default function Footer() {
    return (
        <footer style={{
            padding: '2rem',
            textAlign: 'center',
            opacity: 0.8,
            marginTop: 'auto',
            width: '100%'
        }}>
            <p style={{ fontSize: '0.7rem', color: 'var(--color-text-dim)', marginBottom: '0.25rem' }}>
                Ein Service von
            </p>
            <img
                src="/mosaik-logo.png"
                alt="mosaik design"
                style={{ height: '18px', opacity: 0.9 }}
            />
        </footer>
    )
}
