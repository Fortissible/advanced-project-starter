export enum LocaleOptions {
  EN = 'en',
  ID = 'id',
}

export const isValidLocaleOption = (value: string): value is LocaleOptions => {
  return Object.values(LocaleOptions).includes(value as LocaleOptions);
};
