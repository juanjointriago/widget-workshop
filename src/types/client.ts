export interface Client {
    id: string;
    email: string;
    ruc: string;
    age: number;
    address: string;
    occupation?: string;
    workshopId: string;
  }

  export interface Vehicle {
    id: string;
    brand: string;
    year: number;
    model: string;
    plate: string;
    color: string;
    details: string;
    initialFaults: string;
    clientId: string;
  }
