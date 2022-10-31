const StyleDictionary = require('style-dictionary');

const fontWeightMap = {
  thin: 100,
  extralight: 200,
  ultralight: 200,
  extraleicht: 200,
  light: 300,
  leicht: 300,
  normal: 400,
  regular: 400,
  buch: 400,
  medium: 500,
  kraeftig: 500,
  kräftig: 500,
  semibold: 600,
  demibold: 600,
  halbfett: 600,
  bold: 700,
  dreiviertelfett: 700,
  extrabold: 800,
  ultabold: 800,
  fett: 800,
  black: 900,
  heavy: 900,
  super: 900,
  extrafett: 900,
};

/**
 * Helper: Transforms letter spacing % to em
 */
function transformFontWeights(value) {
  const mapped = fontWeightMap[value.toLowerCase()];
  return `${mapped}`;
}

/**
 * Helper: Transforms dimensions to px
 */
function transformDimensionPx(value) {
  if (value.toString().endsWith('px')) {
    return value;
  }
  return `${value}px`;
}

/**
 * Helper: Transforms dimensions to rem
 */
function transformDimensionRem(value, description) {
  if (value.toString().endsWith('rem')) {
    return value;
  }
  return `${value}rem`;
}

/**
 * Transform fontWeights to numerical
 */
StyleDictionary.registerTransform({
  name: 'type/fontWeight',
  type: 'value',
  transitive: true,
  matcher: (token) => token.type === 'fontWeights',
  transformer: (token) => transformFontWeights(token.value),
});

/**
 * Transform dimensions to px
 */
StyleDictionary.registerTransform({
  name: 'size/px',
  type: 'value',
  transitive: true,
  matcher: (token) => ['dimension', 'borderRadius', 'spacing'].includes(token.type),
  transformer: (token) => transformDimensionPx(token.value),
});

/**
 * Transform fontSizes to rem
 */
StyleDictionary.registerTransform({
  name: 'size/rem',
  type: 'value',
  transitive: true,
  matcher: (token) => ['fontSizes'].includes(token.type),
  transformer: (token) => transformDimensionRem(token.value),
});

const myStyleDictionary = StyleDictionary.extend({
  source: ['src/assets/tokens/sd-tokens.json'],
  platforms: {
    css: {
      transforms: ['type/fontWeight', 'size/rem', 'size/px', 'name/cti/kebab'],
      buildPath: 'src/assets/tokens/',
      prefix: 'figma',
      files: [
        {
          destination: 'css/_variables.scss',
          format: 'css/variables',
        },
      ],
    },
  },
});

myStyleDictionary.buildAllPlatforms();

/* Format to convert composition tokens
StyleDictionary.registerFormat({
  name: "css/compositionClasses",
  formatter: (dictionary, config) => {
    return `:root {
  ${dictionary.allProperties.map(prop => (
      `${Object.entries(prop.original.value).map((property => {
        const [key, value] = property;
        return `--${prop.name}-${mapPropertyToCSSOutput(key, value)}`
      })).join("\n")}`
    )).join("\n")}
  }`;
  }
});
*/
