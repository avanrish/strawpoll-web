interface HeroStatistics {
  label: keyof IntlMessages['Hero']['Stats'];
  value: string;
}

export const heroStatistics = [
  { label: 'users', value: '500k+' },
  { label: 'polls', value: '6.5M+' },
  { label: 'votes', value: '190M+' },
] as unknown as HeroStatistics[];
