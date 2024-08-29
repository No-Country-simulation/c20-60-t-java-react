import { Badge } from '../ui/badge'
export const BadgeGroup = ({ items }) => {
  return (
    <>
      {items.map((item, index) => (
        <Badge key={index} variant="outline">{item}</Badge>
      ))}
    </>
  )
}
