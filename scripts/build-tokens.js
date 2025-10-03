import StyleDictionary from 'style-dictionary';

async function buildTokens() {
  try {
    console.log('🎨 Building Focus theme design tokens...');
    console.log('📦 Using Style Dictionary v5 with DTCG format');
    
    // Load config
    const config = await import('../style-dictionary.config.js');
    
    // Extend and build
    const sd = new StyleDictionary(config.default);
    await sd.buildAllPlatforms();
    
    console.log('✅ Design tokens built successfully!');
    console.log('📄 Output: app/tokens.css');
    console.log('');
    console.log('💡 To customize:');
    console.log('   1. Edit tokens/base.json');
    console.log('   2. Run: pnpm run build:tokens');
    console.log('   3. View changes in your app');
  } catch (error) {
    console.error('❌ Error building design tokens:', error);
    process.exit(1);
  }
}

buildTokens();
