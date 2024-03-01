import type { ChangeEventHandler, FC } from 'react'
import React from 'react'
import type { IMode } from '@/common/types'
import s from './select.module.css'

interface ISelectProps {
  modes: IMode[]
  activeModeIndex: number
  onChange: ChangeEventHandler
  disabled: boolean
}

export const Select: FC<ISelectProps> = ({ modes, activeModeIndex, onChange, disabled }) => {
  return (
    <select className={s.select} disabled={disabled} value={activeModeIndex} onChange={onChange}>
      <option value={-1} disabled>
        Pick mode
      </option>
      {modes?.map(({ name, field }, index) => (
        <option value={index} key={name + field}>
          {name}
        </option>
      ))}
    </select>
  )
}
