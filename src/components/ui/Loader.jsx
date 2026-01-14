import React from 'react'
import { motion } from 'framer-motion'
import styles from './Loader.module.css'

export default function Loader() {
    return (
        <div className={styles.container}>
            <motion.div
                className={styles.spinner}
                animate={{ rotate: 360 }}
                transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
            />
        </div>
    )
}
