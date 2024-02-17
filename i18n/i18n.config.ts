import en from './en.json';
import ru from './ru.json';

export default defineI18nConfig(() => ({
  legacy: false,
  locale: 'en',
  warnHtmlMessage: false,
  messages: {
    en,
    ru,
  },
}));
