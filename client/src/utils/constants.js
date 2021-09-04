export const endpointUrl = 'https://us-central1-primex-test-630fc.cloudfunctions.net/user';

export const roleType = ['Owner', 'Employee'];

export const countries = ['Australia', 'New Zealand'];

export const organisationFeatures = [
    'Trade Vault',
    'Inventory',
    'Analytics',
];

export const masterRecordLists = [
    'Master Record 1',
    'Master Record 2',
    'Master Record 3',
    'Master Record 4',
];

export const defaultUserProps = {
    firstName: '',
    lastName: '',
    email: '',
    role: '',
    organisation: '',
    organisation_features: [],
    country: '',
};

export const defaultOpenModalProps = {
    status: false,
    type: '',
};

export const validEmailProps = {
    status: true,
    valid: 'valid',
};

export const invalidEmailProps = {
    status: false,
    valid: 'invalid',
};
