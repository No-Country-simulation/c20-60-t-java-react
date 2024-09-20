import { Dialog, DialogContent, DialogClose, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog'
import { Text } from '@/components/ui/text'
import { AdotpForm } from './AdotpForm'
import { Button } from '@/components/ui/button'
import { useState } from 'react'

export function DialogForm() {
  const [formWasSent, setFormWasSent] = useState(false)

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button onClick={() => setFormWasSent(false)} className="mt-12 w-full">
          ¡Adóptame!
        </Button>
      </DialogTrigger>
      <DialogContent className="p-11">
        {formWasSent ? (
          <>
            <DialogHeader>
              <DialogTitle className="flex flex-col gap-x-14 gap-y-8">
                <Text variant="title">Datos recibidos correctamente</Text>
                <Text variant="medium" className="text-accent">
                  Gracias por completar el formulario con tus datos. Una vez revisado, te contactaremos por correo electrónico para continuar con el
                  proceso de adopción.
                </Text>
              </DialogTitle>
            </DialogHeader>
            <DialogClose asChild>
              <Button type="button" size="lg" className="mx-auto">
                Close
              </Button>
            </DialogClose>
          </>
        ) : (
          <>
            <DialogHeader>
              <DialogTitle className="flex flex-col gap-x-14 gap-y-8">
                <Text variant="title">Adopta una mascota</Text>
                <Text variant="medium">Completa todos los campos para poder ser elegible.</Text>
              </DialogTitle>
            </DialogHeader>
            <AdotpForm onSend={() => setFormWasSent(true)} />
          </>
        )}
      </DialogContent>
    </Dialog>
  )
}
