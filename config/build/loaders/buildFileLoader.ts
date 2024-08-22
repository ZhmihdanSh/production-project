export function buildFileLoader() {
    return {
        test: /\.(png|jpe?g|woff2?)$/i,
        use: 'file-loader'
    };
}
