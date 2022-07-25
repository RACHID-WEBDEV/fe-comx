import { render, screen } from '@testing-library/react';
import { PasswordCheckIcon } from '../../../assets/svgs';
import { Input } from '../../../components/form';

describe('Input', () => {
  it('renders a default input', () => {
    render(<Input />);
    const input = screen.getByRole('textbox');
    expect(input).toHaveClass('border-[#D6D9DD]');
  });

  it('render a placeholder ', () => {
    const placeholder = 'Email Placeholder';
    render(<Input name="email" placeholder={placeholder} />);

    const inputPlaceHolder = screen.getByPlaceholderText(placeholder);

    expect(inputPlaceHolder).toBeInTheDocument();
    expect(inputPlaceHolder).toHaveAttribute('placeholder', placeholder);
  });

  it('render null if label is given', () => {
    const label = 'Email address';
    const placeholder = 'Email Placeholder';
    render(<Input label={label} placeholder={placeholder} />);

    const inputLabel = screen.getByRole('textbox');
    expect(inputLabel).not.toHaveAttribute('placeholder');
  });

  it('render placeholder if label is null', () => {
    const label = null;
    const placeholder = 'Email Placeholder';
    render(<Input label={label} placeholder={placeholder} />);

    const inputPlaceHolder = screen.getByRole('textbox');
    expect(inputPlaceHolder).toHaveAttribute('placeholder', placeholder);
  });

  it('render className props is passed to className', () => {
    const classNameProp = 'p-20';
    render(<Input name="email" className={classNameProp} />);
    const inputClassName = screen.getByRole('textbox');

    expect(inputClassName).toHaveClass(classNameProp);
  });

  it('render Icons is passed to Icon', () => {
    const IconPass = <PasswordCheckIcon width="18px" height="18px" fill="#292D32" />;
    render(<Input name="email" Icon={IconPass} />);

    const inputIcon = screen.getByTestId('icon');

    expect(inputIcon.querySelector('#icon > svg > g > path'));
    expect(inputIcon).toBeInTheDocument('icon');
  });

  it('render label when given', () => {
    const label = 'Email address';
    render(<Input name="email" label={label} />);

    const inputLabel = screen.getByText(label);
    expect(inputLabel).toBeInTheDocument(label, 'Email address');
  });

  it('render label not present if not given', () => {
    const label = null;
    const placeholder = 'Password placeholder';
    render(<Input name="password" label={label} placeholder={placeholder} />);

    const inputLabel = screen.getByPlaceholderText(placeholder);
    expect(inputLabel).toBeInTheDocument(label);
  });

  it('render type is set accordingly to text ', () => {
    render(<Input name="email" />);

    const inputTypeText = screen.getByRole('textbox');
    expect(inputTypeText).toBeInTheDocument();
    expect(inputTypeText).toHaveAttribute('type', 'text');
  });

  it('render type is set accordingly to password', () => {
    render(<Input name="email" label="Password" type="password" />);

    const inputTypePassword = screen.getByLabelText('Password');

    expect(inputTypePassword).toBeInTheDocument();
    expect(inputTypePassword).toHaveAttribute('type', 'password');
  });

  it('render type is set accordingly to email', () => {
    render(<Input name="email" label="Email" type="email" />);

    const inputTypeEmail = screen.getByLabelText('Email');

    expect(inputTypeEmail).toBeInTheDocument();
    expect(inputTypeEmail).toHaveAttribute('type', 'email');
  });
});
