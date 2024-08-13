import { compose, mergeRootRF } from '@fizzui/compose'
import { tableAligner, tableCheckbox, tableData, tableHeader, tableHeaderIcon, tableRoot, tableRow } from './table.css'
import { checkbox } from './checkbox'

export const table = compose({
  root: tableRoot,
  row: tableRow,
  header: {
    root: tableHeader,
    icon: tableHeaderIcon,
  },
  data: tableData,
  aligner: tableAligner,
  checkbox: mergeRootRF(checkbox, tableCheckbox),
})
