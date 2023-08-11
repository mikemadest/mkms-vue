import { describe, it, expect } from 'vitest';
import { createIntl } from 'vue-intl';
import { screen, render, cleanup, within } from '@testing-library/vue';
import App from './App.vue';
import getTranslations from './lang';

const renderApp = (languageChoice = 'en') => {
  const intlPlugin = createIntl({
    locale: languageChoice,
    defaultLocale: 'en',
    messages: getTranslations(languageChoice)
  });
  return render(App, {
    global: {
      plugins: [intlPlugin],
      stubs: {
        'font-awesome-icon': true,
        Waypoint: <slot></slot>
      }
    }
  });
};

describe('MKMS main and currently only page', () => {
  afterAll(cleanup);

  it('renders page with header, navigation and 12 articles', () => {
    renderApp();
    expect(screen.getByRole('banner')).toBeInTheDocument();
    expect(screen.getByRole('navigation')).toBeInTheDocument();
    expect(screen.getAllByRole('article').length).toBe(12);

    // this should not be the french version
    expect(
      screen.queryByRole('heading', { name: "Les 4 étapes de l'instabilité" })
    ).not.toBeInTheDocument();
  });

  it('should have a navigation with 4 expected links', () => {
    renderApp();
    const navigation = screen.getByRole('navigation');
    expect(within(navigation).getAllByRole('link').length).toBe(4);
    expect(
      within(navigation).getByRole('link', { name: 'About', href: '#about' })
    ).toBeInTheDocument();
    expect(
      within(navigation).getByRole('link', { name: 'Recent work', href: '#recent-work' })
    ).toBeInTheDocument();
    expect(
      within(navigation).getByRole('link', {
        name: 'LinkedIn',
        href: 'https://www.linkedin.com/in/mickael-meausoone-webdeveloper/?locale=en_US'
      })
    ).toBeInTheDocument();
    expect(
      within(navigation).getByRole('link', { name: 'Français', href: '/fr' })
    ).toBeInTheDocument();
  });

  it('should have correct content for the selected article', () => {
    renderApp();
    const exampleLink =
      'https://medium.com/hmh-engineering/using-linkedom-as-test-environment-in-jest-unit-tests-ec4a7659c8d6';
    const articles = screen.getAllByRole('article');
    const selectedArticle = within(articles[1]);
    expect(
      selectedArticle.getByRole('link', {
        name: 'View article',
        href: exampleLink
      })
    ).toBeInTheDocument();

    expect(
      selectedArticle.getByRole('link', {
        name: 'Illustration for Medium article on LinkeDOM showing a wooden astronaut surrounded by nature',
        href: exampleLink
      })
    ).toBeInTheDocument();

    expect(selectedArticle.getByRole('img')).toBeInTheDocument();
    expect(
      selectedArticle.getByRole('heading', { name: 'Using LinkeDOM as test environment' })
    ).toBeInTheDocument();

    expect(selectedArticle.getAllByRole('listitem').length).toBe(3);
  });

  it('should have expected footer', () => {
    renderApp();
    expect(screen.getByRole('contentinfo')).toHaveTextContent(
      'MkMs - Mickaël MEAUSOONE - Staff Software Engineer'
    );
  });
});

describe('MKMS french version', () => {
  it('renders page with french content', () => {
    renderApp('fr');
    expect(
      screen.getByRole('heading', { name: "Les 4 étapes de l'instabilité" })
    ).toBeInTheDocument();
  });
});
