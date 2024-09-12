export function Toggle({ onClick, active }) {
  return (
    <button onClick={onClick} className="relative flex h-8 w-14 gap-3 rounded-full bg-white p-1">
      <span className={`h-full w-1/2 rounded-full transition-transform ${active ? 'bg-red-400' : 'translate-x-full bg-green-500'}`} />
    </button>
  )
}
