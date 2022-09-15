import style from './Tasks.module.css'
import clipboard from '../assets/clipboard.svg'

export default function Tasks () {
  return (
    <div className={style.main}>
      <section className={style.total}>
        <span>Taredas Criadas 0</span>
        <span>Concluidas</span>
      </section>

      <section className={style.tasks}>
        <img src={clipboard} />
        Você ainda não tem tarefas cadastradas
        <p>Crie tarefas e organize seus items a fazer</p>
      </section>
    </div>
  )
}