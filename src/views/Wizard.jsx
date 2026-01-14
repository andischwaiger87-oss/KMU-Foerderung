import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowLeft } from 'lucide-react'
import { Link } from 'react-router-dom'
import styles from './Home.module.css'
import Step1Status from '../components/wizard/Step1Status'
import Step2Category from '../components/wizard/Step2Category'
import Step3Calculator from '../components/wizard/Step3Calculator'
import StepResult from '../components/wizard/StepResult'
import StepConsultation from '../components/wizard/StepConsultation'
import '../styles/global.css'

export default function Wizard() {
    const [step, setStep] = useState(1)
    const [data, setData] = useState({
        isKmu: false,
        hasConsultation: false,
        category: '',
        investment: 0,
        grant: 0
    })

    const handleNext = (newData) => {
        setData({ ...data, ...newData })
        setStep(step + 1)
    }

    const handleKmuCheck = (status) => {
        if (!status) {
            alert("Leider richtet sich diese Förderung nur an KMUs.")
            return
        }
        handleNext({ isKmu: true })
    }

    const handleConsultation = (status) => {
        if (!status) {
            setStep(100) // 100 = Consultation Required Info
            return
        }
        handleNext({ hasConsultation: true })
    }

    const handleCategory = (id) => {
        handleNext({ category: id })
    }

    const handleFinish = (result) => {
        setData({ ...data, ...result })
        setStep(5)
    }

    return (
        <div className={styles.container} style={{ justifyContent: 'flex-start', paddingTop: '4rem' }}>
            <header style={{ width: '100%', maxWidth: '500px', marginBottom: '2rem', display: 'flex', alignItems: 'center' }}>
                {step > 1 && step < 5 && step !== 100 && (
                    <button onClick={() => setStep(step - 1)} style={{ background: 'none', padding: '0.5rem' }}>
                        <ArrowLeft />
                    </button>
                )}
                <div style={{ flex: 1, textAlign: 'center', fontWeight: 'bold' }}>
                    {step === 100 ? 'Beratung notwendig' : step < 5 ? `Schritt ${step} von 4` : 'Ergebnis'}
                </div>
                <div style={{ width: 40 }} /> {/* Spacer */}
            </header>

            <AnimatePresence mode="wait">
                {step === 1 && <Step1Status key="step1" onNext={handleKmuCheck} />}
                {step === 2 && <StepConsultation key="stepConsultation" onNext={handleConsultation} />}
                {step === 3 && <Step2Category key="step2" onNext={handleCategory} />}
                {step === 4 && <Step3Calculator key="step3" onFinish={handleFinish} />}
                {step === 5 && <StepResult key="result" data={data} />}

                {step === 100 && (
                    <motion.div
                        key="consultation-info"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className={styles.stepContainer || 'stepContainer'} // Fallback if module not loaded perfectly
                        style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: '100%', maxWidth: '500px' }}
                    >
                        <h2 style={{ fontSize: '1.5rem', marginBottom: '1rem', textAlign: 'center' }}>Beratung ist Pflicht!</h2>
                        <p style={{ color: '#64748B', textAlign: 'center', marginBottom: '2rem' }}>
                            Bevor Sie die Umsetzungsförderung beantragen können, müssen Sie eine <strong>KMU.DIGITAL Beratung</strong> absolvieren.
                        </p>
                        <div style={{ width: '100%', background: '#FFFFFF', padding: '1.5rem', borderRadius: '12px', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)', marginBottom: '2rem' }}>
                            <ul style={{ textAlign: 'left', marginBottom: '1rem', paddingLeft: '1.5rem', color: '#64748B' }}>
                                <li>Status- & Potenzialanalyse (80% gefördert)</li>
                                <li>Strategieberatung (50% gefördert)</li>
                                <li>Freie Wahl aus zertifizierten Beratern</li>
                            </ul>
                            <div style={{ background: '#ecfdf5', padding: '1rem', borderRadius: '8px', color: '#065f46', marginBottom: '0.5rem' }}>
                                <strong>Vorteil:</strong> Sie erhalten einen klaren Projektplan und eine Projektnummer für den Antrag.
                            </div>
                        </div>
                        <a href="https://www.kmudigital.at" target="_blank" rel="noopener noreferrer" style={{ width: '100%', padding: '1rem', background: '#2563EB', color: 'white', borderRadius: '9999px', fontWeight: '600', display: 'flex', justifyContent: 'center', alignItems: 'center', textDecoration: 'none', marginBottom: '1rem' }}>
                            Jetzt Beratung beantragen
                        </a>
                        <button onClick={() => setStep(1)} style={{ width: '100%', padding: '1rem', background: 'transparent', border: '2px solid #64748B', color: '#0F172A', borderRadius: '9999px', fontWeight: '600', cursor: 'pointer' }}>
                            Zurück zum Start
                        </button>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    )
}
