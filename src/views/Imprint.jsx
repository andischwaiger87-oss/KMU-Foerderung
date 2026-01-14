import React from 'react'
import styles from './Resources.module.css'
import { ArrowLeft } from 'lucide-react'
import { useNavigate } from 'react-router-dom'

export default function Imprint() {
    const navigate = useNavigate()
    return (
        <div className={styles.container}>
            <header className={styles.header}>
                <button onClick={() => navigate(-1)} className={styles.backLink} style={{ color: 'white', background: 'none', border: 'none', cursor: 'pointer' }}>
                    <ArrowLeft size={24} />
                </button>
                <h1 className={styles.title}>Impressum</h1>
            </header>
            <div className={styles.content}>
                <div style={{ background: 'var(--color-surface)', padding: '1.5rem', borderRadius: 'var(--radius-lg)', color: 'var(--color-text-muted)', lineHeight: '1.6' }}>
                    <p><strong>Für den Inhalt verantwortlich:</strong></p>

                    <p style={{ marginTop: '1rem', color: 'white', fontWeight: 'bold' }}>
                        mosaik Webdesign & IT-Support
                    </p>
                    <p>
                        [Inhaber Name]<br />
                        [Adresse]<br />
                        5xxx Salzburg<br />
                        Österreich
                    </p>

                    <p style={{ marginTop: '1rem' }}>
                        <strong>Kontakt:</strong><br />
                        E-Mail: hallo@mosaik-design.at<br />
                        Tel: 0664 970 42 46
                    </p>

                    <p style={{ marginTop: '1rem' }}>
                        <strong>Unternehmensgegenstand:</strong><br />
                        Werbeagentur
                    </p>
                    <p style={{ marginTop: '1rem' }}>
                        <strong>EU-Streitschlichtung:</strong><br />
                        Angaben zur Online-Streitbeilegung: Verbraucher haben die Möglichkeit, Beschwerden an die Online-Streitbeilegungsplattform der EU zu richten: <a href="https://ec.europa.eu/consumers/odr" style={{ color: 'var(--color-primary)' }}>https://ec.europa.eu/consumers/odr</a>.
                    </p>
                </div>
            </div>
        </div>
    )
}
