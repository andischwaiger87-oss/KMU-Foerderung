import React from 'react'
import { motion } from 'framer-motion'
import { CheckCircle, ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import styles from './WizardSteps.module.css'

export default function StepResult({ data }) {
    return (
        <motion.div
            className={styles.stepContainer}
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
        >
            <CheckCircle size={64} color="var(--color-accent)" style={{ marginBottom: '1rem' }} />
            <h2 className={styles.question}>Glückwunsch!</h2>
            <p className={styles.description}>
                Dein Projekt ist förderfähig.
            </p>

            <div className={styles.calculatorBox} style={{ width: '100%', marginBottom: '2rem' }}>
                <p style={{ fontSize: '0.9rem', color: 'var(--color-text-muted)' }}>Möglicher Zuschuss</p>
                <div className={styles.grantAmount}>
                    {data.grant.toLocaleString()} €
                </div>
                <p style={{ marginTop: '0.5rem' }}>für {data.investment.toLocaleString()} € Investition</p>
            </div>

            <Link to="/roadmap" className={styles.primaryButton}>
                Wie geht's weiter? <ArrowRight />
            </Link>
        </motion.div>
    )
}
