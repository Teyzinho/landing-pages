import { screen } from '@testing-library/react';
import { NavLinks } from '.';
import { renderTheme } from '../../styles/render-theme';

import mock from './mock';
import { theme } from '../../styles/theme';

describe('<NavLinks />', () => {
  it('should render links', () => {
    renderTheme(<NavLinks links={mock} />);
    expect(screen.getAllByRole('link')).toHaveLength(mock.length);
  });

  it('should not render links', () => {
    renderTheme(<NavLinks />);
    expect(screen.queryAllByText(/links/i)).toHaveLength(0);
  });

  // it('should render links', async () => {
  //   const { getByText } = renderTheme(<NavLinks links={mock} />);
  //   expect(getByText('Link 1').parentElement).toHaveStyleRule(
  //     'flex-flow',
  //     'column wrap',
  //     {
  //       media: theme.media.lteMedium,
  //     },
  //   );
  // });

  it('should match snapshot', () => {
    const { container } = renderTheme(<NavLinks links={mock} />);
    expect(container.firstChild).toMatchSnapshot();
  });
});
