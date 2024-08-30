import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog'
import { Text } from '@/components/ui/text'
import { AdotpForm } from './AdotpForm'

export function DialogForm() {
  return (
    <Dialog>
      <DialogTrigger>Adoptame!</DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle className="flex flex-col gap-x-14 gap-y-8">
            <Text variant="title">Adopta una mascota</Text>
            <Text variant="medium">Completa todos los campos para poder ser elegible.</Text>
          </DialogTitle>
        </DialogHeader>
        <AdotpForm />
      </DialogContent>
    </Dialog>
  )
}
