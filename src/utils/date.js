import { format, parseISO, formatDistanceToNow, add } from 'date-fns';
import { ko } from 'date-fns/locale';

// export const formatted = (date) => {
//   const localDate = parseISO(date);

//   const adjustedDate = add(localDate, { hours: 9 });
//   console.log(new Date());
//   console.log(adjustedDate);
//   const formattedDate = format(adjustedDate, 'yyyy년 MM월 dd일', {
//     locale: ko,
//   });

//   return formattedDate;
// };

export const getDateDistance = (date) => {
  const localDate = parseISO(date);

  const adjustedDate = add(localDate, { hours: 9 });

  return formatDistanceToNow(adjustedDate, {
    locale: ko,
  });
};
