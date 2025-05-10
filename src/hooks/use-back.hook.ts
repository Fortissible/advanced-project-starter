import { useNavigate } from 'react-router';

export default function useBack() {
  const navigate = useNavigate();

  const goBack = () => {
    navigate(-1);
  };

  return goBack;
}
