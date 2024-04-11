// eslint-disable-next-line no-undef
module.exports = {
    '*.{js,jsx,ts,tsx,json,scss,css,md,mdx}': ['prettier --write'],
    '*.{js,jsx,ts,tsx}': ['eslint --max-warnings=0'],
    '*.{ts,tsx}': [() => 'tsc --noEmit'],
};
