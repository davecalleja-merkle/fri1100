import { formatHelpers } from 'style-dictionary/utils';

export default {
  // DTCG format sources
  source: ['tokens/**/*.json'],
  
  // Preprocessor for DTCG type delegation
  preprocessors: ['tokens-studio'],
  
  // v5 Hooks API
  hooks: {
    transforms: {
      // OKLCH to CSS custom transform
      'color/oklch-css': {
        type: 'value',
        filter: (token) => token.$type === 'color' && token.$value.startsWith('oklch'),
        transform: (token) => {
          // Already in OKLCH format, just ensure it's valid CSS
          return token.$value;
        },
      },
      // ShadCN name transform
      'name/shadcn': {
        type: 'name',
        transform: (token) => {
          // Convert path to ShadCN CSS variable format
          // e.g., ['color', 'primary'] -> '--primary'
          const path = token.path.filter(p => p !== 'color' && p !== 'light' && p !== 'dark');
          return `--${path.join('-')}`;
        },
      },
    },
    formats: {
      // Custom CSS format for ShadCN variables
      'css/shadcn-variables': {
        format: async ({ dictionary, file, options }) => {
          const { outputReferences } = options;
          const header = await formatHelpers.fileHeader({ file });
          
          // Separate light and dark tokens
          const lightTokens = dictionary.allTokens.filter(t => 
            t.path.includes('light') || !t.path.includes('dark')
          );
          const darkTokens = dictionary.allTokens.filter(t => 
            t.path.includes('dark')
          );
          
          const formatToken = (token) => {
            const name = token.name;
            const value = outputReferences && token.$value.startsWith('{') 
              ? `var(${token.$value.replace('{', '--').replace('}', '')})`
              : token.$value;
            return `  ${name}: ${value};`;
          };
          
          return `${header}
@layer base {
  :root {
${lightTokens.map(formatToken).join('\n')}
  }
  
  .dark {
${darkTokens.map(formatToken).join('\n')}
  }
}
`;
        },
      },
    },
  },
  
  // Platforms
  platforms: {
    css: {
      transforms: ['color/oklch-css', 'name/shadcn'],
      buildPath: 'app/',
      files: [
        {
          destination: 'tokens.css',
          format: 'css/shadcn-variables',
          options: {
            outputReferences: true,
          },
        },
      ],
    },
  },
};
