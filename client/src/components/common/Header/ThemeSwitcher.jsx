import { MoonIcon } from '@/components/icons/MoonIcon'
import { SunIcon } from '@/components/icons/SunIcon'
import { useTheme } from '@/hooks/useTheme'

export const ThemeSwitcher = () => {
  const { isDarkMode, toggleTheme } = useTheme()

  return (
    <button onClick={toggleTheme} className="flex gap-3 rounded-full bg-background p-1">
      <span className={`rounded-full p-1 transition ${isDarkMode ? 'bg-[#343434]' : 'text-[#B5B5B5]'}`}>
        <MoonIcon />
      </span>
      <span className={`rounded-full p-1 transition ${!isDarkMode ? 'bg-[#343434]' : 'text-[#B5B5B5]'}`}>
        <SunIcon />
      </span>
    </button>
  )
}
