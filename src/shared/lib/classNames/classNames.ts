type Mods = Record<string, boolean | string>

export default function classNames(cls: string, mods: Mods = {}, additional: string[] = []): string {
  return [
    cls,

    Object.entries(mods)
      .filter(([cls, value]) => Boolean(value))
      .map(([cls, value]) => cls),
      
      ...additional.filter(Boolean)

  ].join(' ')
}

