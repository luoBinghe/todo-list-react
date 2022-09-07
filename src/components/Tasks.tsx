import style from './Tasks.module.css'

export default function Tasks () {
  return (
    <div className={style.main}>
      <section className={style.total}>
        <span>Taredas Criadas 0</span>
        <span>Concluidas</span>
      </section>

      <section className={style.tasks}>
        Você ainda não tem tarefas cadastradas
        <p>Crie tarefas e organize seus items a fazer</p>
      </section>
    </div>
  )
}