import { defineWorkersConfig } from '@cloudflare/vitest-pool-workers/config';
import react from '@vitejs/plugin-react';

export default defineWorkersConfig({
  plugins: [react()],
  test: {
    poolOptions: {
      workers: {
        wrangler: { configPath: './wrangler.jsonc' },
      },
    },
  },
});
