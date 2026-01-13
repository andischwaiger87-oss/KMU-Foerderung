import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Calculator, ArrowRight } from 'lucide-react'
import styles from './WizardSteps.module.css'

export default function Step3Calculator({ onFinish }) {
    const [investment, setInvestment] = useState(5000)
    const grant = Math.min(Math.round(investment * 0.3), 6000)
    const isEligible = investment >= 2000 && investment <= 30000

    return (
        <motion.div
            className={styles.stepContainer}
            initial={{ x: 50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: -50, opacity: 0 }}
        >
            <h2 className={styles.question}>Investitionshöhe?</h2>

            <div className={styles.calculatorBox}>
                <div className={styles.inputGroup}>
                    <label>Geplante Kosten (Netto)</label>
                    <div className={styles.amountDisplay}>{investment.toLocaleString()} €</div>
                    <input
                        type="range"
                        min="0"
                        max="35000"
                        step="500"
                        value={investment}
                        onChange={(e) => setInvestment(Number(e.target.value))}
                        className={styles.slider}
                    />
                </div>

                <div className={styles.resultGroup}>
                    <div className={styles.label}>Mögliche Förderung (30%)</div>
                    <div className={styles.grantAmount}>
                        {grant.toLocaleString()} €
                    </div>
                    {!isEligible && (
                        <div className={styles.warning}>
                            Projektvolumen muss zwischen 2.000 € und 30.000 € liegen.
                        </div>
                    )}
                </div>
            </div>

            <button
                className={styles.primaryButton}
                disabled={!isEligible}
                onClick={() => onFinish({ investment, grant })}
            >
                Ergebnis anzeigen <ArrowRight />
            </button>
        </motion.div>
    )
}
