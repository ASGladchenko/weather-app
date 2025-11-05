type ClassName = string | Record<string, boolean> | undefined | null | boolean;

export const cn = (...props: ClassName[]): string => {
  let result = '';

  props.forEach((prop) => {
    if (typeof prop === 'string') {
      result += ` ${prop}`;
    } else if (typeof prop === 'object' && prop !== null) {
      for (const key in prop) {
        if (
          Object.prototype.hasOwnProperty.call(prop, key) &&
          prop[key] === true
        ) {
          result += ` ${key}`;
        }
      }
    }
  });

  return result.trim();
};
