import React from 'react'
import { motion } from 'framer-motion'
import { Check, X } from 'lucide-react'
import styles from './WizardSteps.module.css'

export default function Step1Status({ onNext }) {
    return (
        <motion.div
            className={styles.stepContainer}
            initial={{ x: 50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: -50, opacity: 0 }}
        >
            <h2 className={styles.question}>Bist du ein österreichisches KMU?</h2>
            <p className={styles.description}>
                Die Förderung richtet sich an kleine und mittlere Unternehmen (KMU) mit Niederlassung in Österreich.
            </p>

            <div className={styles.options}>
                <button className={styles.optionButton} onClick={() => onNext(true)}>
                    <Check size={24} /> Ja, wir sind ein KMU
                </button>
                <button className={`${styles.optionButton} ${styles.secondary}`} onClick={() => onNext(false)}>
                    <X size={24} /> Nein / Unsicher
                </button>
            </div>
        </motion.div>
    )
}
