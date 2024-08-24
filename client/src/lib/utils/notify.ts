import { toast } from 'react-toastify';

const notify = (
  msg: string,
  duration?: number,
  theme: 'dark' | 'colored' = 'dark'
) => toast(msg, { autoClose: duration, theme });

export default notify;
