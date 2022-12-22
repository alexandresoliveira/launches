import { render, screen } from '@testing-library/react';
import Home from '@/pages/Home';

test('renders app hello text', () => {
  render(<Home />);

  expect(screen.getByTestId('home-title')).toHaveTextContent('Home');
});
