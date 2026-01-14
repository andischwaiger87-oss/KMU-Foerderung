import React from 'react'
import { useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowRight, Zap, Euro, ShieldCheck } from 'lucide-react'
import styles from './Home.module.css'
import Checklist from '../components/Checklist'

export default function Home() {
    const navigate = useNavigate()

    return (
        <div className={styles.container}>
            {/* Top Bar with FAQ Link */}
            {/* Top Bar with FAQ Link */}
            <div style={{ position: 'absolute', top: '1rem', right: '1rem', zIndex: 10 }}>
                <button
                    onClick={() => navigate('/faq')}
                    style={{
                        background: 'transparent',
                        border: '2px solid white',
                        borderRadius: '50%',
                        width: '40px',
                        height: '40px',
                        color: 'white',
                        fontSize: '1.2rem',
                        fontWeight: 'bold',
                        cursor: 'pointer',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        backdropFilter: 'blur(5px)'
                    }}
                >
                    ?
                </button>
            </div>

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
                        Förder-Check starten <ArrowRight />
                    </button>
                </motion.div>
            </header>

            <section className={styles.benefits}>
                <BenefitCard
                    icon={Zap}
                    title="Schnelle Prüfung"
                    desc="Erfahre sofort, ob du förderfähig bist."
                    delay={0.2}
                />
                <BenefitCard
                    icon={Euro}
                    title="30% Zuschuss"
                    desc="Für Investitionen von 2.000 € bis 30.000 €."
                    delay={0.4}
                />
                <BenefitCard
                    icon={ShieldCheck}
                    title="Sicher & Offiziell"
                    desc="Basierend auf den aktuellen KMU.DIGITAL Richtlinien."
                    delay={0.6}
                />
            </section>

            <section style={{ width: '100%', maxWidth: '600px', marginTop: '2rem' }}>
                <Checklist />
            </section>
        </div>
    )
}

function BenefitCard({ icon: Icon, title, desc, delay }) {
    return (
        <motion.div
            className={styles.card}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay, duration: 0.5 }}
        >
            <div className={styles.iconWrapper}>
                <Icon size={24} />
            </div>
            <h3 className={styles.cardTitle}>{title}</h3>
            <p className={styles.cardDesc}>{desc}</p>
        </motion.div>
    )
}
