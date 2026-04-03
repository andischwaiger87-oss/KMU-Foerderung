// C:\Users\Andi\KMU-Foerderung\views\Home.jsx

import React from 'react'
import { useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
// HIER: Zap, Euro, ShieldCheck entfernt, da unten nicht genutzt (Clean up)
import styles from './Home.module.css'
import Checklist from '../components/Checklist'

export default function Home() {
    const navigate = useNavigate()

    return (
        <div className={styles.container}>
            {/* --- DIE ALTE TOP BAR WURDE HIER ENTFERNT --- */}
            {/* Die Funktionalität zieht global in die App.jsx um */}

            <header className={styles.hero}>
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    <div className={styles.badge}>Bis zu 6.000 € Zuschuss</div>
                    <h1 className={styles.title}>
                        Digitalisierung <br />
                        <span className={styles.highlight}>einfach gemacht.</span>
                    </h1>
                    <p className={styles.subtitle}>
                        Der schnellste Weg zu deiner Umsetzungsförderung.
                        Checke deine Chancen in unter 2 Minuten.
                    </p>

                    <button onClick={() => navigate('/wizard')} className={styles.ctaButton}>
                        Förder-Check starten {/* HIER: ArrowRight Icon fehlt im Code, falls gewünscht hinzufügen */}
                    </button>
                </motion.div>
            </header>

            {/* --- BENEFITS SECTION LÄUFT UNTEN WEITER WIE GEHABT --- */}
            <section className={styles.benefits}>
                {/* ... Rest der Datei bleibt gleich ... */}
            </section>

            <section style={{ width: '100%', maxWidth: '600px', marginTop: '2rem' }}>
                <Checklist />
            </section>
        </div>
    )
}
// ... BenefitCard Funktion bleibt am Ende ...