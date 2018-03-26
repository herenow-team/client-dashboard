import React from 'react'
import Field from '../../components/ui/field'
import Columns from '../../components/ui/columns'
import Button from '../../components/ui/button'
import Column from '../../components/ui/column'
import Section from '../../components/ui/section'

const fields = [
  {
    type: 'email',
    name: 'email',
    placeholder: 'Digite seu e-mail',
    label: 'Email'
  },
  {
    type: 'password',
    name: 'password',
    placeholder: 'Digite sua senha',
    label: 'Senha'
  },
  {type: 'text', name: 'name', placeholder: 'Digite seu nome', label: 'Senha'},
  {
    type: 'text',
    name: 'legal_name',
    placeholder: 'Digite o nome legal',
    label: 'Nome legal'
  },
  {
    type: 'text',
    name: 'is_company',
    placeholder: 'É companhia',
    label: 'Companhia?'
  },
  {
    type: 'text',
    name: 'segment',
    placeholder: 'Digite o segmento',
    label: 'Segmento'
  },
  {
    type: 'text',
    name: 'postal_code',
    placeholder: 'Digite o CEP',
    label: 'CEP'
  },
  {
    type: 'text',
    name: 'street_name',
    placeholder: 'Digite o logradouro',
    label: 'Logradouro'
  },
  {
    type: 'text',
    name: 'street_number',
    placeholder: 'Digite o número da residência',
    label: 'Número'
  },
  {type: 'text', name: 'city', placeholder: 'Digite a cidae', label: 'Cidade'},
  {
    type: 'text',
    name: 'lat',
    placeholder: 'Digite a latitude',
    label: 'Latitude'
  },
  {
    type: 'text',
    name: 'lon',
    placeholder: 'Digite a longitude',
    label: 'Longitude'
  },
  {type: 'text', name: 'state', placeholder: 'Digite o estado', label: 'Estado'}
]

const Subscribe = () => (
  <Section>
    <Columns isCentered>
      <Column isHalf>
        {fields.map(field => <Field key={field.name} {...field} />)}
        <Button
          type="submit"
          isSuccess
          isFullWidth
          isOutlined
          isRounded
          isMedium
        >
          Cadastrar
        </Button>
      </Column>
    </Columns>
  </Section>
)

export default Subscribe
