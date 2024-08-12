import { toast } from 'react-toastify';

const notify = (msg: string, duration?: number) =>
  toast(msg, { autoClose: duration });

export default notify;
