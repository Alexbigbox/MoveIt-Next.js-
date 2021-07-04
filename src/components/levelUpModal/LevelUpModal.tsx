import { useContext } from 'react';
import Image from 'next/image';
import { ChallengesContext } from '../../contexts/ChallengesContext';
import styles from './LevelUpModal.module.css';

export function LevelUpModal() {
    const { level, closeLevelUpModal } = useContext(ChallengesContext);

    return (
        <div className={styles.overlay}>
            <div className={styles.container}>
                <header>{level}</header>

                <strong>Parabéns</strong>
                <p>Você alcançou um novo Level</p>

                <button 
                    type="button"
                    onClick={closeLevelUpModal}
                >
                    <Image 
                        src="/icons/close.svg"
                        alt="Fechar Modal" 
                        width={20} 
                        height={20}
                    />
                </button>
            </div>
        </div>
    )
}