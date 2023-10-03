import { screen } from '@testing-library/react';
import { Footer } from '.';
import { renderTheme } from '../../styles/render-theme';

describe('<Footer />', () => {
  it('should render Footer', () => {
    renderTheme(<Footer html={'<h1>Teste</h1>'}></Footer>);
  });
});
