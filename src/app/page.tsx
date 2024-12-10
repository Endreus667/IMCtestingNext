'use client'; // Diretiva para marcar o componente como cliente

import styles from './App.module.css';
import './global.css'; 
import Image from 'next/image';
import poweredImage from '@/assets/powered.png';
import { useState } from 'react';
import { levels, calculateImc, Level } from '@/helpers/imc'; 
import { GridItem } from '@/components/GridItem';
import leftArrowImage from '@/assets/leftarrow.png'

const App = () => {
  const [heightField, setHeightField] = useState<number>(0);
  const [weightField, setWeightField] = useState<number>(0);
  const [toShow, setToShow] = useState<Level | null>(null);

  const handleCalculateButton = () => {
    if (heightField && weightField) {
      setToShow(calculateImc(heightField, weightField));
    } else {
      alert('Digite todos os campos!');
    }
  };

  const handleBackToNormal = () => {
    setToShow(null); 
  };

  return (
    <div className={styles.main}>
      <header>
        <div className={styles.headerContainer}>
        <h1 className='text-black size-'>Teste IMC</h1>
        </div>
      </header>
      <div className={styles.container}>
        <div className={styles.leftSide}>
          <h1>Calcule o seu IMC</h1>
          <p className="text-black">
            Obtido a partir do peso e da altura do indivíduo, o IMC também aponta níveis de magreza e obesidade,
            que são usados para nortear o trabalho de profissionais de saúde e de educadores físicos. Para obter o IMC,
            basta dividir o seu peso (em quilos) pela altura (em metros) elevada ao quadrado (altura x altura).
          </p>

          <input 
            type="number"
            placeholder="Digite a sua altura ex: 1.5 (em metros)"
            value={heightField > 0 ? heightField : ''}
            onChange={(e) => setHeightField(parseFloat(e.target.value))}
            disabled={toShow ? true : false}
          />

          <input 
            type="number"
            placeholder="Digite o seu peso (em quilos)"
            value={weightField > 0 ? weightField : ''}
            onChange={(e) => setWeightField(parseFloat(e.target.value))}
            disabled={toShow ? true : false}
          />

          <button onClick={handleCalculateButton} disabled={toShow ? true : false}>Calcular</button>
        </div>

        <div className={styles.rightSide}>
          {!toShow && (
            <div className={styles.grid}>
              {levels.map((item, key) => (
                <GridItem key={key} item={item} />
              ))}
            </div>
          )}

          {toShow && (
            <div className={styles.rightBig}>
              <div className={styles.rightArrow}>
              <button className={styles.backButton} onClick={handleBackToNormal}>
                Voltar
              </button>
                <GridItem item={toShow} />
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default App;
