import { envs } from '@/config/envs'
import { DevIcon } from '../icons/DevIcon'
import { Text } from './text'

export function DevPill() {
  if (envs.MODE === 'production') return null

  return (
    <div className="fixed bottom-0 left-0 m-12 flex flex-col gap-1 rounded-lg bg-green-400 px-4 py-2 shadow-xl">
      <header className="flex gap-2">
        <DevIcon />
        <Text className="text-green-800">Dev mode</Text>
      </header>
      {envs.BACKEND && <Text className="font-bold text-green-700">With backend connection</Text>}
    </div>
  )
}
