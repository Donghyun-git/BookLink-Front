import { useNavigate } from 'react-router-dom';

export const useNavigatePage = () => {
  const navigate = useNavigate();

  const navigateToPage = (element) => {
    navigate(element);
  };

  return { navigateToPage };
};
