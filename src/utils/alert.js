import Swal from 'sweetalert2';

export const alertForm = ({ title, text, icon, confirmButtonText }) => {
  return Swal.fire({
    title,
    text,
    icon,
    confirmButtonText,
  });
};
