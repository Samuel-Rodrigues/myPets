import * as Yup from 'yup';

export const validationSchema = Yup.object().shape({
  email: Yup.string().required('E-mail é obrigatório').email('E-mail inválido'),
  password: Yup.string().required('Senha é obrigatório'),
});

export const initialValues: LoginForm = {email: '', password: ''};
