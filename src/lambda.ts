import dayjs from 'dayjs';

export const handler = () => {
  console.log(dayjs().format('YYYY-MM-DD'));
};
