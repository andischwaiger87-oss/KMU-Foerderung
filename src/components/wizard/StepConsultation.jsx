import React from 'react'
import { motion } from 'framer-motion'
import { Check, X, HelpCircle, ExternalLink } from 'lucide-react'
import styles from './WizardSteps.module.css'

export default function StepConsultation({ onNext }) {
    return (
        <motion.div
            className={styles.stepContainer}
            initial={{ x: 50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: -50, opacity: 0 }}
        >
            <h2 className={styles.question}>Hast du die Beratung absolviert?</h2>
            <p className={styles.description}>
                Für die Umsetzungsförderung brauchst du eine abgeschlossene KMU.DIGITAL Beratung und eine aktive <strong>Projektnummer</strong>.
            </p>

            <div className={styles.options}>
                <button className={styles.optionButton} onClick={() => onNext(true)}>
                    <Check size={24} /> Ja, ich habe eine Projektnummer
                </button>
                <button className={`${styles.optionButton} ${styles.secondary}`} onClick={() => onNext(false)}>
                    <X size={24} /> Nein, noch nicht
                </button>
            </div>

            <div className={styles.infoBox} style={{ marginTop: '2rem', fontSize: '0.9rem', padding: '1rem', background: 'var(--color-surface)', borderRadius: 'var(--radius-md)' }}>
                <p style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.5rem' }}>
                    <HelpCircle size={16} color="var(--color-primary)" />
                    <strong>Warum Beratung?</strong>
                </p>
                <p style={{ color: 'var(--color-text-muted)' }}>
                    Die Beratung ist verpflichtend, um die beste Lösung für Ihr Unternehmen zu finden.
                    Sie wird zu 80% (Statusanalyse) bzw. 50% (Strategie) gefördert.
                </p>
                <a
                    href="https://firmen.wko.at/suche_kmudigital"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ display: 'inline-flex', alignItems: 'center', gap: '4px', marginTop: '0.5rem', color: 'var(--color-primary)', fontWeight: 600 }}
                >
                    Berater finden <ExternalLink size={14} />
                </a>
            </div>
        </motion.div>
    )
}
