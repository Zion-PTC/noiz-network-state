export interface IstaticImplements_v1 {
  <T>(): <U extends T>(constructor: U) => void;
}

export function staticImplements_v1<T>() {
  return <U extends T>(constructor: U) => {
    constructor;
  };
}
