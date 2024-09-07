export const NavSection = ({ title, children }) => {
  return (
    <div className="mb-3 flex flex-col gap-3">
      <h1 className="border-b border-black font-semibold">{title}</h1>
      <div className="flex flex-wrap">{children}</div>
    </div>
  )
}
