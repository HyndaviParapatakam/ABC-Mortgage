import { render, screen, fireEvent } from '@testing-library/react';
import Login from '../components/Login';
import { loginUser } from '../services/api';
jest.mock('../services/api');

test('should update userInfoData on input change', () => {
  render(<Login onLogin={() => {}} />);

  const customerIdInput = screen.getByLabelText('Customer ID');
  const passwordInput = screen.getByLabelText('Password');

  fireEvent.change(customerIdInput, { target: { value: 'testCustomerId' } });
  fireEvent.change(passwordInput, { target: { value: 'testPassword' } });

  expect(screen.getByDisplayValue('testCustomerId')).toBeInTheDocument();
  expect(screen.getByDisplayValue('testPassword')).toBeInTheDocument();
});

test('should clear error message when inputs change', () => {
  render(<Login onLogin={() => {}} />);

  const customerIdInput = screen.getByLabelText('Customer ID');
  const passwordInput = screen.getByLabelText('Password');

  fireEvent.change(customerIdInput, { target: { value: 'testCustomerId' } });
  fireEvent.change(passwordInput, { target: { value: 'testPassword' } });

  expect(screen.queryByText('All fields are required.')).toBeNull();
});

// test('should update error state on failed login attempt', async () => {
//     render(<Login onLogin={() => {}} />);
  
//     const customerIdInput = screen.getByLabelText('Customer ID');
//     const passwordInput = screen.getByLabelText('Password');
  
//     fireEvent.change(customerIdInput, { target: { value: 'invalidCustomerId' } });
//     fireEvent.change(passwordInput, { target: { value: 'invalidPassword' } });
  
//     const button = screen.getByText('Login');
//     fireEvent.click(button);
  
//     expect(await screen.getByDisplayValue('Invalid credentials.')).toBeInTheDocument();
//   });

//   test('should call onLogin prop on successful login', async () => {
//     const mockOnLogin = jest.fn();
//     render(<Login onLogin={mockOnLogin} />);
  
//     const customerIdInput = screen.getByLabelText('Customer ID');
//     const passwordInput = screen.getByLabelText('Password');
  
//     fireEvent.change(customerIdInput, { target: { value: 'validCustomerId' } });
//     fireEvent.change(passwordInput, { target: { value: 'validPassword' } });

//     loginUser.mockResolvedValueOnce([{ customerId: 'validCustomerId' }]);
  
//     const button = screen.getByText('Login');
//     fireEvent.click(button);
  
//     expect(mockOnLogin).toHaveBeenCalled();
//   });

// test('should handle API error gracefully', async () => {
//     render(<Login onLogin={() => {}} />);
  
//     const customerIdInput = screen.getByLabelText('Customer ID');
//     const passwordInput = screen.getByLabelText('Password');
  
//     fireEvent.change(customerIdInput, { target: { value: 'validCustomerId' } });
//     fireEvent.change(passwordInput, { target: { value: 'validPassword' } });
  
//     loginUser.mockRejectedValueOnce(new Error('Something went wrong'));
  
//     const button = screen.getByText('Login');
//     fireEvent.click(button);
  
//     expect(await screen.findByText('Something went wrong.')).toBeInTheDocument();
//   });
  