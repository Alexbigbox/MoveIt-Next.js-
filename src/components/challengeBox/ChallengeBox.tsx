import { useContext } from 'react';
import Image from 'next/image';
import { ChallengesContext } from '../../contexts/ChallengesContext';
import { CountdownContext } from '../../contexts/CountdownContext';

import styles from './ChallengeBox.module.css';

export function ChallengeBox() {
    const { activeChallenge, resetChallange, completeChallenge } = useContext(ChallengesContext)
    const { resetCountdown } = useContext(CountdownContext);

    function handleChallengeSucceeded() {
        completeChallenge();
        resetCountdown();
    }

    function handleChallengeFailed() {
        resetChallange();
        resetCountdown();
    }

    return (
        <div className={styles.challengeBoxContainer}>
            { activeChallenge ? (

                <div className={styles.challengeActive}>
                    <header>Ganhe {activeChallenge.amount} xp</header>

                    <main>
                        <Image 
                            src={`/icons/${activeChallenge.type}.svg`} 
                            alt="Challenge active" 
                            width={80} 
                            height={80}
                        />
                        <strong>Novo desafio</strong>
                        <p>{activeChallenge.description}</p>
                    </main>

                    <footer>
                        <button 
                          type="button"
                          className={styles.challengeFailedButton}
                          onClick={handleChallengeFailed}
                        >
                            Falhei
                        </button> 
                        <button 
                          type="button"
                          className={styles.challengeSucceededButton}
                          onClick={handleChallengeSucceeded}
                        >
                            Completei
                        </button>   
                    </footer>
                </div>    


            ) : (

                <div className={styles.challengeNotActive}>
                    <strong>Finalize um ciclo para receber um desafio</strong>
                    <p>
                        <Image 
                            src="/icons/level-up.svg"
                            alt="Level Up" 
                            width={80} 
                            height={80}
                        />
                        <span>Avance de level completando desafios</span>
                    </p>
                </div>

            )}
        </div>
    )
}