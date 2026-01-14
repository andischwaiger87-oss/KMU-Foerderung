import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { CheckSquare, Square, Trash2 } from 'lucide-react'
import styles from './Checklist.module.css'

const DEFAULT_ITEMS = [
    { id: 1, text: 'KMU.DIGITAL Beratung absolvieren (Statusanalyse)', done: false },
    { id: 2, text: 'Projektnummer aus Beratungsbericht holen', done: false },
    { id: 3, text: 'Angebot für Umsetzung einholen', done: false },
    { id: 4, text: 'Förderantrag im AWS Manager stellen', done: false },
    { id: 5, text: 'Auf "Genehmigung" warten (Bestätigungs-Mail)', done: false },
    { id: 6, text: 'Umsetzung starten & bezahlen', done: false },
    { id: 7, text: 'Abrechnung hochladen', done: false },
]

export default function Checklist() {
    const [items, setItems] = useState(() => {
        const saved = localStorage.getItem('kmu-checklist')
        return saved ? JSON.parse(saved) : DEFAULT_ITEMS
    })

    useEffect(() => {
        localStorage.setItem('kmu-checklist', JSON.stringify(items))
    }, [items])

    const toggleItem = (id) => {
        setItems(items.map(i => i.id === id ? { ...i, done: !i.done } : i))
    }

    const reset = () => {
        if (confirm('Checkliste zurücksetzen?')) {
            setItems(DEFAULT_ITEMS)
        }
    }

    const progress = Math.round((items.filter(i => i.done).length / items.length) * 100)

    return (
        <div className={styles.container}>
            <div className={styles.header}>
                <h3>Deine Checkliste</h3>
                <button onClick={reset} className={styles.resetBtn}><Trash2 size={16} /></button>
            </div>

            <div className={styles.progressBar}>
                <div className={styles.progressFill} style={{ width: `${progress}%` }} />
            </div>
            <div className={styles.progressText}>{progress}% erledigt</div>

            <div className={styles.list}>
                {items.map(item => (
                    <motion.div
                        key={item.id}
                        className={`${styles.item} ${item.done ? styles.done : ''}`}
                        onClick={() => toggleItem(item.id)}
                        whileTap={{ scale: 0.98 }}
                    >
                        {item.done ?
                            <CheckSquare size={20} className={styles.checkIcon} /> :
                            <Square size={20} className={styles.squareIcon} />
                        }
                        <span className={styles.text}>{item.text}</span>
                    </motion.div>
                ))}
            </div>
        </div>
    )
}
