import React from 'react';
import { ApolloWrapper } from '@tapgiants/graphql';
import FieldGQL from '@tapgiants/field-gql';
import gql from 'graphql-tag';

const INDUSTRIES = gql`
  query {
    industries {
      list {
        id
        name
      }
    }
  }
`;

const Field = ({ name, label, options, onChange }) => (
  <React.Fragment>
    <label>{label}</label>

    <select name={name} onChange={onChange}>
      {options.map(({ value, label }) => <option key={value} value={value}>{label}</option>)}
    </select>
  </React.Fragment>
);

export default () => (
  <ApolloWrapper uri="http://localhost:4001/api">
    <FieldGQL
      name="industries"
      label="Industries"
      valuesQuery={INDUSTRIES}
      valueKey="id"
      valueLabel="name"
      FieldCtxComponent={Field}
      onChange={(e) => console.log(e.target.value)}
    />
  </ApolloWrapper>
);
