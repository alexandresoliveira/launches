import { render, screen } from '@testing-library/react';
import Home from '@/pages/Home';

//TODO #TASK-FRONTEND-04 create assertion to our service ordenation and our list component

test('renders app hello text', () => {
  render(<Home />);

  expect(screen.getByTestId('home-title')).toHaveTextContent('Home');
});
