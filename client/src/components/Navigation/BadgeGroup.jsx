import { Badge } from '../ui/badge'
export const BadgeGroup = ({ items, onUpdate, active }) => {
  return (
    <>
      {items.map((item, index) => (
        <Badge onClick={() => onUpdate(item)} key={index} variant="outline" isActive={active === item}>
          {item}
        </Badge>
      ))}
    </>
  )
}
