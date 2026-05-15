export type HelpOption = {
  title: string
  description: string
  color: string
  value: string
  scrollTarget?: string
}

export const helpOptions: HelpOption[] = [
  {
    title: 'Hacer una donación',
    description:
      'Podés colaborar con un aporte económico para sostener actividades, materiales y encuentros durante todo el año.',
    color: '#efa8e0',
    value: 'Hacer una donación',
    scrollTarget: 'donar',
  },
  {
    title: 'Ser madrina o padrino',
    description:
      'Podés colaborar preparando o donando una merienda para compartir con los chicos y apoyar el proyecto de una manera concreta.',
    color: '#7197fb',
    value: 'Ser madrina o padrino',
  },
  {
    title: 'Ser voluntario',
    description:
      'Podés sumarte con tu tiempo en actividades, apoyo escolar, organización o acompañamiento en los espacios del barrio.',
    color: '#fedf6a',
    value: 'Ser voluntario',
  },
  {
    title: 'Tengo una idea',
    description:
      'Si querés proponer una iniciativa, alianza o forma nueva de colaborar, también queremos escucharte.',
    color: '#55564d',
    value: 'Tengo una idea',
  },
]
