import React from 'react'
import { Info } from 'lucide-react'

// Hinweis: KMU.DIGITAL nimmt keine Anträge mehr an (Stand Herbst 2026, Quelle kmudigital.at)
export default function ProgramNotice() {
    return (
        <div
            role="note"
            style={{
                display: 'flex',
                alignItems: 'flex-start',
                gap: '0.6rem',
                margin: '4rem auto 0',
                width: 'calc(100% - 2rem)',
                maxWidth: '720px',
                padding: '0.9rem 1.1rem',
                borderRadius: 'var(--radius-md)',
                border: '1px solid rgba(111, 0, 255, 0.35)',
                background: 'var(--color-surface-glass)',
                color: 'var(--color-text-main)',
                boxShadow: 'var(--shadow-sm)',
                fontSize: '0.95rem',
                lineHeight: 1.5
            }}
        >
            <Info size={20} style={{ flex: 'none', marginTop: '2px', color: 'var(--color-primary)' }} aria-hidden="true" />
            <p style={{ margin: 0 }}>
                <strong>Hinweis:</strong> Das Budget von KMU.DIGITAL ist ausgeschöpft. Anträge sind nicht mehr möglich,
                ab 2027 wird das Programm nicht fortgeführt. Die Inhalte bleiben zur Orientierung online.{' '}
                <a href="https://kmudigital.at/" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--color-primary)' }}>
                    Aktueller Stand auf kmudigital.at
                </a>
            </p>
        </div>
    )
}
