import style from './Input.module.css'

export default function Input(){
    return (
      <div className={style.container}>
        <input type="text" placeholder='   Adicione uma nova tarefa' />
      </div>
    )
}