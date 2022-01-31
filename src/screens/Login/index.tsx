import React, {FC} from 'react';
import {Formik} from 'formik';

import {initialValues, validationSchema} from './form';

import Login from './Login';

type Props = {};

const LoginContainer: FC<Props> = () => {
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={() => console.warn('fez o submite')}>
      <Login />
    </Formik>
  );
};

export default LoginContainer;
