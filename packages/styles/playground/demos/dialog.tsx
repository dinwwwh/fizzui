import { Dialog, DialogContent, DialogOverlay, DialogPortal, DialogTrigger } from '@radix-ui/react-dialog'
import { button, dialog } from '../../src'
import { DemoContainer, DemoFlexRow } from '../components/demo'

export default function DialogDemo() {
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
