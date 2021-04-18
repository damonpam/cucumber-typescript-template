import path from 'path';

export const REPORT_DIR = path.resolve(process.cwd(), 'report');
export const ALLURE_REPORT_DIR = path.resolve(REPORT_DIR, 'allure-results');
