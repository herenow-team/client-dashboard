import React from 'react'
import Field from '../../components/ui/field'
import Radio from '../../components/ui/radio'
import Columns from '../../components/ui/columns'
import Column from '../../components/ui/column'

const optionsIsCompany = [
  {text: 'Pessoa Física', value: false, checked: true},
  {text: 'Pessoa Jurídica', value: true, checked: false}
]
const fields = [
  {
    type: 'text',
    name: 'legal_name',
    label: 'Razão Social',
    placeholder: 'Digite a Razão social'
  },
  {
    type: 'text',
    name: 'name',
    label: 'Razão Social',
    placeholder: 'Digite a Razão social'
  },
  {
    type: 'email',
    name: 'email',
    label: 'E-mail',
    placeholder: 'Digite o E-mail'
  },
  {
    type: 'password',
    name: 'password',
    label: 'Senha',
    placeholder: 'Digite a Senha'
  }
]
const StepOne = () => (
  <Columns isCentered>
    <Column isHalf>
      <Radio name="is_company" options={optionsIsCompany} />
      {fields.map(({type, name, label, placeholder}) => (
        <Field
          key={name}
          type={type}
          name={name}
          label={label}
          placeholder={placeholder}
        />
      ))}
    </Column>
  </Columns>
)

export default StepOne
