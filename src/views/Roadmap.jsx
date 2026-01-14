import React from 'react'
import { motion } from 'framer-motion'
import { FileText, Play, CheckSquare, Clock, AlertTriangle, Users } from 'lucide-react'
import styles from './Roadmap.module.css'
import { Link } from 'react-router-dom'

const steps = [
    {
        id: 1,
        title: 'Verpflichtende Beratung',
        icon: Users,
        content: (
            <span>
                Vor dem Antrag MÜSSEN Sie eine KMU.DIGITAL Beratung absolvieren. <a href="https://firmen.wko.at/suche_kmudigital" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--color-accent)', textDecoration: 'underline' }}>Hier Berater finden.</a>
            </span>
        ),
        warning: 'Ohne Projektnummer kein Antrag!'
    },
    {
        id: 2,
        title: 'Antragstellung (Umsetzung)',
        icon: FileText,
        content: (
            <span>
                Reiche den Antrag im <a href="https://foerdermanager.aws.at/" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--color-accent)', textDecoration: 'underline' }}>Fördermanager</a> ein. Du brauchst dafür deine Projektnummer aus der Beratung. WICHTIG: Noch keine Bestellungen tätigen!
            </span>
        ),
        warning: 'Erst beantragen, dann beauftragen!'
    },
    {
        id: 3,
        title: 'Genehmigung',
        icon: Clock,
        content: 'Warte auf die Zusage. Ab Erhalt des Bestätigungs-Emails hast du "Grünes Licht" für die Umsetzung.'
    },
    {
        id: 4,
        title: 'Umsetzung',
        icon: Play,
        content: 'Setze dein Projekt um. Bezahle alle Rechnungen per Überweisung. Zeitraum: 3 bis 6 Monate.'
    },
    {
        id: 5,
        title: 'Abrechnung',
        icon: CheckSquare,
        content: 'Lade alle Rechnungen und Zahlungsbelege im Fördermanager hoch. Der Zuschuss wird ausgezahlt.'
    }
]

export default function Roadmap() {
    return (
        <div className={styles.container}>
            <Link to="/" className={styles.backLink}>← Zurück</Link>
            <h1 className={styles.title}>Dein Fahrplan</h1>

            <div className={styles.timeline}>
                {steps.map((step, index) => (
                    <motion.div
                        key={step.id}
                        className={styles.step}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1 }}
                    >
                        <div className={styles.connector}>
                            <div className={styles.iconCircle}>
                                <step.icon size={20} />
                            </div>
                            {index < steps.length - 1 && <div className={styles.line} />}
                        </div>

                        <div className={styles.content}>
                            <h3 className={styles.stepTitle}>{step.id}. {step.title}</h3>
                            <p className={styles.description}>{step.content}</p>
                            {step.warning && (
                                <div className={styles.warning} style={{
                                    background: 'rgba(239, 68, 68, 0.1)',
                                    border: '1px solid rgba(239, 68, 68, 0.2)',
                                    color: '#f87171',
                                    padding: '0.75rem',
                                    borderRadius: '8px',
                                    display: 'flex',
                                    gap: '8px',
                                    alignItems: 'center'
                                }}>
                                    <AlertTriangle size={18} /> {step.warning}
                                </div>
                            )}
                        </div>
                    </motion.div>
                ))}
            </div>

            <div className={styles.actionArea}>
                <a
                    href="https://foerdermanager.aws.at/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.primaryButton}
                >
                    Zum Fördermanager
                </a>
            </div>
        </div>
    )
}
