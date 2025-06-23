type RoleType = 'button' | 'textbox';

export const addressPageLocators = {
  addNewAddressBtn: { role: 'button' as RoleType, name: 'Add New Address' },
  countryInput: { role: 'textbox' as RoleType, name: 'Please provide a country.'},
  nameInput: { role: 'textbox' as RoleType, name: 'Please provide a name.'},
  mobileInput: { role: 'textbox' as RoleType, name: 'Please provide a mobile number.'},
  zipInput: { role: 'textbox' as RoleType, name: 'Please provide a ZIP code.'},
  addressInput: { role: 'textbox' as RoleType, name: 'Please provide an address.'},
  cityInput: { role: 'textbox' as RoleType, name: 'Please provide a city.'},
  submitBtn: { role: 'button' as RoleType, name: 'Submit'}
};
