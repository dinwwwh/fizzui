import { DemoContainer, DemoFlexRow } from '@content/components/demo'
import { createFileRoute } from '@tanstack/react-router'
import { Dialog, DialogContent, DialogOverlay, DialogPortal, DialogTrigger } from '@radix-ui/react-dialog'
import { button, dialog } from '@fizzui/styles'

export const Route = createFileRoute('/demos/dialog')({
  component: DialogDemoPage,
})

function DialogDemoPage() {
  return (
    <DemoContainer>
      <DemoFlexRow>
        <Dialog>
          <DialogTrigger className={`${button}`}>
            Open Dialog
          </DialogTrigger>

          <DialogPortal>
            <DialogOverlay className={`${dialog.overlay}`} />
            <DialogContent className={`${dialog}`}>
              The contents of the dialog are rendered in this element.
            </DialogContent>
          </DialogPortal>
        </Dialog>
      </DemoFlexRow>
    </DemoContainer>
  )
}
