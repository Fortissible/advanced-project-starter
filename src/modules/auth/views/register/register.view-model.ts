import useTranslation from 'src/hooks/use-translation.hook';
import useBack from '../../hooks/use-back.hook';

export default function useRegisterViewModel() {
  const goBack = useBack();
  const { t } = useTranslation();

  return {
    goBack,
    t,
  };
}
