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
  const [C1, setC1] = useState(8.4);
  const [C2, setC2] = useState(4.2);
  const [C3, setC3] = useState(4.2);
  const [C4, setC4] = useState(4.2);
  const [C5, setC5] = useState(8.4);
  const [voltage, setVoltage] = useState(220);
  const [total, setTotal] = useState(0);
  const [isDone, setDone] = useState(false);
  const [answerA, setAnswerA] = useState({});

  const [answerB, setAnswerB] = useState({});

  function execute() {
    resolveA();
    resolveB();

    setDone(true);
  }

  function clear() {
    setC1(8.4);
    setC2(4.2);
    setC3(4.2);
    setC4(4.2);
    setC5(8.4);
    setVoltage((220));
    setDone(false);
  }

  function calculateEquivalentCapacitors() {
    const equivalentCapacitor1 = (C3 * C4) / (C3 + C4);
    const equivalentCapacitor2 = (equivalentCapacitor1 + C2);
    const equivalentCapacitor3 = ((C1 * C5 * equivalentCapacitor2) / ((C5 * equivalentCapacitor2) + (C1 * equivalentCapacitor2) + (C1 * C5)));

    return {
      equivalentCapacitor1: equivalentCapacitor1.toFixed(2),
      equivalentCapacitor2: equivalentCapacitor2.toFixed(2),
      equivalentCapacitor3: equivalentCapacitor3.toFixed(2)
    }
  }

  function resolveA() {
    // Os Capacitores c3 e c4 estão em série, logo o valor equivalente deles é:
    const { equivalentCapacitor1, equivalentCapacitor2, equivalentCapacitor3 } = calculateEquivalentCapacitors();

    setAnswerA({
      imaginaryCapacitors: [equivalentCapacitor1, equivalentCapacitor2, equivalentCapacitor3],
      capacitors: [C1, C2, C3, C4, C5],
      voltage: voltage,
    });

    setTotal(equivalentCapacitor3);
  }

  function resolveB() {
    const { equivalentCapacitor1, equivalentCapacitor2, equivalentCapacitor3 } = calculateEquivalentCapacitors();

    // Para saber a carga em cada capacitor é preciso saber a equivalente:
    const equivalentCharge2 = (equivalentCapacitor3 * voltage).toFixed(2);

    // Como C1, C5 e Ceq2 estão em série seus valores de carga são:
    const capacitor1Charge = equivalentCharge2;
    const capacitor5Charge = equivalentCharge2;

    // Mas suas voltagens são diferentes, logo:
    const equivalentVoltage2 = (voltage - (capacitor1Charge / C1) - (capacitor5Charge / C5)).toFixed(2);

    // Sendo assim a diferença de potencial de C2 é:
    const capacitor2Charge = C2 * equivalentVoltage2;

    // Por outro lado Ceq1 tem a mesma diferença de potencial, logo:
    const equivalentVoltage1 = equivalentVoltage2;
    const equivalentCharge1 = (equivalentCapacitor1 * equivalentVoltage1).toFixed(2);

    // Como C3 e C4 estão em série temos:
    const capacitor3Charge = equivalentCharge1;
    const capacitor4Charge = equivalentCharge1;

    // Diferenças de potencial
    const potentialDifference = [];
    potentialDifference.push(capacitor1Charge / C1);
    potentialDifference.push(capacitor2Charge / C2);
    potentialDifference.push(capacitor3Charge / C3);
    potentialDifference.push(capacitor4Charge / C4);
    potentialDifference.push(capacitor5Charge / C5);
    

    const capacitorsCharges = [capacitor1Charge, capacitor2Charge, capacitor3Charge, capacitor4Charge, capacitor5Charge];
    const equivalentCharges = [equivalentCharge1, equivalentCharge2];
    const equivalentVoltages = [equivalentVoltage1, equivalentVoltage2];
    const equivalentCapacitors = [equivalentCapacitor1, equivalentCapacitor2, equivalentCapacitor3];

    setAnswerB({
      capacitorsCharges,
      equivalentCharges,
      equivalentVoltages,
      equivalentCapacitors,
      potentialDifference,
    });
  }

  return (
    <Page>

      <Header>
        <h1>Física II - Exercicio 4</h1>
        <span>Gustavo Villar, Gabriel H S Gava, Douglas Brandão e Felipe Borsato</span>
      </Header>

      <Body>
        <Section>
          <h3>1. Determine a entrada dos capacitores (&micro;F) e voltagem: </h3>
          <FlexRow>
            <CapacitorInput name="(C1) - Capacitor 1" value={C1} setValue={setC1} />
            <CapacitorInput name="(C2) - Capacitor 2" value={C2} setValue={setC2} />
            <CapacitorInput name="(C3) - Capacitor 3" value={C3} setValue={setC3} />
            <CapacitorInput name="(C4) - Capacitor 4" value={C4} setValue={setC4} />
            <CapacitorInput name="(C5) - Capacitor 5" value={C5} setValue={setC5} />
            <CapacitorInput name="Voltagem" value={voltage} setValue={setVoltage} max={220} min={0} />

            <Section flex>
              <Button onClick={() => clear()} reset>Resetar</Button>
              <Button onClick={() => execute()}>Calcular</Button>
            </Section>

          </FlexRow>
        </Section>


        {isDone ? ( 
          <>
            <h2>Resolução do item A: </h2>
            <Step>
              <h4>1. Temos o seguinte circuito:</h4>
              <p>C<sub>1</sub> = {C1} | C<sub>2</sub> = {C2} | C<sub>3</sub> = {C3} | C<sub>4</sub> = {C4} | C<sub>5</sub> = {C5}</p>
              <p>Vab = {voltage}V</p>
              <img src={Fig0} alt="Figura 0"  height="400px"/>
            </Step>

            <Step>
              <h4>2. Os capacitores C<sub>3</sub> e C<sub>4</sub> estão em série, logo, sua capacitância equivalente é dada por:</h4>
              <p>C<sub>eq1</sub> = C<sub>3</sub> * C<sub>4</sub> / C<sub>3</sub> + C<sub>4</sub></p>
              <p>C<sub>eq1</sub> = {answerA.imaginaryCapacitors[0]} &micro;F</p>
              <img src={Fig1} alt="Figura 0" height="400px" />
            </Step>

            <Step>
              <h4>3. Observe ainda, que C<sub>2</sub> e C<sub>eq1</sub> estão em paralelo. Portanto, sua capacitância equivalente será:</h4>
              <p>C<sub>eq2</sub> = C<sub>eq1</sub> + C<sub>2</sub></p>
              <p>C<sub>eq2</sub> = {answerA.imaginaryCapacitors[1]} &micro;F</p>
              <img src={Fig2} alt="Figura 0" height="400px" />
            </Step>

            <Step>
              <h4>4. Por fim, note que C<sub>1</sub>, C<sub>5</sub> e C<sub>eq2</sub> estão em série, logo:</h4>
              <p>
                C<sub>eq3</sub> = 
                C<sub>1</sub> * C<sub>5</sub> * C<sub>eq2</sub> / 
                (C<sub>5</sub> * C<sub>eq2</sub>) + (C<sub>1</sub> * C<sub>eq2</sub>) + (C<sub>1</sub> * C<sub>5</sub>)</p>
              <p>C<sub>eq3</sub> = {answerA.imaginaryCapacitors[2]} &micro;F</p>
              <img src={Fig3} alt="Figura 0" height="200px" />
            </Step>

            <h3>a) Qual a capacitância equivalente do circuito entre os pontos a e b?</h3>
            <h4>{total} &micro;F</h4>
          
            <h2>Resolução do item B: </h2>

            <Step>
              <h4>1. Para saber a carga em cada capacitor é preciso saber seus equivalentes</h4>
              <p>Q<sub>eq2</sub> = C<sub>eq2</sub> * V<sub>ab</sub></p>
              <p>Q<sub>eq2</sub> = {answerB.equivalentCharges[1]} &micro;C</p>
            </Step>

            <Step>
              <h4>2. Como C<sub>1</sub>, C<sub>5</sub> e C<sub>eq2</sub> estão em série (conforme apresentado no item A) seus valores de carga são dados por:</h4>
              <p>Q<sub>1</sub> = Q<sub>5</sub> = Q<sub>eq2</sub> = {answerB.equivalentCharges[1]} &micro;C</p>
            </Step>

            <Step>
              <h4>3. Note porém, que suas diferenças de potencial (voltagens) são diferentes. Logo:</h4>
              <p>V<sub>eq2</sub> = V<sub>ab</sub> - Q<sub>1</sub> / C<sub>1</sub>  - Q<sub>5</sub> / C<sub>5</sub></p>
              <p>V<sub>eq2</sub> = {answerB.equivalentVoltages[1]} &micro;C</p>
            </Step>

            <Step>
              <h4>4. Portanto, a diferença de potencial de C<sub>2</sub> será dada por:</h4>
              <p>Q<sub>2</sub> = C<sub>2</sub> * V<sub>eq2</sub></p>
              <p>Q<sub>2</sub> = {answerB.capacitorsCharges[1]} &micro;C</p>
            </Step>

            <Step>
              <h4>5. Por outro lado, C<sub>eq1</sub> tem a mesma diferença de potencial, sendo dada por:</h4>
              <p>V<sub>eq1</sub> = V<sub>eq2</sub></p>
              <p>V<sub>eq1</sub> = {answerB.equivalentVoltages[1]}V</p>
              <br></br>
              <p>Q<sub>eq1</sub> = C<sub>eq1</sub> * V<sub>eq1</sub></p>
              <p>Q<sub>eq1</sub> = {answerB.equivalentCharges[0]} &micro;C</p>
            </Step>

            <Step>
              <h4>6. Como C<sub>3</sub> e C<sub>4</sub> estão em série, temos que:</h4>
              <p>Q<sub>3</sub> = Q<sub>4</sub> = Q<sub>eq1</sub></p>
              <p>Q<sub>3</sub> = Q<sub>4</sub> = {answerB.equivalentCharges[0]} &micro;C</p>
            </Step>

            <Step>
              <h4>7. Por fim, temos que a diferencia de potencial de cada capacitor pode ser dada por:</h4>
              <p>
                V<sub>1</sub> = Q<sub>1</sub> / C<sub>1</sub> = {answerB.capacitorsCharges[0]}/{C1} = {answerB.potentialDifference[0]}V
              </p>
              <p>
                V<sub>2</sub> = Q<sub>2</sub> / C<sub>2</sub> = {answerB.capacitorsCharges[1]}/{C2} = {answerB.potentialDifference[1]}V
              </p>
              <p>
                V<sub>3</sub> = Q<sub>3</sub> / C<sub>3</sub> = {answerB.capacitorsCharges[2]}/{C3} = {answerB.potentialDifference[2]}V
              </p>
              <p>
                V<sub>4</sub> = Q<sub>4</sub> / C<sub>4</sub> = {answerB.capacitorsCharges[3]}/{C4} = {answerB.potentialDifference[3]}V
              </p>
              <p>
                V<sub>5</sub> = Q<sub>5</sub> / C<sub>5</sub> = {answerB.capacitorsCharges[4]}/{C5} = {answerB.potentialDifference[4]}V
              </p>
            </Step>

            <h3>b) Calcule a carga em cada capacitor e a respectiva diferença de potencial</h3>
            <h4>
              Q1 = {answerB.capacitorsCharges[0]} &micro;C |
              Q2 = {answerB.capacitorsCharges[1]} &micro;C |
              Q3 = {answerB.capacitorsCharges[2]} &micro;C |
              Q4 = {answerB.capacitorsCharges[3]} &micro;C |
              Q5 = {answerB.capacitorsCharges[4]} &micro;C
            </h4>
            <h4>
              V1 = {answerB.potentialDifference[0]}V |
              V2 = {answerB.potentialDifference[1]}V |
              V3 = {answerB.potentialDifference[2]}V |
              V4 = {answerB.potentialDifference[3]}V |
              V5 = {answerB.potentialDifference[4]}V 
            </h4>
          </>
        ) : null }

      </Body>

    </Page>
  );
}