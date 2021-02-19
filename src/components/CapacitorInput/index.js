import React from 'react';
import {FlexColumn, InputNumber, RangeInput, Name} from './styles';

export default function CapacitorInput({name, value, setValue, max = 150, min = 0}) {
  return (
    <FlexColumn>
      <Name>{name}:</Name>
      <RangeInput type="range" min={min} max={max} step="0.01" value={value} onChange={event => setValue(event.target.value)}/>
      <InputNumber type="number" value={value} onChange={event => setValue(event.target.value)}/>
    </FlexColumn>
  )
}