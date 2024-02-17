export interface Country {
  Country: string;
  CountryCode: string;
  Date: string;
  ID: string;
  NewConfirmed: number;
  NewDeaths: number;
  NewRecovered: number;
  Premium: any;
  Slug: string;
  TotalConfirmed: number;
  TotalDeaths: number;
  TotalRecovered: number;
}

export interface Global {
  NewConfirmed: number;
  TotalConfirmed: number;
  NewDeaths: number;
  TotalDeaths: number;
  NewRecovered: number;
  TotalRecovered: number;
}
export interface CoivdSummaryResponse {
  Countries: Country[];
  Date: string;
  Global: Global;
  Message: string;
  // Countries: [{ID: "08f81bcd-b8a3-4044-bee5-a360dcdc68d4", Country: "Afghanistan", CountryCode: "AF",…},…]
  // [0 … 99]
  // [100 … 190]
  // Date: "2021-06-06T04:21:31.447Z"
  // Global: {NewConfirmed: 380589, TotalConfirmed: 172447222, NewDeaths: 10527, TotalDeaths: 3712385,…}
  // Date: "2021-06-06T04:21:31.447Z"
  // NewConfirmed: 380589
  // NewDeaths: 10527
  // NewRecovered: 523994
  // TotalConfirmed: 172447222
  // TotalDeaths: 3712385
  // TotalRecovered: 110331967
  // ID: "a4d149e7-323c-4a0c-9d39-0d192b828492"
  // Message: '';
}
