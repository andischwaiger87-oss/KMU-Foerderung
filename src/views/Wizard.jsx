import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowLeft, Home } from 'lucide-react'
import { Link, useNavigate } from 'react-router-dom'
import styles from './Home.module.css'
import stepStyles from '../components/wizard/WizardSteps.module.css'
import Step1Status from '../components/wizard/Step1Status'
import Step2Category from '../components/wizard/Step2Category'
import Step3Calculator from '../components/wizard/Step3Calculator'
import StepResult from '../components/wizard/StepResult'
import StepConsultation from '../components/wizard/StepConsultation'
import Stepper from '../components/wizard/Stepper'
import '../styles/global.css'

export default function Wizard() {
    const navigate = useNavigate()
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
        // Non-blocking now. If false, we just record it but let them proceed.
        // The requirement says: "Wenn man auf 'noch nicht' tippt... Möglichkeit haben sich die weiteren Schritte fertig durchzugehen."
        // But we should probably show the Info Screen as an INTERMEDIATE step or just let them pass?
        // User said: "Dann soll zwar die Erklärung erscheinen, der User muss aber die Möglichkeit haben sich die weiteren Schritte fertig durchzugehen."
        // So: Step -> Info Screen (with "Weiter" button) -> Next Step
        if (!status) {
            setStep(100) // 100 = Info Screen
            return
        }
        handleNext({ hasConsultation: true })
    }

    const handleInfoProceed = () => {
        handleNext({ hasConsultation: false })
        // Step is currently 100. Next logical step is 3 (Category).
        setStep(3)
    }

    const handleCategory = (id) => {
        handleNext({ category: id })
    }

    const handleFinish = (result) => {
        setData({ ...data, ...result })
        setStep(5)
    }

    // Calculate progress for Stepper
    // Steps: 1 (Status), 2 (Consultation), 3 (Category), 4 (Calculator) = 4 Steps. Result is 5.
    // Info screen (100) should probably look like Step 2.
    const currentStep = step === 100 ? 2 : step > 4 ? 4 : step

    return (
        <div className={styles.container} style={{ justifyContent: 'flex-start', paddingTop: '2rem' }}>

            {/* Navigation Header */}
            <div style={{ width: '100%', maxWidth: '500px', marginBottom: '1rem', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                {step > 1 ? (
                    <button onClick={() => step === 100 ? setStep(2) : setStep(step - 1)} style={{ background: 'none', padding: '0.5rem', color: 'white' }}>
                        <ArrowLeft />
                    </button>
                ) : (
                    <Link to="/" style={{ padding: '0.5rem', color: 'white' }}>
                        <Home />
                    </Link>
                )}

                {/* Optional: Add a close/exit button on right if needed */}
                <div style={{ width: 24 }}></div>
            </div>

            <Stepper currentStep={currentStep} totalSteps={4} />

            <h1 className={stepStyles.question} style={{ fontSize: '1.2rem', opacity: 0.8, marginBottom: '2rem' }}>
                {step === 100 ? 'Wichtiger Hinweis' : step === 5 ? 'Dein Ergebnis' : 'Förder-Check'}
            </h1>

            <AnimatePresence mode="wait">
                {step === 1 && <Step1Status key="step1" onNext={handleKmuCheck} />}
                {step === 2 && <StepConsultation key="stepConsultation" onNext={handleConsultation} />}
                {step === 3 && <Step2Category key="step2" onNext={handleCategory} />}
                {step === 4 && <Step3Calculator key="step3" onFinish={handleFinish} />}
                {step === 5 && <StepResult key="result" data={data} />}

                {step === 100 && (
                    <motion.div
                        key="consultation-info"
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -20 }}
                        className={stepStyles.stepContainer}
                    >
                        <h2 className={stepStyles.question}>Beratung ist Pflicht!</h2>
                        <p className={stepStyles.description}>
                            Du kannst den Förder-Check gerne fortsetzen. Aber beachte: <br /><strong>Ohne Projektnummer aus der Beratung ist kein Antrag möglich.</strong>
                        </p>

                        <div className={stepStyles.calculatorBox}>
                            <div style={{ background: '#ecfdf5', padding: '1rem', borderRadius: '8px', color: '#065f46', marginBottom: '1rem' }}>
                                <strong>Tipp:</strong> Absolviere die Beratung VOR dem Projektstart.
                            </div>

                            <a
                                href="https://firmen.wko.at/suche_kmudigital"
                                target="_blank"
                                rel="noopener noreferrer"
                                className={stepStyles.primaryButton}
                                style={{ marginBottom: '1rem', background: 'var(--color-primary)', textDecoration: 'none' }}
                            >
                                Berater jetzt finden
                            </a>

                            <p style={{ fontSize: '0.85rem', color: 'var(--color-text-muted)', marginBottom: '1rem' }}>
                                Suche nach Thema, Ort oder "Webshop".
                            </p>
                        </div>

                        <button
                            onClick={handleInfoProceed}
                            className={stepStyles.optionButton}
                            style={{ background: 'transparent', border: '1px solid var(--color-text-muted)' }}
                        >
                            Alles klar, weiter im Check
                        </button>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    )
}
