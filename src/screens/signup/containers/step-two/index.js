import React from 'react'
import {Columns, Column} from 'bulma-ui'
import Field from '../../../../components/ui/field'
import style from './style.css'

const fields = [
  {
    size: '1/2',
    type: 'text',
    name: 'postal_code',
    label: 'Cep',
    placeholder: 'Digite o Cep'
  },
  {
    type: 'text',
    name: 'street_name',
    label: 'Endereço',
    placeholder: 'Digite o Endereço'
  },
  {
    type: 'text',
    name: 'complement',
    label: 'Complemento',
    placeholder: 'Digite o Complemento'
  },
  {
    type: 'text',
    name: 'neighborhood',
    label: 'Bairro',
    placeholder: 'Digite o Bairro'
  },
  {
    type: 'text',
    name: 'city',
    label: 'Cidade',
    placeholder: 'Digite a Cidade'
  },
  {
    type: 'text',
    name: 'state',
    label: 'Estado',
    placeholder: 'Digite a Estado'
  },
  {
    type: 'text',
    name: 'country',
    label: 'País',
    placeholder: 'Selecione o País',
    value: 'Brasil',
    readOnly: true
  }
]

const StepTwo = () => (
  <Columns isCentered>
    <Column size="1/2">
      <Columns isMultiline isGapless>
        {fields.map(field => (
          <Column key={field.name} size={field.size || 'full'}>
            <div className={style.field}>
              <Field
                type={field.type}
                name={field.name}
                label={field.label}
                placeholder={field.placeholder}
                readOnly={Boolean(field.readOnly)}
                value={field.value || ''}
              />
            </div>
          </Column>
        ))}
      </Columns>
    </Column>
  </Columns>
)

export default StepTwo
