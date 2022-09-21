import { FC, InputHTMLAttributes } from 'react'
import style from './Input.module.css'

interface InputProps extends InputHTMLAttributes<HTMLInputElement>{
  name?: string,
  label?: string
}

const Input: FC<InputProps> = ({ name, label, ...rest }) => {
  return (
    <div className={style.container}>
      <input {...rest} type="text" placeholder='   Adicione uma nova tarefa' />
    </div>
  )
}

export default Input;