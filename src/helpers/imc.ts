export type Level = {
    title: string;
    color: string;
    icon: 'down' | 'up';
    imc: number[];
    yourImc?: number; // Resultado do IMC, opcional
  };
  
  export const levels: Level[] = [
    { title: 'Magreza', color: '#96a3ab', icon: 'down', imc: [0, 18.5] },
    { title: 'Normal', color: '#0ead69', icon: 'up', imc: [18.6, 24.9] },
    { title: 'SobrePeso', color: '#e28039', icon: 'down', imc: [25, 30] },
    { title: 'Obesidade', color: '#c3423f', icon: 'down', imc: [30.1, 99] }
  ];
  
  export const calculateImc = (height: number, weight: number) => {
    const imc = weight / (height * height); // Cálculo do IMC
  
    // Percorre os níveis para encontrar onde o IMC se encaixa
    for (let i in levels) {
      if (imc >= levels[i].imc[0] && imc < levels[i].imc[1]) {
        // Cria uma cópia do nível com as informações de IMC
        let levelCopy = { ...levels[i] };
        levelCopy.yourImc = parseFloat(imc.toFixed(2)); // Adiciona o IMC calculado
  
        return levelCopy; 
      }
    }
  
    return null; // Caso o IMC não se encaixe em nenhum nível
  };
  