import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Link } from 'react-router-dom'
import { HelpCircle, FileText, Phone, ChevronDown } from 'lucide-react'
import styles from './Resources.module.css'

const faqs = [
    { q: 'Wer wird gefördert?', a: 'Kleine und mittlere Unternehmen (KMU) der gewerblichen Wirtschaft mit Standort in Österreich.' },
    { q: 'Wie hoch ist die Förderung?', a: '30% der förderbaren Kosten, maximal 6.000 Euro Zuschuss. Mindestprojektvolumen: 2.000 Euro, Maximal: 30.000 Euro.' },
    { q: 'Wann darf ich starten?', a: 'Erst NACH Erhalt der Förderzusage. Bestellungen davor werden nicht anerkannt.' },
    { q: 'Wie lange habe ich Zeit?', a: 'Das Projekt muss innerhalb von 6 Monaten ab Zusage umgesetzt und abgerechnet werden.' }
]

export default function Resources() {
    const [openIndex, setOpenIndex] = useState(null)

    return (
        <div className={styles.container}>
            <Link to="/" className={styles.backLink}>← Zurück</Link>
            <h1 className={styles.title}>Service & Hilfe</h1>

            <section className={styles.section}>
                <h2 className={styles.sectionTitle}><FileText size={20} /> Wichtige Dokumente</h2>
                <a
                    href="https://kmudigital.at/inhalte/kmudigital-4.0-foerderrichtlinien-umsetzung.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.cardLink}
                >
                    Förderrichtlinie (PDF)
                </a>
            </section>

            <section className={styles.section}>
                <h2 className={styles.sectionTitle}><HelpCircle size={20} /> Häufige Fragen</h2>
                <div className={styles.accordion}>
                    {faqs.map((item, index) => (
                        <div key={index} className={styles.accordionItem}>
                            <button
                                className={styles.accordionHeader}
                                onClick={() => setOpenIndex(index === openIndex ? null : index)}
                            >
                                <span>{item.q}</span>
                                <ChevronDown
                                    className={styles.chevron}
                                    style={{ transform: index === openIndex ? 'rotate(180deg)' : 'none' }}
                                />
                            </button>
                            <AnimatePresence>
                                {index === openIndex && (
                                    <motion.div
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: 'auto', opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        className={styles.accordionContent}
                                    >
                                        <p>{item.a}</p>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                    ))}
                </div>
            </section>

            <section className={styles.section}>
                <h2 className={styles.sectionTitle}><Phone size={20} /> Kontakt</h2>
                <a href="https://kmudigital.at/kontakt.html" target="_blank" rel="noopener noreferrer" className={styles.primaryButton}>
                    Alle WKO Kontaktstellen anzeigen
                </a>
            </section>
        </div>
    )
}
