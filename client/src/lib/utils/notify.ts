import { toast } from 'react-toastify';
import { ToastOptions } from 'react-toastify';

const notify = (
  msg: string,
  duration?: number,
  theme: 'dark' | 'colored' = 'dark',
  notifyOptions?: ToastOptions
) => toast(msg, { autoClose: duration, theme, ...notifyOptions });

export default notify;
