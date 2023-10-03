import { screen } from '@testing-library/react';
import { Base } from '.';
import { renderTheme } from '../../styles/render-theme';

import { mockBase } from './stories';

describe('<Base />', () => {
  it('should render', () => {
    renderTheme(<Base {...mockBase} />);
  });
});
