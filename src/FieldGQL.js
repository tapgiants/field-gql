import React from 'react';
import { Query } from 'react-apollo';

const formatOptions = (options, keyName, keyLabel) =>
  options.map((option) => {
    let label = typeof keyLabel == 'function' ? keyLabel(option) : option[keyLabel];
    return { value: option[keyName], label: label };
  });

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
