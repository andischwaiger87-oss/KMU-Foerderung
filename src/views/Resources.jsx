import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Link } from 'react-router-dom'
import { HelpCircle, FileText, Phone, ChevronDown, ExternalLink } from 'lucide-react'
import styles from './Resources.module.css'

const faqs = [
    { q: 'Warum muss ich eine Beratung machen?', a: 'Die Richtlinien schreiben vor, dass vor der Umsetzung eine zertifizierte Status- & Potenzialanalyse oder Strategieberatung erfolgt sein muss. Diese hilft, das Projekt zu schärfen.' },
    { q: 'Wie hoch ist die Förderung?', a: '30% der förderbaren Kosten, maximal 6.000 Euro Zuschuss. Mindestprojektvolumen: 2.000 Euro, Maximal: 30.000 Euro.' },
    { q: 'Wann darf ich starten?', a: 'Erst NACH Erhalt der Förderzusage für die Umsetzung. Die Beratung muss davor schon abgeschlossen sein.' },
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
                <div style={{ display: 'grid', gap: '8px' }}>
                    <a
                        href="https://www.kmudigital.at/kmudigital-customer-journey.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                        className={styles.cardLink}
                    >
                        Ablaufdiagramm (Customer Journey) <ExternalLink size={14} />
                    </a>
                    <a
                        href="https://kmudigital.at/inhalte/kmudigital-4.0-foerderrichtlinien-umsetzung.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                        className={styles.cardLink}
                    >
                        Richtlinie Umsetzung (PDF) <ExternalLink size={14} />
                    </a>
                    <a
                        href="https://www.kmudigital.at/inhalte/kmudigital-4.0-foerderrichtlinien-beratung.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                        className={styles.cardLink}
                    >
                        Richtlinie Beratung (PDF) <ExternalLink size={14} />
                    </a>
                </div>
            </section>

            <section className={styles.section}>
                <h2 className={styles.sectionTitle}><ExternalLink size={20} /> Links & Beantragung</h2>
                <a
                    href="https://www.kmudigital.at"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.cardLink}
                    style={{ borderColor: 'var(--color-primary)' }}
                >
                    <strong>Offizielle KMU.DIGITAL Seite</strong><br />
                    <span style={{ fontSize: '0.9rem', color: 'var(--color-text-muted)' }}>Berater finden & Beratung beantragen</span>
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
