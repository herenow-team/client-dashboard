import React from 'react'
import Field from '../../components/ui/field'
import Select from '../../components/ui/select'
import Columns from '../../components/ui/columns'
import Column from '../../components/ui/column'

const options = [
  {
    value: 0,
    text: 'Pessoa Jurídica'
  },
  {
    value: 1,
    text: 'Pessoa Física'
  }
]

const StepOne = () => (
  <Columns isCentered>
    <Column isHalf>
      <Select name="is_company" label="Tipo" options={options} />
      <Field
        type="text"
        name="legal_name"
        label="Razão Social"
        placeholder="Digite a Razão social"
      />
      <Field
        type="text"
        name="name"
        label="Nome Fantasia"
        placeholder="Digite a Nome Fantasia"
      />
      <Field
        type="email"
        name="email"
        label="E-mail"
        placeholder="Digite o E-mail"
      />
      <Field
        type="password"
        name="password"
        label="Senha"
        placeholder="Digite a Senha"
      />
    </Column>
  </Columns>
)

export default StepOne
