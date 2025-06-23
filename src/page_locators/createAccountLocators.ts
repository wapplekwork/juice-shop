type RoleType = 'button' | 'textbox' | 'option' | 'combobox';

export const createAccountLocators = {
    emailInput: { role: 'textbox' as RoleType, name: 'Email' },
    passwordInput: { role: 'textbox' as RoleType, name: 'Password' },
    securityQuestionCombo: { role: 'combobox' as RoleType, name: 'Security Question' },
    securityQuestionOption: { role: 'option' as RoleType, name: 'Your eldest siblings middle name?' },
    securityQuestionAnswerInput: { role: 'textbox' as RoleType, name: 'Answer' },
    registerBtn: { role: 'button' as RoleType, name: 'button#registerButton' },

};
