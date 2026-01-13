import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowLeft } from 'lucide-react'
import { Link } from 'react-router-dom'
import styles from './Home.module.css' // Reusing container styles
import Step1Status from '../components/wizard/Step1Status'
import Step2Category from '../components/wizard/Step2Category'
import Step3Calculator from '../components/wizard/Step3Calculator'
import StepResult from '../components/wizard/StepResult'
import '../styles/global.css' // Ensure imports work

export default function Wizard() {
    const [step, setStep] = useState(1)
    const [data, setData] = useState({
        isKmu: false,
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
            // Could redirect content or show a specific "Non-Eligible" screen
            return
        }
        handleNext({ isKmu: true })
    }

    const handleCategory = (id) => {
        handleNext({ category: id })
    }

    const handleFinish = (result) => {
        setData({ ...data, ...result })
        setStep(4)
    }

    return (
        <div className={styles.container} style={{ justifyContent: 'flex-start', paddingTop: '4rem' }}>
            <header style={{ width: '100%', maxWidth: '500px', marginBottom: '2rem', display: 'flex', alignItems: 'center' }}>
                {step > 1 && step < 4 && (
                    <button onClick={() => setStep(step - 1)} style={{ background: 'none', padding: '0.5rem' }}>
                        <ArrowLeft />
                    </button>
                )}
                <div style={{ flex: 1, textAlign: 'center', fontWeight: 'bold' }}>
                    {step < 4 ? `Schritt ${step} von 3` : 'Ergebnis'}
                </div>
                <div style={{ width: 40 }} /> {/* Spacer */}
            </header>

            <AnimatePresence mode="wait">
                {step === 1 && <Step1Status key="step1" onNext={handleKmuCheck} />}
                {step === 2 && <Step2Category key="step2" onNext={handleCategory} />}
                {step === 3 && <Step3Calculator key="step3" onFinish={handleFinish} />}
                {step === 4 && <StepResult key="result" data={data} />}
            </AnimatePresence>
        </div>
    )
}
