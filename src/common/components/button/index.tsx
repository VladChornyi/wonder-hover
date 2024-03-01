import type { FC, ReactNode } from 'react'
import React from 'react'
import s from './button.module.css'

interface IButtonProps {
  onClick: () => void;
  children: ReactNode;
  disabled: boolean;
}

export const Button: FC<IButtonProps> = ({ onClick, children, disabled }) => {
  return (
    <button className={s.button} disabled={disabled} onClick={onClick}>
      {children}
    </button>
  )
}
