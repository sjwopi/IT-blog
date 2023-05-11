type Mods = Record<string, boolean | string>;

export default function classNames(
  cls: string,
  mods: Mods = {},
  additional: string[] = []
): string {
  return [
    ,
    ...additional.filter(Boolean),
    Object.entries(mods)
      .filter(([cls, value]) => Boolean(value))
      .map(([cls, value]) => cls),
    cls,
  ].reverse().join(' ');
}
