import React from 'react'
import styles from './WizardSteps.module.css'

export default function Stepper({ currentStep, totalSteps }) {
    return (
        <div className={styles.stepperContainer}>
            {Array.from({ length: totalSteps }).map((_, index) => {
                const stepNum = index + 1
                const isActive = stepNum === currentStep
                const isCompleted = stepNum < currentStep

                return (
                    <div key={index} className={styles.stepWrapper}>
                        <div
                            className={`${styles.stepDot} ${isActive ? styles.active : ''} ${isCompleted ? styles.completed : ''}`}
                        >
                            {isCompleted ? '✓' : stepNum}
                        </div>
                        {index < totalSteps - 1 && (
                            <div className={`${styles.stepLine} ${isCompleted ? styles.lineCompleted : ''}`} />
                        )}
                    </div>
                )
            })}
        </div>
    )
}
