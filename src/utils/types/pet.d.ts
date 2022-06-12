declare type Pet = {
  name: string;
  imageURL?: string;
  age: { value: number; type: 'year' | 'month' };
  gender?: 'male' | 'female';
};
