import { noHardcodedStrings } from './rules/noHardcodedStrings';

export const i18nextPlugin = {
    rules: {
        'no-hardcoded-strings': noHardcodedStrings,
    },
};
