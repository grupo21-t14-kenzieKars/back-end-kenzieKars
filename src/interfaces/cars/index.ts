enum Fuels {
    DIESEL = 'Diesel',
    ETANOL = 'Etanol',
    GASOLINE = 'Gasolina',
    FLEX = 'Flex'
  }

export interface ICarUpdate {
    brand?: string
    model?: string
    year?: string
    fuel_type?: Fuels
    color?: string
    kilometers?: number
    fipe_price?: number
    price?: number
    description?: string
}
