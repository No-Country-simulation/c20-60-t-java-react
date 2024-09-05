import { MoonIcon } from "@/components/icons/MoonIcon"
import { SunIcon } from "@/components/icons/SunIcon"
import { useTheme } from "@/hooks/useTheme"

export const ThemeSwitcher = () => {
  const { isDarkMode, toggleTheme } = useTheme()

  return (
    <button onClick={toggleTheme} className="bg-background rounded-full flex p-1 gap-3">
      <span className={`transition rounded-full p-1 ${isDarkMode ? 'bg-[#343434]' : 'text-[#B5B5B5]'}`}>
        <MoonIcon />
      </span>
      <span className={`transition rounded-full p-1 ${!isDarkMode ? 'bg-[#343434]' : 'text-[#B5B5B5]'}`}>
        <SunIcon />
      </span>
    </button>
  )
}


