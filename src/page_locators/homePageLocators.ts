type RoleType = 'button' | 'textbox' | 'img' | 'menuitem' | 'link' | 'heading';

export const homePageLocators = {
    addToBasketBtn: {role: 'button' as RoleType, name: 'Add to Basket'},
    yourBasketBtn: {role: 'button' as RoleType, name: 'Your Basket'},
    checkoutBtn: {role: 'button' as RoleType, name: 'Checkout'},
    searchIcon: {role: 'img' as RoleType, name: 'search'},
    logoutBtn: {role: 'menuitem' as RoleType, name: 'Logout'},
    searchIconInput: {role: 'img' as RoleType, name: 'mat-icon'},
    searchInput: {role: 'textbox' as RoleType, name: '#mat-input-1'},
    rowProductName: {role: 'button' as RoleType, name: '.item-name'},
    closeBanners1: {role: 'button' as RoleType, name: 'Me want it!'},
    closeBanners2: {role: 'button' as RoleType, name: 'Close Welcome Banner' },
    closeBanners3: {role: 'button' as RoleType, name: 'Dismiss' },
};
