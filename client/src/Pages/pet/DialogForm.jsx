import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog'
import { AdotpForm } from './AdotpForm'

export function DialogForm() {
  return (
    <Dialog>
      <DialogTrigger>Adoptame!</DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Adopta una mascota</DialogTitle>
          <AdotpForm />
          <DialogDescription>Completa todos los campos para poder ser elegible.</DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  )
}
