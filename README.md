# What is @tapgiants/field-gql
@tapgiants/field-gql goal is to provide easy way to load the fields data in your
form fields.

## Installation

Install peer dependencies:
```bash
yarn add apollo-boost graphql react-apollo
```

Install @tapgiants/field-gql

```bash
yarn add @tapgiants/field-gql
```

## FieldGQL API

FieldGQL component follows the convetions described in the [`GraphQL conventions`](#graphql-conventions) section.

So be sure you follow the list convetions.

### Props

#### `name: String`

Field name. If `valuePath` is not provited it will use it as a value of `valuePath`.

#### `label: String`

Field label.

#### `FieldCtxComponent: React.Component`

FieldCtxComponent will receive all the passed props to the `FieldGQL` component. When the data is fetched from the server this component will receive array with the data as an `options` props.

Oprions format:
```js
[
  { value: 'BG', label: 'Bulgaria' },
  { value: 'BF', label: 'Burkina Faso' },
  { value: 'BI', label: 'Burundi' }
]
```

#### `valuesQuery: Object`

This query will be used in order to fetch the data from a GraphQL server. Query [reference](https://github.com/apollographql/graphql-tag).

#### `valueKey: String`

A property name in the json collection that will be returned from the server. It will be used in order to fill in the value property in
the `options` prop.

#### `valueLabel: String`

A property name in the json collection that will be returned from the server. It will be used in order to fill in the label property in
the `options` prop.

#### `valuePath: String`

Example:
```js
// Server response:
{
  data: {
    industries: { // Use `industries` as a `valuePath`.
      list: [ // list key is a part of the GraphQL conventions described bellow.
        {
          id: 'BG', // Use `id` as a `valueKey`
          name: 'Bulgaria' // Use `name` as a `valueLabel`.
        }
      ]
    }
  }
}
```

### FieldGQL example

```jsx
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
```

## GraphQL conventions

Add link to an external repo that describes all the conventions.

## Development

Link the package from your target project and run `yarn start`. This will start the webpacker watcher.

Once you are satisfied with your changes, use `yarn publish` to push the new version to npmjs.org.
