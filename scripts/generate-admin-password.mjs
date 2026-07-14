#!/usr/bin/env node
/**
 * Gera o hash SHA-256 para ADMIN_PASSWORD_HASH.
 * Uso: node scripts/generate-admin-password.mjs "sua-senha-segura"
 */
import { createHash } from 'crypto';

const password = process.argv[2];
if (!password) {
  console.error('Uso: node scripts/generate-admin-password.mjs "sua-senha"');
  process.exit(1);
}

const hash = createHash('sha256').update(password, 'utf8').digest('hex');
console.log('ADMIN_PASSWORD_HASH=' + hash);
