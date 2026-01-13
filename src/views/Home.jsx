import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowRight, Zap, ShieldCheck, TrendingUp } from 'lucide-react'
import styles from './Home.module.css'

export default function Home() {
    return (
        <div className={styles.container}>
            <motion.header
                className={styles.hero}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
            >
                <div className={styles.badge}>KMU.DIGITAL</div>
                <h1 className={styles.title}>
                    Förderung <span className={styles.highlight}>einfach</span> gemacht.
                </h1>
                <p className={styles.subtitle}>
                    Der schnellste Weg zu deiner Umsetzungsförderung.
                    Checke deine Chancen in unter 2 Minuten.
                </p>

                <Link to="/check" className={styles.ctaButton}>
                    Jetzt Förderung prüfen <ArrowRight size={20} />
                </Link>
            </motion.header>

            <motion.section
                className={styles.benefits}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4, duration: 0.8 }}
            >
                <div className={styles.card}>
                    <TrendingUp className={styles.icon} />
                    <h3>Bis zu 6.000€</h3>
                    <p>30% Zuschuss für dein Projekt</p>
                </div>
                <div className={styles.card}>
                    <Zap className={styles.icon} />
                    <h3>Schnell & Klar</h3>
                    <p>Kein Bürokratie-Dschungel</p>
                </div>
                <div className={styles.card}>
                    <ShieldCheck className={styles.icon} />
                    <h3>Offiziell</h3>
                    <p>Basierend auf WKO Richtlinien</p>
                </div>
            </motion.section>
        </div>
    )
}
