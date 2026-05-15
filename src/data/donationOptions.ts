export type DonationOption = {
  amount: string
  description: string
  color: string
  textColor: string
  href: string
}

export const donationOptions: DonationOption[] = [
  {
    amount: '$300',
    description: 'Una semana de meriendas',
    color: '#fedf6a',
    textColor: '#37392f',
    href: 'https://mpago.la/2Fbej2H',
  },
  {
    amount: '$500',
    description: 'Materiales para aprender y jugar',
    color: '#efa8e0',
    textColor: '#37392f',
    href: 'https://mpago.la/1NzX93x',
  },
  {
    amount: '$1.000',
    description: 'Un guiso compartido para muchas familias',
    color: '#7197fb',
    textColor: '#37392f',
    href: 'https://mpago.la/19heYHY',
  },
  {
    amount: '$2.000',
    description: 'Un mes de acompañamiento y contención',
    color: '#37392f',
    textColor: '#f8f6f1',
    href: 'https://mpago.la/2YEvcMw',
  },
]
