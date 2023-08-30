import { render, screen } from '@testing-library/react';
import MyComponent from './MyComponent'; // Adjust the import path as per your project structure

test('renders a specific text asynchronously', async () => {
    render(<MyComponent />);
  
    const element = await screen.findByText('Expected Text');
    expect(element).toBeInTheDocument();
  });