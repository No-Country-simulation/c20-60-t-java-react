export const NavSection = ({ title, children }) => {
  return (
    <div className="mb-1">
    <h1 className="font-semibold">{title}</h1>
    <hr className="bg-black h-0.5" />
    <div className="flex flex-wrap">{children}</div>
  </div>
  )
}

