enum LocaleOptions {
  ID = 'id',
  EN = 'en',
}

export const isValidLocaleOption = (value: string): value is LocaleOptions => {
  return Object.values(LocaleOptions).includes(value as LocaleOptions);
};

export default LocaleOptions;
