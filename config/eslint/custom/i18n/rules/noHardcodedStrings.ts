import type { Rule } from 'eslint';

const HAS_LETTERS = /[a-zA-Zа-яА-Я]/;

export const noHardcodedStrings: Rule.RuleModule = {
    meta: {
        type: 'suggestion',
        docs: {
            description: 'Запрещает хардкод строк в JSX, требуя использования i18next',
        },
        schema: [
            {
                type: 'object',
                properties: {
                    ignoreAttributes: {
                        type: 'array',
                        items: { type: 'string' },
                    },
                },
                additionalProperties: false,
            },
        ],
        messages: {
            rawText: 'Не используй сырой текст внутри тегов. Используй i18next.',
            expression: 'Не используй строковые литералы в JSX-выражениях. Используй i18next.',
            attribute: 'Не используй хардкод в атрибуте "{{attr}}". Используй i18next.',
        },
    },
    create(context) {
        const options = context.options[0] || {};
        const ignoreAttributes = options.ignoreAttributes || [
            'className', 'style', 'id', 'type', 'name', 'key',
        ];

        const isIgnoredAttribute = (attrName: string) => {
            if (attrName.startsWith('data-'))
                return true;

            return ignoreAttributes.includes(attrName);
        };

        return {
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            JSXText(node: any) {
                if (HAS_LETTERS.test(node.value)) {
                    context.report({
                        node,
                        messageId: 'rawText',
                    });
                }
            },

            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            Literal(node: any) {
                if (typeof node.value !== 'string' || !HAS_LETTERS.test(node.value))
                    return;

                const parent = node.parent;

                if (
                    parent.type === 'JSXExpressionContainer' &&
                    (parent.parent.type === 'JSXElement' || parent.parent.type === 'JSXFragment')
                ) {
                    context.report({
                        node,
                        messageId: 'expression',
                    });
                }

                if (parent.type === 'JSXAttribute') {
                    const attrName = parent.name.name;

                    if (!isIgnoredAttribute(attrName)) {
                        context.report({
                            node,
                            messageId: 'attribute',
                            data: { attr: attrName },
                        });
                    }
                }
            },
        };
    },
};
