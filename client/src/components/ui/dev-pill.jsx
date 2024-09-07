import { envs } from '@/config/envs'
import { DevIcon } from '../icons/DevIcon'
import { Text } from './text'

export function DevPill() {
  if (envs.MODE === 'production') return null

  return (
    <div className="fixed bottom-0 left-0 m-12 flex gap-2 rounded-lg bg-green-400 px-4 py-2 shadow-xl">
      <DevIcon />
      <Text className="text-green-800">Dev mode</Text>
    </div>
  )
}
