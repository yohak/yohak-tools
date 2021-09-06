import { numberToPxProps, TransformObject, transformSingleProps } from "./types";

export const extractCurrentTransform = (str: string): TransformObject => {
  const result: TransformObject = {};
  const values = str.split(")").map((r) => r + ")");
  const translateStr = values.find((r: string) => r.match("translate3d"));
  if (translateStr) {
    const v = /(translate3d\()(.*)(\))/
      .exec(translateStr)[2]
      .split(",")
      .map((r) => r.trim());
    result.translateX = v[0];
    result.translateY = v[1];
    result.translateZ = v[2];
  }
  const rotateStr = values.find((r: string) => r.match(/rotate\(/));
  if (rotateStr) {
    const v = /(rotate\()(.*)(\))/
      .exec(rotateStr)[2]
      .split(",")
      .map((r) => r.trim());
    result.rotate = v[0];
  }
  const scaleStr = values.find((r: string) => r.match("scale"));
  if (scaleStr) {
    const v = /(scale\()(.*)(\))/
      .exec(scaleStr)[2]
      .split(",")
      .map((r) => r.trim());
    result.scaleX = v[0];
    result.scaleY = v[1];
  }
  const skewStr = values.find((r: string) => r.match(/skew\(/));
  if (skewStr) {
    const v = /(skew\()(.*)(\))/
      .exec(skewStr)[2]
      .split(",")
      .map((r) => r.trim());
    result.skewX = v[0];
    result.skewY = v[1];
  }
  return result;
};

export const isPxProp = (key: string): boolean => {
  return numberToPxProps.includes(key as any);
};

export const isTransformProp = (key: string): boolean => {
  return transformSingleProps.includes(key as any);
};
