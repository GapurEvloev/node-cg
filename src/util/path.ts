import path from 'path';

const rootDir = path.dirname(require.main?.filename || '');
export const appDir = path.join(rootDir, '..');

export default rootDir;
