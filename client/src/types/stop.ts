export type DirectionType = 'go' | 'back' | null;
export type LineType = 'seongnam' | 'bundang' | null;

export type CreateStopType = {
  name: string;
  alias: string;
  direction: DirectionType;
  line: LineType;
  arrivalTime: string;
  lat: number;
  lng: number;
  order: number;
};

export type ResponseCreateStop = CreateStopType & {
  createdAt: Date;
  id: string;
  prevArrivalTime: string | null;
  updatedAt: Date;
};
