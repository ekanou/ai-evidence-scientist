import type { AstroIntegration } from 'astro';
import { unresolved } from '../config.ts';

/**
 * Lists unfilled or unconfirmed placeholders from src/config.ts at build time.
 * Set STRICT_PLACEHOLDERS=1 to fail the build instead (use before launch).
 */
export default function placeholderCheck(): AstroIntegration {
  return {
    name: 'placeholder-check',
    hooks: {
      'astro:build:done': ({ logger }) => {
        const open = unresolved();
        if (open.length === 0) {
          logger.info('All placeholders in src/config.ts are filled and confirmed.');
          return;
        }
        const lines = open.map((o) => `  ${o.key.padEnd(22)} ${o.state.padEnd(12)} ${o.note}`);
        const message = `${open.length} placeholder(s) in src/config.ts still need the owner:\n${lines.join('\n')}`;
        if (process.env.STRICT_PLACEHOLDERS === '1') throw new Error(message);
        logger.warn(message);
      },
    },
  };
}
