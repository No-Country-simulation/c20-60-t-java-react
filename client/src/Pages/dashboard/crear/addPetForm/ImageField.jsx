import { CameraMiniIcon } from '@/components/icons/CameraMiniIcon'
import { FormControl, FormField, FormItem, FormLabel, FormMessage, Input } from '@/components/ui'
import { getImageData } from '@/utils/getImageData'
import { useState } from 'react'
import { useFormContext } from 'react-hook-form'

export function ImageField() {
  const [imagePreviews, setImagePreviews] = useState(['', ''])
  const form = useFormContext()

  return (
    <section className="grid grid-cols-2 gap-4">
      <FormField
        control={form.control}
        name="firstImage"
        render={({ field: { onChange, value, ...rest } }) => (
          <>
            <FormItem className="flex flex-col">
              <FormLabel>Imagen principal</FormLabel>
              <label
                htmlFor="firts-image"
                className="relative flex aspect-square cursor-pointer items-center justify-center overflow-hidden rounded-lg border bg-input transition-colors hover:bg-secondary"
              >
                {imagePreviews[0].length ? (
                  <img src={imagePreviews[0]} className="h-full w-full border-none object-cover outline-none" />
                ) : (
                  <CameraMiniIcon />
                )}
              </label>
              <FormControl>
                <Input
                  id="firts-image"
                  className="hidden"
                  onChange={(event) => {
                    const { file, displayUrl } = getImageData(event)
                    setImagePreviews((prevState) => [displayUrl, prevState[1]])
                    onChange(file)
                  }}
                  accept="image/png, image/jpeg"
                  type="file"
                  {...rest}
                  hidden
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          </>
        )}
      />
      <FormField
        control={form.control}
        name="secondImage"
        render={({ field: { onChange, value, ...rest } }) => (
          <>
            <FormItem className="flex flex-col">
              <FormLabel>Imagen secundaria</FormLabel>
              <label
                htmlFor="second-image"
                className="relative flex aspect-square cursor-pointer items-center justify-center overflow-hidden rounded-lg border bg-input transition-colors hover:bg-secondary"
              >
                {imagePreviews[1].length ? (
                  <img src={imagePreviews[1]} className="h-full w-full border-none object-cover outline-none" />
                ) : (
                  <CameraMiniIcon />
                )}
              </label>
              <FormControl>
                <Input
                  id="second-image"
                  className="hidden"
                  onChange={(event) => {
                    const { file, displayUrl } = getImageData(event)
                    setImagePreviews((prevState) => [prevState[0], displayUrl])
                    onChange(file)
                  }}
                  accept="image/png, image/jpeg"
                  type="file"
                  {...rest}
                  hidden
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          </>
        )}
      />
    </section>
  )
}
