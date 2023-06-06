enum Fuels {
  DIESEL = "Diesel",
  ETANOL = "Etanol",
  GASOLINE = "Gasolina",
  FLEX = "Flex",
}

interface ICarRequest {
  brand: string;
  model: string;
  year: string;
  fuel_type: Fuels;
  color: string;
  kilometers: number;
  fipe_price: number;
  price: number;
  description: string;
}

interface ICar {
  id: string;
  brand: string;
  model: string;
  year: string;
  fuel_type: Fuels;
  color: string;
  kilometers: number;
  fipe_price: number;
  price: number;
  description: string;
  createdAt: string;
}

export { ICarRequest, ICar };
