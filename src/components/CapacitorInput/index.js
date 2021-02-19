import React from 'react';
import {FlexColumn, InputNumber, RangeInput, Name} from './styles';

export default function CapacitorInput({name, value, setValue}) {
  return (
    <FlexColumn>
      <Name>{name}:</Name>
      <RangeInput type="range" min="1" max="100" step="0.01" value={value} onChange={event => setValue(event.target.value)}/>
      <InputNumber type="number" value={value} onChange={event => setValue(event.target.value)}/>
    </FlexColumn>
  )
}