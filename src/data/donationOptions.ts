export type DonationOption = {
  amount: string
  description?: string
  color: string
  textColor: string
  href: string
  featured?: boolean
}

export const oneTimeDonationHref = 'https://link.mercadopago.com.uy/peregrinos'

export const donationOptions: DonationOption[] = [
  {
    amount: '$250',
    description: 'Las meriendas de un niño',
    color: '#fedf6a',
    textColor: '#37392f',
    href: 'https://mpago.la/15TofXv',
  },
  {
    amount: '$500',
    description: 'Los materiales de un niño',
    color: '#efa8e0',
    textColor: '#37392f',
    href: 'https://mpago.la/12m8ZGA',
  },
  {
    amount: '$1.000',
    description: 'El equipo de profesionales de un niño: maestra, psicopedagoga y asistente social',
    color: '#7197fb',
    textColor: '#f8f6f1',
    href: 'https://mpago.la/1JkmD3P',
  },
  {
    amount: '$2.200',
    description: 'Todo lo necesario para acompañar a un niño durante un mes',
    color: '#37392f',
    textColor: '#f8f6f1',
    href: 'https://mpago.la/1ErePUW',
    featured: true,
  },
]
