module.exports = {
  extends: [
    'next/core-web-vitals',
    'eslint:recommended', // Agrega eslint:recommended para reglas básicas de ESLint
    'plugin:tailwindcss/recommended',
    'plugin:prettier/recommended' // Usa plugin:prettier/recommended para integración con Prettier
  ],
  // Agrega cualquier configuración adicional según sea necesario
  rules: {
    // Define reglas adicionales si es necesario
    // Por ejemplo:
    // 'no-console': 'warn',
  },
  // Agrega ajustes adicionales de ESLint según sea necesario
  overrideConfig: {
    linterOptions: {
      // Configuración adicional de ESLint
      reportUnusedDisableDirectives: true // Utiliza reportUnusedDisableDirectives si es necesario
    }
  }
};
