export interface Product {
    id: string;
    name: string;
    description: string;
    price: number;
    stock: number;
    type: 'repuesto' | 'consumible';
    workshopId: string;
  }

  export interface Service {
    id: string;
    name:string;
    description: string;
    price: number;
    suggestedTime: number; // en horas
    workshopId: string;
  }
