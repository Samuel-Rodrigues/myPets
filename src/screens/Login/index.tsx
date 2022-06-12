import React, { FC } from 'react';
import { Formik } from 'formik';

import { initialValues, validationSchema } from './form';

import Login from './Login';

type Props = {};

const LoginContainer: FC<Props> = () => {
  const handleSubmit = () => console.warn('fez o submite');
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}>
      <Login />
    </Formik>
  );
};

export default LoginContainer;
