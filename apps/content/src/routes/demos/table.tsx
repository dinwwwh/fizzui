import { DemoContainer, DemoFlexRow } from '@content/components/demo'
import { table } from '@fizzui/styles'
import { Checkbox, CheckboxIndicator } from '@radix-ui/react-checkbox'
import { IconCheck, IconChevronDown, IconEdit, IconHelp, IconTrash } from '@tabler/icons-react'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/demos/table')({
  component: TableDemoPage,
})

const products = [
  { id: 1, name: 'Laptop', description: 'High-performance notebook', price: 999.99, cost: 750.00 },
  { id: 2, name: 'Smartphone', description: 'Latest model with 5G', price: 799.99, cost: 600.00 },
  { id: 3, name: 'Wireless Earbuds', description: 'Noise-cancelling audio', price: 149.99, cost: 80.00 },
  { id: 4, name: 'Smartwatch', description: 'Fitness and health tracking', price: 249.99, cost: 150.00 },
]

function TableDemoPage() {
  return (
    <DemoContainer>
      <DemoFlexRow>
        <table className={`${table}`}>
          <thead>
            <tr className={`${table.row}`}>
              <th className={`${table.header}`}>
                <div className={`${table.aligner}`}>
                  <Checkbox className={`${table.checkbox({ standalone: true })}`}>
                    <CheckboxIndicator className={`${table.checkbox({ standalone: true }).indicator}`} asChild>
                      <IconCheck />
                    </CheckboxIndicator>
                  </Checkbox>
                </div>
              </th>
              <th className={`${table.header({ variant: 'leading-text' })}`}>
                <div className={`${table.aligner}`}>
                  <Checkbox className={`${table.checkbox}`}>
                    <CheckboxIndicator className={`${table.checkbox.indicator}`} asChild>
                      <IconCheck />
                    </CheckboxIndicator>
                  </Checkbox>
                  Product
                </div>
              </th>
              <th className={`${table.header({ clickable: true })}`}>
                <div className={`${table.aligner}`}>
                  Description
                  <IconChevronDown className={`${table.header.icon}`} />
                </div>
              </th>
              <th className={`${table.header({ clickable: true })}`} data-disabled>Price</th>
              <th className={`${table.header}`}>
                <div className={`${table.aligner}`}>
                  Cost
                  <IconHelp className={`${table.header.icon}`} />
                </div>
              </th>
              <th className={`${table.header}`}>
                <span style={{ display: 'none' }}>Actions</span>
              </th>
            </tr>
          </thead>
          <tbody>
            {products.map(product => (
              <tr key={product.id} className={`${table.row}`}>
                <td className={`${table.data}`}>
                  <div className={`${table.aligner}`}>
                    <Checkbox className={`${table.checkbox({ standalone: true })}`}>
                      <CheckboxIndicator className={`${table.checkbox({ standalone: true }).indicator}`} asChild>
                        <IconCheck />
                      </CheckboxIndicator>
                    </Checkbox>
                  </div>
                </td>
                <td className={`${table.data({ variant: 'leading-text' })}`}>
                  <div className={`${table.aligner}`}>
                    <Checkbox className={`${table.checkbox}`}>
                      <CheckboxIndicator className={`${table.checkbox.indicator}`} asChild>
                        <IconCheck />
                      </CheckboxIndicator>
                    </Checkbox>
                    {product.name}
                  </div>
                </td>
                <td className={`${table.data}`}>{product.description}</td>
                <td className={`${table.data}`}>
                  $
                  {product.price.toFixed(2)}
                </td>
                <td className={`${table.data}`}>
                  $
                  {product.cost.toFixed(2)}
                </td>
                <td className={`${table.data}`}>
                  <IconEdit style={{ marginRight: '8px' }} />
                  <IconTrash />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </DemoFlexRow>
    </DemoContainer>
  )
}
