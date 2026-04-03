import React from 'react'
import styles from './Resources.module.css'
import { ArrowLeft } from 'lucide-react'
import { useNavigate } from 'react-router-dom'

export default function Imprint() {
    const navigate = useNavigate()
    return (
        <div className={styles.container}>
            {/* HIER GEÄNDERT: Header Layout & Pfeil Farbe */}
            <header className={styles.header} style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', marginBottom: '2rem', gap: '1rem', paddingTop: '2rem' }}>
                <button onClick={() => navigate(-1)} className={styles.backLink} style={{ color: 'var(--color-text-main)', background: 'none', border: 'none', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '0.5rem', fontWeight: 500 }}>
                    <ArrowLeft size={24} /> Zurück
                </button>
                <h1 className={styles.title} style={{ margin: 0 }}>Impressum</h1>
            </header>
            <div className={styles.content}>
                {/* HIER GEÄNDERT: Harte Textfarbe "white" (bei "mosaik") entfernt, damit es im Light Mode lesbar bleibt */}
                <div style={{ background: 'var(--color-surface)', padding: '1.5rem', borderRadius: 'var(--radius-lg)', color: 'var(--color-text-muted)', lineHeight: '1.6', boxShadow: 'var(--shadow-sm)' }}>
                    <p><strong>Für den Inhalt verantwortlich:</strong></p>

                    <p style={{ marginTop: '1rem', color: 'var(--color-text-main)', fontWeight: 'bold' }}>
                        mosaik
                    </p>
                    <p>
                        Schwaiger Andreas<br />
                        Niederland 162<br />
                        5091 Unken<br />
                        Österreich
                    </p>

                    <p style={{ marginTop: '1rem' }}>
                        <strong>Kontakt:</strong><br />
                        E-Mail: <a href="mailto:hallo@mosaik-design.at" style={{ color: 'var(--color-primary)' }}>hallo@mosaik-design.at</a><br />
                        Tel: <a href="tel:+4367764054347" style={{ color: 'var(--color-primary)' }}>+43 677 640 54 347</a>
                    </p>

                    <p style={{ marginTop: '1rem' }}>
                        <strong>Unternehmensgegenstand:</strong><br />
                        Einzelunternehmen
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