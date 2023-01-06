export type BlockType = {
  maxValue: number;
  startValue: number;
  setCounter: (counter: string | number) => void;
  typeCounter: boolean;
  open: boolean;
  setOpen: (open: boolean) => void;
};
