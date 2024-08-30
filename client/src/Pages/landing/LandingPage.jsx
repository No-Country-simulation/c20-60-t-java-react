import Contribute from "@/components/common/Contribute"
import HowToAdopt from "@/components/common/HowToAdopt"
import Stories from "@/components/common/Stories"
import { Text } from "@/components/ui/text"

export function LandingPage() {
  return (
    <div>
      <Text variant="title" className="block text-center p-6">¿Cómo adoptar?</Text>
      <HowToAdopt />
      <Stories />
      <Contribute />
    </div>
  )
}
