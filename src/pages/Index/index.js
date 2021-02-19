import React, {useState} from 'react'
import '../../App.css';

import {FlexRow, Header, Body, Section, Page} from './styles';

import CapacitorInput from '../../components/CapacitorInput';

export default function Index() {

  const [c1Value, setC1Value] = useState(8.4);
  const [c2Value, setC2Value] = useState(4.2);
  const [c3Value, setC3Value] = useState(4.2);
  const [c4Value, setC4Value] = useState(4.2);
  const [c5Value, setC5Value] = useState(8.4);
  const [voltage, setVoltage] = useState(220);
  const [total, setTotal] = useState(0);

  function doSomething(){

    // INSERT (IMAGE 1) - Os Capacitores c3 e c4 estão em série, logo o valor equivalente deles é:
    let imaginaryCapacitors1 = (c3Value * c4Value / (c3Value + c4Value));
    imaginaryCapacitors1 = Math.round(imaginaryCapacitors1);

    // INSERT (IMAGE 2) - Agora é possivel observar que C2 e Ceq1 estão em paralelo, logo seu equivalente é: 
    let imaginaryCapacitors2 = imaginaryCapacitors1 + c2Value;
    imaginaryCapacitors2 = Math.round(imaginaryCapacitors2);

    // INSERT (IMAGE 3) - Agora é possivel observar que C1, C5 e Ceq2 esão em série logo seu equivalente é:
    let imaginaryCapacitors3 = ((c1Value * c5Value * imaginaryCapacitors2) / (c5Value * imaginaryCapacitors2) + (c1Value * imaginaryCapacitors2) + (c1Value * c5Value));
    imaginaryCapacitors3 = Math.round(imaginaryCapacitors2);


    setTotal(imaginaryCapacitors3);
  }

  return (
    <Page>
      
      <Header>
        <h1>Física II - Exercicio 4</h1>
        <span>Gustavo Villar, Gabriel H S Gava, Douglas Brandão e Felipe Borsato</span>
      </Header>

      <Body>
        <Section>
          <h3>1. Determine a entrada dos capacitores: </h3>
          <FlexRow>
            <CapacitorInput name="(C1) - Capacitor 1" value={c1Value} setValue={setC1Value} />
            <CapacitorInput name="(C2) - Capacitor 2" value={c2Value} setValue={setC2Value} />
            <CapacitorInput name="(C3) - Capacitor 3" value={c3Value} setValue={setC3Value} />
            <CapacitorInput name="(C4) - Capacitor 4" value={c4Value} setValue={setC4Value} />
            <CapacitorInput name="(C5) - Capacitor 5" value={c5Value} setValue={setC5Value} />
          </FlexRow>
        </Section>

        <Section>
          <h3>2. Voltagem: </h3>
          <FlexRow>
            <CapacitorInput name="Voltagem" value={voltage} setValue={setVoltage} />
          </FlexRow>
        </Section>

        <button onClick={() => doSomething()}>Calcular</button>

        <h3>Soma: {total}</h3>
      </Body>

    </Page>
  );
}