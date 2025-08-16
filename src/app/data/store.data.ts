import { Company } from '../models/Company';

export const storeData: Company = {
  id: '001',
  ruc: '1792285747001',
  name: 'Clear minds consultores',
  address: {
    city: 'Quito',
    principalStreet: 'Juan Pablo Sanz',
    secondaryStreet: 'Iñaquito',
    code: 'N-57',
  },
  branches: [
    {
      id: 1,
      name: 'Sucursal 1',
      products: [
        {
          id: 1,
          name: 'Hola',
          price: 2,
          description: 'random',
          category: {
            id: 2,
            name: 'Snacks',
          },
          cuantity: 60,
        },
        {
          id: 2,
          name: 'Hola',
          price: 2,
          description: 'random',
          category: {
            id: 2,
            name: 'Snacks',
          },
          cuantity: 2,
        },
        {
          id: 3,
          name: 'Hola',
          price: 2,
          description: 'random',
          category: {
            id: 2,
            name: 'Snacks',
          },
          cuantity: 6,
        },
      ],
      cuantity: 68,
    },
    {
      id: 2,
      name: 'Sucursal 2',
      products: [
        {
          id: 4,
          name: 'Hola',
          price: 2,
          description: 'random',
          category: {
            id: 2,
            name: 'Snacks',
          },
          cuantity: 5,
        },
        {
          id: 5,
          name: 'Hola',
          price: 2,
          description: 'random',
          category: {
            id: 2,
            name: 'Snacks',
          },
          cuantity: 3,
        },
        {
          id: 6,
          name: 'Hola',
          price: 2,
          description: 'random',
          category: {
            id: 2,
            name: 'Snacks',
          },
          cuantity: 2,
        },
      ],

      cuantity: 10,
    },
    {
      id: 3,
      name: 'Sucursal 3',
      products: [
        {
          id: 6,
          name: 'Papas',
          price: 2,
          description: 'random',
          category: {
            id: 2,
            name: 'Snacks',
          },
          cuantity: 10,
        },
        {
          id: 7,
          name: 'Papas',
          price: 2,
          description: 'random',
          category: {
            id: 2,
            name: 'Snacks',
          },
          cuantity: 20,
        },
        {
          id: 8,
          name: 'Papas',
          price: 2,
          description: 'random',
          category: {
            id: 2,
            name: 'Snacks',
          },
          cuantity: 40,
        },
      ],
      cuantity: 70,
    },
  ],
};
