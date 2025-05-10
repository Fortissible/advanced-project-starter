import useBack from '@src/hooks/use-back.hook';
import useTranslation from '@src/hooks/use-translation.hook';

export default function useRegisterViewModel() {
  const goBack = useBack();
  const { t } = useTranslation();

  return {
    goBack,
    t,
  };
}
