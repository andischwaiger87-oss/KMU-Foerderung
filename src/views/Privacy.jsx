import React from 'react'
import styles from './Resources.module.css'
import { ArrowLeft } from 'lucide-react'
import { useNavigate } from 'react-router-dom'

export default function Privacy() {
    const navigate = useNavigate()
    return (
        <div className={styles.container}>
            <header className={styles.header}>
                <button onClick={() => navigate(-1)} className={styles.backLink} style={{ color: 'white', background: 'none', border: 'none', cursor: 'pointer' }}>
                    <ArrowLeft size={24} />
                </button>
                <h1 className={styles.title}>Datenschutz</h1>
            </header>
            <div className={styles.content}>
                <div style={{ background: 'var(--color-surface)', padding: '1.5rem', borderRadius: 'var(--radius-lg)', color: 'var(--color-text-muted)', lineHeight: '1.6' }}>
                    <h2>Datenschutzerklärung</h2>
                    <p><strong>Verantwortlicher:</strong></p>
                    <p>Schwaiger Andreas<br />Niederland 162<br />5091 Unken</p>

                    <h3>1. Speicherung von Daten</h3>
                    <p>Diese App speichert Daten (Checklisten-Fortschritt) ausschließlich lokal auf Ihrem Endgerät (LocalStorage). Es werden keine personenbezogenen Daten an externe Server gesendet.</p>

                    <h3>2. Hosting</h3>
                    <p>Diese App wird gehostet bei Cloudflare Pages. Cloudflare verarbeitet technische Verbindungsdaten (IP-Adresse, Browser), um die Sicherheit und Verfügbarkeit zu gewährleisten. Weitere Infos: <a href="https://www.cloudflare.com/privacypolicy/" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--color-primary)' }}>Cloudflare Privacy Policy</a>.</p>

                    <h3>3. Ihre Rechte</h3>
                    <p>Sie haben das Recht auf Auskunft, Berichtigung, Löschung und Einschränkung der Verarbeitung Ihrer personenbezogenen Daten.</p>
                </div>
            </div>
        </div>
    )
}
