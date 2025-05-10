import { zodResolver } from '@hookform/resolvers/zod';
import {
  loginSchema,
  LoginSchema,
} from '@src/modules/auth/views/login/mutations/schemas/login.schema';
import { useForm } from 'react-hook-form';

export default function useLoginForm() {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginSchema, undefined, LoginSchema>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      username: '',
      password: '',
    },
  });

  return {
    control,
    handleSubmit,
    errors,
  };
}
