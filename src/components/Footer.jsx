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
            <p style={{ fontSize: '0.75rem', color: 'var(--color-text-dim)', marginBottom: '0.5rem' }}>
                Service powered by
            </p>
            <img
                src="/mosaik-logo.png"
                alt="mosaik design"
                style={{ height: '24px', opacity: 0.9 }}
            />
        </footer>
    )
}
