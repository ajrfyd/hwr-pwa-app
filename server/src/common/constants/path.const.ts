import { join } from 'path';

export const PROJECT_ROOT_PATH = process.cwd();

export const PUBLIC_FOLDER = 'public';
export const USERS_FOLDER = 'users';
export const STOPS_FOLDER = 'stops';
export const DIST_FOLDER = 'dist';
export const BUILD_FOLDER = 'build';

export const PUBLIC_PATH = join(PROJECT_ROOT_PATH, PUBLIC_FOLDER);
export const DIST_PATH = join(PROJECT_ROOT_PATH, DIST_FOLDER);
export const BUILD_PATH = join(PUBLIC_PATH, BUILD_FOLDER);
