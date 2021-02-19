import React, {useState} from 'react'
import '../../App.css';

import {FlexRow, Label, Page} from './styles';

import CapacitorInput from '../../components/CapacitorInput';

export default function Index() {

  const [c1Value, setC1Value] = useState(8.4);
  const [c2Value, setC2Value] = useState(4.2);
  const [c3Value, setC3Value] = useState(4.2);
  const [c4Value, setC4Value] = useState(4.2);
  const [c5Value, setC5Value] = useState(8.4);

  return (
    <Page>

      <div>
        <h1>Física II - Exercicio 4</h1>
        <p></p>
      </div>

      <h3>1. Determine a entrada dos capacitores: </h3>

      <FlexRow>
        <CapacitorInput name="(C1) - Capacitor 1" value={c1Value} setValue={setC1Value} />
        <CapacitorInput name="(C2) - Capacitor 2" value={c2Value} setValue={setC2Value} />
        <CapacitorInput name="(C3) - Capacitor 3" value={c3Value} setValue={setC3Value} />
        <CapacitorInput name="(C4) - Capacitor 4" value={c4Value} setValue={setC4Value} />
        <CapacitorInput name="(C5) - Capacitor 5" value={c5Value} setValue={setC5Value} />
      </FlexRow>

      <h3>Soma: {c1Value + c2Value + c3Value + c4Value +c4Value}</h3>

    </Page>
  );
}