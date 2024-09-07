import { Text } from '@/components/ui'
import { Link } from 'react-router-dom'

export function AuthPageLayout({ children, title, linkText, link }) {
  return (
    <>
      <header>
        <Text variant={'title'}>{title}</Text>
      </header>
      {children}
      <footer>
        <Link to={link} className="text-accent underline">
          <Text className="justify-center">{linkText}</Text>
        </Link>
      </footer>
    </>
  )
}
