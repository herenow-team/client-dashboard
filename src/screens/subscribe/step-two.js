import React from 'react'
import Field from '../../components/ui/field'
import Columns from '../../components/ui/columns'
import Column from '../../components/ui/column'

const StepTwo = () => (
  <Columns isCentered>
    <Column size={8}>
      <Columns>
        <Column size={4}>
          <Field
            type="text"
            name="postal_code"
            label="Cep"
            placeholder="Digite o Cep"
          />
        </Column>
      </Columns>
      <Columns>
        <Column size={9}>
          <Field
            type="text"
            name="street_name"
            label="Endereço"
            placeholder="Digite o Endereço"
          />
        </Column>
        <Column size={3}>
          <Field
            type="text"
            name="street_number"
            label="Numero"
            placeholder="Digite o Numero"
          />
        </Column>
      </Columns>
      <Columns>
        <Column>
          <Field
            type="text"
            name="complement"
            label="Complemento"
            placeholder="Digite o Complemento"
          />
        </Column>
      </Columns>
      <Columns>
        <Column>
          <Field
            type="text"
            name="neighborhood"
            label="Bairro"
            placeholder="Digite o Bairro"
          />
        </Column>
        <Column>
          <Field
            type="text"
            name="city"
            label="Cidade"
            placeholder="Digite a Cidade"
          />
        </Column>
      </Columns>
      <Columns>
        <Column>
          <Field
            type="text"
            name="city"
            label="Estado"
            placeholder="Digite a Estado"
          />
        </Column>
        <Column>
          <Field
            type="text"
            name="country"
            label="País"
            value="Brasil"
            placeholder="Selecione o País"
            readOnly
          />
        </Column>
      </Columns>
    </Column>
  </Columns>
)

export default StepTwo
