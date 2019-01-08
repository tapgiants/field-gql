import React from 'react';
import { Query } from 'react-apollo';

const formatOptions = (options, keyName, keyLabel) =>
  options.map((option) => {
    let label = typeof keyLabel == 'function' ? keyLabel(option) : option[keyLabel];
    return { value: option[keyName], label: label };
  });

/**
 * Examples
 *
 * <FieldGQL
 *   input="select"
 *   name="country"
 *   label="Country"
 *   valuesQuery={COUNTRIES}
 *   valueKey="code"
 *   valueLabel="name"
 *   valuePath="countries"
 *   FieldCtxComponent={Field}
 * />
 *
 * <FieldGQL
 *   input="checkboxGroup"
 *   name="industries"
 *   label="Industries"
 *   valuesQuery={INDUSTRIES}
 *   valueKey="id"
 *   valueLabel="name"
 *   FieldCtxComponent={Field}
 * />
 *
 * <FieldGQL
 *   input="select"
 *   name="primaryContact"
 *   label="Employee"
 *   valuesQuery={CONTACTS}
 *   valueKey="id"
 *   valueLabel={(item) => `${item.firstName} ${item.lastName}`}
 *   valuePath="contacts"
 *   FieldCtxComponent={Field}
 * />
 *
 * - FieldCtxComponent - use Field component from @tapgiants/form which is used for all the fields in the form. The reason that
 *   we have to use the Field component from the @tapgiants/form is beacuse the form context is provider to the Field.
 *   If you don't care about the context you can write custom field component. Otherwise if the context is needed for a custom field
 *   you can use @tapgiants/FormContext.
 *
 *   The last two suggestions are not tested yet.
 */

const FieldGQL = ({ valuesQuery, FieldCtxComponent, ...props }) => (
  <Query query={valuesQuery}>
    {({ loading, data }) => {
      if (loading) return 'Loading...';

      const path = props.valuePath || props.name;

      return <FieldCtxComponent
        {...props}
        options={formatOptions(data[path].list, props.valueKey, props.valueLabel)}
      />;
    }}
  </Query>
);

export default FieldGQL;
