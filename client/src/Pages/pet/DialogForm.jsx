import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog'
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
          Adoptame!
        </Button>
      </DialogTrigger>
      <DialogContent>
        {formWasSent ? (
          <DialogHeader>
            <DialogTitle className="flex flex-col gap-x-14 gap-y-8">
              <Text variant="title">¡Gracias por tu interés en adoptar una mascota!</Text>
              <Text variant="medium" className="text-accent">
                Hemos recibido tu solicitud y nuestro equipo se pondrá en contacto contigo pronto para los próximos pasos. Nos alegra que quieras
                ofrecerle un hogar a una mascota.
              </Text>
            </DialogTitle>
          </DialogHeader>
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
