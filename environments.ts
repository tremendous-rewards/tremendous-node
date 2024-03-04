interface Environments {
  [env: string]: string;
}

export const Environments: Environments = {
  production: 'https://www.tremendous.com/api/v2',
  testflight: 'https://testflight.tremendous.com/api/v2',
};
