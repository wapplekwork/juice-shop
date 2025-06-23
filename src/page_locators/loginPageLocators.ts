type ARIARole = 'button' | 'menuitem' | 'textbox';

interface LocatorByRole {
  role: ARIARole;
  name: string;
}

// File contains locators for the login page.
export const loginPageLocators: Record<string, LocatorByRole> = {
  accountBtn: {role: 'button', name: 'Account'},
  loginMenu: {role: 'menuitem', name: 'Login'},
  emailInput: {role: 'textbox', name: 'Email'},
  passwordInput: {role: 'textbox', name: 'Password'},
  loginBtn: {role: 'button', name: 'Login'},
  loginSuccessMessage: {role: 'button', name: 'Your Basket'},
  
};
