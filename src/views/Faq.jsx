import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowLeft, ChevronDown, ChevronUp, Mic, Play, Pause } from 'lucide-react'
import { useNavigate } from 'react-router-dom'
import styles from './Resources.module.css'

export default function FAQ() {
    const navigate = useNavigate()
    const [isPlaying, setIsPlaying] = useState(false)
    const [audio] = useState(new Audio('/faq_voiceover.mp3'))

    const toggleAudio = () => {
        if (isPlaying) {
            audio.pause()
        } else {
            audio.play().catch(e => console.log("Audio file missing or error", e))
        }
        setIsPlaying(!isPlaying)
    }

    const questions = [
        {
            q: "Was wird genau gefördert?",
            a: "Gefördert werden Beratungsleistungen (Statusanalyse, Strategieberatung) und die Umsetzung von Digitalisierungsprojekten (z.B. E-Commerce, IT-Sicherheit, Prozesse)."
        },
        {
            q: "Wie hoch ist die Förderung?",
            a: "Für die Umsetzung gibt es 30% Zuschuss, maximal 6.000 €. Der Projektwert muss zwischen 2.000 € und 30.000 € liegen."
        },
        {
            q: "Was muss ich zuerst tun?",
            a: "Der erste Schritt ist IMMER die Beratung (Statusanalyse). Ohne diese (und die daraus resultierende Projektnummer) kannst du keine Umsetzungsförderung beantragen."
        },
        {
            q: "Darf ich schon beauftragen?",
            a: "Nein! Für die Umsetzungsförderung gilt: Erst Antrag stellen, auf Genehmigung warten, DANN beauftragen. Bereits begonnene Projekte werden nicht gefördert."
        },
        {
            q: "Wer darf die Förderung nutzen?",
            a: "Österreichische KMUs (Kleine und Mittlere Unternehmen). Auch Ein-Personen-Unternehmen (EPU)."
        },
        {
            q: "Konkrete Beispiele: Wofür kann ich die Förderung nutzen?",
            a: (
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                    <p>Hier sind typische Projekte, die gefördert werden:</p>
                    <ul style={{ paddingLeft: '1.2rem', margin: 0 }}>
                        <li><strong>Webshop:</strong> Programmierung und Einrichtung eines Onlineshops.</li>
                        <li><strong>Sicherheit (Cyber Security):</strong> Einrichtung von Firewalls, sicheren VPN-Zugängen oder Backup-Systemen.</li>
                        <li><strong>Buchungs-Tools:</strong> Online-Terminvereinbarung für Kunden.</li>
                        <li><strong>Automatisierung:</strong> Verknüpfung von Programmen (z.B. Webshop spricht automatisch mit Buchhaltung).</li>
                        <li><strong>Daten-Management:</strong> Einführung eines CRM-Systems zur Kundenverwaltung.</li>
                    </ul>
                    <p style={{ fontStyle: 'italic', fontSize: '0.85rem', marginTop: '0.5rem' }}>Wichtig: Reine Hardware-Anschaffungen (nur Laptops kaufen) oder Standard-Software (nur Office 365 Abo) werden NICHT gefördert.</p>
                </div>
            )
        }
    ]

    return (
        // HIER GEÄNDERT: paddingTop hinzugefügt für Abstand nach oben, position: relative für den Pfeil
        <div className={styles.container} style={{ maxWidth: '800px', width: '100%', paddingLeft: '1rem', paddingRight: '1rem', paddingTop: '4.5rem', position: 'relative' }}>
            
            {/* HIER GEÄNDERT: Pfeil absolut positioniert (top: 1rem), Text "Zurück" entfernt */}
            <button 
                onClick={() => navigate(-1)} 
                style={{ position: 'absolute', top: '1rem', left: '1rem', color: 'var(--color-text-main)', background: 'transparent', border: 'none', cursor: 'pointer', height: '38px', width: '38px', display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 10 }}
            >
                <ArrowLeft size={24} />
            </button>

            <header className={styles.header} style={{ marginBottom: '2rem' }}>
                <h1 className={styles.title} style={{ margin: 0 }}>Häufige Fragen</h1>
            </header>

            {/* Audio Player Card */}
            <div style={{ background: 'var(--gradient-brand)', padding: '1.5rem', borderRadius: 'var(--radius-lg)', color: 'white', marginBottom: '2.5rem', boxShadow: 'var(--shadow-glow)' }}>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1rem' }}>
                    <div>
                        <h3 style={{ margin: 0, fontSize: '1.1rem' }}>Erklärung anhören</h3>
                        <p style={{ margin: 0, fontSize: '0.85rem', opacity: 0.9 }}>Alles Wichtige in 1 Minute</p>
                    </div>
                    <Mic size={24} style={{ opacity: 0.8 }} />
                </div>

                <button
                    onClick={toggleAudio}
                    style={{ width: '100%', padding: '0.8rem', background: 'rgba(255,255,255,0.2)', border: 'none', borderRadius: '99px', color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '10px', fontSize: '1rem', fontWeight: 'bold', cursor: 'pointer' }}
                >
                    {isPlaying ? <Pause size={20} fill="white" /> : <Play size={20} fill="white" />}
                    {isPlaying ? 'Pause' : 'Abspielen'}
                </button>
            </div>

            {/* Resource Links Section */}
            <div style={{ marginBottom: '3rem' }}>
                <h3 style={{ fontSize: '1.1rem', marginBottom: '1rem' }}>Wichtige Links</h3>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                    <a href="https://firmen.wko.at/suche_kmudigital" target="_blank" rel="noopener noreferrer" className={styles.card} style={{ textDecoration: 'none', padding: '1.2rem 1rem', display: 'flex', alignItems: 'center', justifyContent: 'space-between', background: 'var(--color-surface)', borderRadius: '12px', boxShadow: 'var(--shadow-sm)' }}>
                        <span style={{ fontWeight: 600, color: 'var(--color-primary)' }}>Berater finden</span>
                        <ArrowLeft style={{ transform: 'rotate(135deg)', color: 'var(--color-primary)' }} size={18} />
                    </a>
                    <a href="https://foerdermanager.aws.at/" target="_blank" rel="noopener noreferrer" className={styles.card} style={{ textDecoration: 'none', padding: '1.2rem 1rem', display: 'flex', alignItems: 'center', justifyContent: 'space-between', background: 'var(--color-surface)', borderRadius: '12px', boxShadow: 'var(--shadow-sm)' }}>
                        <span style={{ fontWeight: 600, color: 'var(--color-primary)' }}>AWS Fördermanager</span>
                        <ArrowLeft style={{ transform: 'rotate(135deg)', color: 'var(--color-primary)' }} size={18} />
                    </a>
                    <a href="https://www.kmudigital.at" target="_blank" rel="noopener noreferrer" className={styles.card} style={{ textDecoration: 'none', padding: '1.2rem 1rem', display: 'flex', alignItems: 'center', justifyContent: 'space-between', background: 'var(--color-surface)', borderRadius: '12px', boxShadow: 'var(--shadow-sm)' }}>
                        <span style={{ fontWeight: 600, color: 'var(--color-primary)' }}>KMU.DIGITAL Infos</span>
                        <ArrowLeft style={{ transform: 'rotate(135deg)', color: 'var(--color-primary)' }} size={18} />
                    </a>
                </div>
            </div>

            {/* HIER GEÄNDERT: className={styles.accordion} entfernt, damit der Kasten weg ist */}
            <div style={{ marginBottom: '2rem' }}>
                <h3 style={{ fontSize: '1.1rem', marginBottom: '1rem' }}>Antworten</h3>
                <div>
                    {questions.map((item, index) => (
                        <AccordionItem key={index} question={item.q} answer={item.a} />
                    ))}
                </div>
            </div>
        </div>
    )
}

