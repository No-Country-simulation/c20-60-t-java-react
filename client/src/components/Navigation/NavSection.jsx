export const NavSection = ({ title, children }) => {
  return (
    <div className="mb-3 flex flex-col gap-3">
      <h1 className="font-semibold border-b border-black">{title}</h1>
      <div className="flex flex-wrap">{children}</div>
    </div>
  )
}
