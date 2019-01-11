import React from 'react';
import gql from 'graphql-tag';
import Form, { Field, Submit, withForm } from '@tapgiants/form';
import { ApolloWrapper } from '@tapgiants/graphql';
import FieldGQL from '@tapgiants/field-gql';

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

const COUNTRIES = gql`
  query {
    countries {
      list {
        code
        name
      }
    }
  }
`;

const FormMarkup = ({ formName, ...formikBag }) => (
  <ApolloWrapper uri="http://localhost:4001/api">
    <Form {...formikBag}>
      <h1>{formName}</h1>

      <Field
        name="companyName"
        label="Company Name"
      />

      <FieldGQL
        input="select"
        name="country"
        label="country"
        valuesQuery={COUNTRIES}
        valuePath="countries"
        valueKey="code"
        valueLabel="name"
        FieldCtxComponent={Field}
      />

      <FieldGQL
        input="checkboxGroup"
        name="industries"
        label="Industries"
        valuesQuery={INDUSTRIES}
        valueKey="id"
        valueLabel="name"
        FieldCtxComponent={Field}
      />

      <Submit>Save</Submit>
    </Form>
  </ApolloWrapper>
);

const TapGiantsForm = withForm({
  mapPropsToValues: () => ({ companyName: '', industries: [], country: '' }),
  handleSubmit: (values, formikBag) => {
    const { setSubmitting } = formikBag;

    setSubmitting(false);

    console.log('handleSubmit values: ', values);
    // handleSubmit values: { companyName: "", industries: [], country: '' }

    console.log('handleSubmit formikBag', formikBag);
    // handleSubmit formikBag: check https://jaredpalmer.com/formik/docs/api/withFormik
  }
})(FormMarkup);

export default () => <TapGiantsForm formName="Test Form" />;
