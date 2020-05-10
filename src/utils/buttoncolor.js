import colors from "../configs/colors";

const map = new Map([
  [
    "default",
    {
      color: colors.midnightBlue,
    },
  ],
  [
    "primary",
    {
      color: colors.green,
    },
  ],
  [
    "danger",
    {
      color: colors.red,
    },
  ],
  [
    "warning",
    {
      color: colors.yellow,
    },
  ],
  [
    "disabled",
    {
      color: colors.silver,
    },
  ],
  [
    "info",
    {
      color: colors.blue,
    },
  ],
]);

/**
 *
 * @param {variant} variant type
 *
 * Function retruns the respective color object for the variant
 */
function forVariant(variant = "default") {
  return (() => {
    let variantScheme = map.get(variant);
    variantScheme = variantScheme ? variantScheme : map.get("default");

    return {
      color: variantScheme.color,
    };
  })();
}

export default forVariant;
