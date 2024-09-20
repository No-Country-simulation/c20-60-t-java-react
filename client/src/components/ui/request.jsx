import { Text } from './text'

export function RequestCard({ peticion }) {
  return (
    <li key={peticion.phone_number} className="relative flex flex-col gap-2 overflow-hidden rounded-lg border border-border bg-secondary p-4">
      <div className="absolute right-0 top-0 flex items-center gap-2 rounded-bl-xl border bg-card p-4">
        <p className="text-xs">{peticion.pet.name}</p>
        <figure className="size-8 overflow-hidden rounded-full">
          <img className="h-full w-full object-cover" src={peticion.pet.thumbnail} alt="" />
        </figure>
      </div>
      <header className="flex divide-x py-4">
        <Text variant="details" className="pr-2">
          {peticion.name}
        </Text>
        <Text className="pl-2 opacity-60">{peticion.location}</Text>
      </header>
      <div className="flex items-center justify-between text-accent">
        <Text>{peticion.phone_number}</Text>
        <Text>{peticion.email}</Text>
      </div>
      <Text>{peticion.message}</Text>
    </li>
  )
}
