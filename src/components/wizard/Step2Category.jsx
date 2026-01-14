import React from 'react'
import { motion } from 'framer-motion'
import { ShoppingCart, Shield, Settings, FileText } from 'lucide-react'
import styles from './WizardSteps.module.css'

const categories = [
    { id: 'ecommerce', label: 'E-Commerce & Marketing', icon: ShoppingCart },
    { id: 'security', label: 'IT- & Cybersecurity', icon: Shield },
    { id: 'processes', label: 'Geschäftsmodelle & Prozesse', icon: Settings },
    { id: 'admin', label: 'Digitale Verwaltung', icon: FileText },
]

export default function Step2Category({ onNext }) {
    return (
        <motion.div
            className={styles.stepContainer}
            initial={{ x: 50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: -50, opacity: 0 }}
        >
            <h2 className={styles.question}>Was planst du?</h2>
            <div className={styles.grid}>
                {categories.map((cat) => (
                    <button key={cat.id} className={styles.card} onClick={() => onNext(cat.id)}>
                        <cat.icon size={32} className={styles.icon} />
                        <span>{cat.label}</span>
                    </button>
                ))}
            </div>
        </motion.div>
    )
}
