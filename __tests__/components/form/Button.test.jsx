import { render, screen } from '@testing-library/react';
import Button from '../../../components/form/Button';

describe('Button', () => {
  it('renders a default button', () => {
    render(<Button>Sign In</Button>);

    const button = screen.getByRole('button');

    expect(button).toBeInTheDocument();
    expect(button).toHaveTextContent('Sign In');
    expect(button).toHaveClass('bg-[#01A1DF]');
  });

  it('renders a primary button', () => {
    render(<Button color="primary">Sign In</Button>);

    const button = screen.getByRole('button');

    expect(button).toHaveClass('bg-[#01A1DF]');
  });
  it('renders a secondary button', () => {
    render(<Button color="secondary">Sign In</Button>);

    const button = screen.getByRole('button');

    expect(button).toHaveClass('bg-[#5D6677]');
  });
  it('renders a primary outline button', () => {
    render(
      <Button outline color="primary">
        Sign In
      </Button>
    );

    const button = screen.getByRole('button');

    expect(button).toHaveClass('border-[#5D6677]', 'hover:bg-[#01A1DF]');
  });
  it('renders a secondary outline button', () => {
    render(
      <Button outline color="secondary">
        Sign In
      </Button>
    );

    const button = screen.getByRole('button');

    expect(button).toHaveClass('border-[#01A1DF]', 'hover:bg-[#5D6677]');
  });
});
