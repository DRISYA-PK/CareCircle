const isDevelopment = import.meta.env.MODE === 'development';

export const logger = {
  info: (message: string, data?: unknown) => {
    if (isDevelopment) {
      console.log(`ℹ️ INFO: ${message}`, data ?? '');
    }
  },

  warn: (message: string, data?: unknown) => {
    if (isDevelopment) {
      console.warn(`⚠️ WARN: ${message}`, data ?? '');
    }
  },

  error: (message: string, error?: unknown) => {
    console.error(`❌ ERROR: ${message}`, error ?? '');
  },
};