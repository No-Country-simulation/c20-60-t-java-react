export function Toggle({ active, ...args }) {
  return (
    <button className="relative flex h-8 w-14 gap-3 rounded-full bg-border p-1 transition-colors hover:bg-white" {...args}>
      <span className={`h-full w-1/2 rounded-full transition-transform ${active ? 'translate-x-full bg-green-400' : 'bg-red-500'}`} />
    </button>
  )
}
