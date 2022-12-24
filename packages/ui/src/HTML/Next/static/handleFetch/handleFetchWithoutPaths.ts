import { node } from "@zionstate/zionbase/utils";
import { withoutPathsReturn } from "../Types/";

const handleFetch = node.fetch.handleFetch;

export function handleFetchWithoutPaths<
  Data extends { [key: string]: any },
  PageData extends { [key: string]: Data } = {
    [key: string]: Data;
  },
  Field extends keyof PageData = keyof PageData
>(
  origin: string,
  field: Field
): withoutPathsReturn<PageData> {
  return {
    // @ts-expect-error
    getStaticProps: async () => {
      const res = await handleFetch<{
        [key: string]: Data;
      }>(origin);
      let array: Data[] = [];
      for (let key in res) {
        const data = res[key];
        if (!data) return;
        array.push(data);
      }
      return { props: { [field]: array } };
    },
  };
}
