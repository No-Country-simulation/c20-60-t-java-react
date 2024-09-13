import { Text } from '@/components/ui'

export function DashboardPageLayout({ children, title }) {
  return (
    <section className="flex flex-col gap-6">
      <header>
        <Text variant="title">{title}</Text>
      </header>
      {children}
    </section>
  )
}
