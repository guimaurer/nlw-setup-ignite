interface HabitProps {
  completed: number
}

export function Habit(props: HabitProps){
  return(
      <div className="bg-violet-700 w-10 text-white">{props.completed}</div>
  )
}