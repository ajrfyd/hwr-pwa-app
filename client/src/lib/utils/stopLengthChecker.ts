import { CreateStopType } from '@/types/stop';

const stopLengthChecker = (stop: CreateStopType) => {
  let next = true;
  for (const [_, v] of Object.entries(stop)) {
    if (!v) {
      next = false;
      break;
    }
  }

  return next;
};

export default stopLengthChecker;