function AccordionItem({ question, answer }) {
    const [isOpen, setIsOpen] = useState(false)

    return (
        <motion.div className={styles.card} style={{ marginBottom: '0.75rem' }}>
            <button
                onClick={() => setIsOpen(!isOpen)}
                style={{
                    width: '100%',
                    background: 'var(--color-surface)',
                    border: 'none',
                    boxShadow: 'var(--shadow-sm)',
                    borderRadius: isOpen ? '12px 12px 0 0' : '12px',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    padding: '1.2rem 1rem',
                    color: 'var(--color-text-main)',
                    fontSize: '1rem',
                    fontWeight: 600,
                    textAlign: 'left',
                    cursor: 'pointer',
                    transition: 'border-radius 0.2s'
                }}
            >
                {question}
                {isOpen ? <ChevronUp size={20} color="var(--color-text-muted)" /> : <ChevronDown size={20} color="var(--color-text-muted)" />}
            </button>
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        style={{ overflow: 'hidden' }}
                    >
                        <div style={{ padding: '0 1rem 1.2rem 1rem', background: 'var(--color-surface)', borderBottomLeftRadius: '12px', borderBottomRightRadius: '12px', boxShadow: '0 2px 4px 0 rgb(0 0 0 / 0.05)' }}>
                            <p style={{ margin: 0, color: 'var(--color-text-muted)', fontSize: '0.95rem', lineHeight: 1.6, borderTop: '1px solid rgba(128,128,128,0.1)', paddingTop: '1rem' }}>
                                {answer}
                            </p>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.div>
    )
}