import clsx from 'clsx';
import { twMerge } from 'tailwind-merge';
import useRegisterViewModel from './register.view-model';

export default function RegisterView() {
  const { goBack, t } = useRegisterViewModel();
  const num = 0;

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-white">
      <h1
        className={twMerge(
          'text-2xl pb-5',
          clsx(num > 1 ? 'text-green-300' : 'text-blue-300'),
        )}
      >
        This is a Register View
      </h1>
      <button
        className="bg-blue-500 text-white px-4 py-2 rounded mt-2"
        onClick={goBack}
      >
        {t('register.register-btn')}
      </button>
    </div>
  );
}
