export type Mods = Record<string, string | boolean>;

export function classNames(className: string, mods: Mods = {}, additional: string[] = []): string {
    return [
        className ? className : '',
        ...additional.filter(className => Boolean(className)),
        Object.entries(mods)
            .filter(([, mod]) => Boolean(mod))
            .map(([className]) => className)
    ].join(' ');
}
