import React, {useState} from 'react'
import '../../App.css';

import {FlexRow, Header, Body, Section, Page, Step, Button} from './styles';

import CapacitorInput from '../../components/CapacitorInput';

//Images
import Fig0 from '../../assets/img/Fig0.png';
import Fig1 from '../../assets/img/Fig1.png';
import Fig2 from '../../assets/img/Fig2.png';
import Fig3 from '../../assets/img/Fig3.png';

export default function Index() {

  const [c1Value, setC1Value] = useState(8.4);
  const [c2Value, setC2Value] = useState(4.2);
  const [c3Value, setC3Value] = useState(4.2);
  const [c4Value, setC4Value] = useState(4.2);
  const [c5Value, setC5Value] = useState(8.4);
  const [voltage, setVoltage] = useState(220);
  const [total, setTotal] = useState(0);
  const [isDone, setDone] = useState(false);
  const [answerA, setAnswerA] = useState({});

  function doSomething(){

    // INSERT (IMAGE 1) - Os Capacitores c3 e c4 estão em série, logo o valor equivalente deles é:
    let imaginaryCapacitors1 = (c3Value * c4Value / (c3Value + c4Value));

    // INSERT (IMAGE 2) - Agora é possivel observar que C2 e Ceq1 estão em paralelo, logo seu equivalente é: 
    let imaginaryCapacitors2 = imaginaryCapacitors1 + c2Value;

    // INSERT (IMAGE 3) - Agora é possivel observar que C1, C5 e Ceq2 esão em série logo seu equivalente é:
    let imaginaryCapacitors3 = ((c1Value * c5Value * imaginaryCapacitors2) / (c5Value * imaginaryCapacitors2) + (c1Value * imaginaryCapacitors2) + (c1Value * c5Value));

    let data = {
      imaginaryCapacitors: [imaginaryCapacitors1, imaginaryCapacitors2, imaginaryCapacitors3],
      capacitors: [c1Value, c2Value, c3Value, c4Value, c5Value],
      voltage: voltage,
    }

    setAnswerA(data);
    setTotal(imaginaryCapacitors3);
    setDone(true);
  }

  function clear(){
    setC1Value(8.4);
    setC2Value(4.2);
    setC3Value(4.2);
    setC4Value(4.2);
    setC5Value(8.4);
    setVoltage((220));
    setDone(false);
  }

  return (
    <Page>

      <Header>
        <h1>Física II - Exercicio 4</h1>
        <span>Gustavo Villar, Gabriel H S Gava, Douglas Brandão e Felipe Borsato</span>
      </Header>

      <Body>
        <Section>
          <h3>1. Determine a entrada dos capacitores e voltagem: </h3>
          <FlexRow>
            <CapacitorInput name="(C1) - Capacitor 1" value={c1Value} setValue={setC1Value} />
            <CapacitorInput name="(C2) - Capacitor 2" value={c2Value} setValue={setC2Value} />
            <CapacitorInput name="(C3) - Capacitor 3" value={c3Value} setValue={setC3Value} />
            <CapacitorInput name="(C4) - Capacitor 4" value={c4Value} setValue={setC4Value} />
            <CapacitorInput name="(C5) - Capacitor 5" value={c5Value} setValue={setC5Value} />
            <CapacitorInput name="Voltagem" value={voltage} setValue={setVoltage} max={220} min={0} />

            <Section flex>
              <Button onClick={() => clear()} reset>Resetar</Button>
              <Button onClick={() => doSomething()}>Calcular</Button>
            </Section>

          </FlexRow>
        </Section>


        {isDone ? ( 
          <>
            <h2>Resolução Questão 1: </h2>
            <Step>
              <h4>1. Temos o seguinte circuito:</h4>
              <p>C1 = {c1Value}; C2 = {c2Value}; C3 = {c3Value}; C4 = {c4Value}; C5 = {c5Value};</p>
              <p>Vab = {voltage}V</p>
              <img src={Fig0} alt="Figura 0"  height="400px"/>
            </Step>

            <Step>
              <h4>2. Os capacitores C3 e C4 estão em série, logo o valor equivalente deles é:</h4>
              <p>Ceq1 = (3 * C1) / 4 = {answerA.imaginaryCapacitors[0]}</p>
              <img src={Fig1} alt="Figura 0" height="400px" />
            </Step>

            <Step>
              <h4>3. Agora é possível observar que C2 e Ceq1 es~tao em paralelo, logo seu equivalente é:</h4>
              <p>Ceq2 = (3 * C1) / 4 = {answerA.imaginaryCapacitors[1]}</p>
              <img src={Fig2} alt="Figura 0" height="400px" />
            </Step>

            <Step>
              <h4>4. Observamos que C1, C5 e Ceq2 estão em série, logo:</h4>
              <p>1/Ceq3 = 1/C1 + 1/C5 + 1/Ceq2 = 2/C1 + 1/Ceq2</p>
              <p>Ceq3 = {answerA.imaginaryCapacitors[2]}</p>
              <img src={Fig3} alt="Figura 0" height="200px" />
            </Step>

            <h3>Qual a capacitância equivalente do circuito entre os pontos a e b?</h3>
            <h3>{total}</h3>
          </>
        ) : null }

      </Body>

    </Page>
  );
}