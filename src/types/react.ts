import { SerializedStyles } from "@emotion/utils";

export type AcceptsEmotion = {
  css?: SerializedStyles | SerializedStyles[];
  className?: string;
};
