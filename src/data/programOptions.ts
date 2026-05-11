import apoyoShape from '../assets/espacios/shape_apoyo escolar.svg'
import apostolitosShape from '../assets/espacios/shape_apostolitos.svg'
import escuelitaShape from '../assets/espacios/shape_escuelita.svg'
import preescolarShape from '../assets/espacios/shape_preescolar.svg'
import apoyoEscolarImage from '../assets/espacios/Program Image_1.png'

export type ProgramOption = {
  title: string
  color: string
  image: string
  description: string
  shape: string
}

export const programOptions: ProgramOption[] = [
  {
    title: 'Apoyo escolar',
    color: '#fedf6a',
    image: apoyoEscolarImage,
    description: 'Los acompañamos en su proceso educativo, reforzando hábitos de estudio, autonomía y confianza.',
    shape: apoyoShape,
  },
  {
    title: 'Pre-escolar',
    color: '#7197fb',
    image: 'https://www.figma.com/api/mcp/asset/a8124750-e262-420a-9120-d8193e3efe01',
    description: 'Creamos un espacio de juego y aprendizaje temprano para estimular el vínculo, la curiosidad y la socialización.',
    shape: preescolarShape,
  },
  {
    title: 'Escuelita de fútbol',
    color: '#efa8e0',
    image: 'https://www.figma.com/api/mcp/asset/051ee3f1-06a8-49f7-a7e9-e39825206d68',
    description: 'Promovemos trabajo en equipo, constancia y alegría a través del deporte compartido en comunidad.',
    shape: escuelitaShape,
  },
  {
    title: 'Apostolitos',
    color: '#9b9c94',
    image: 'https://www.figma.com/api/mcp/asset/8e9f63db-13ad-49cb-b9ed-bada423faa52',
    description: 'Compartimos encuentros de fe, valores y pertenencia para acompañar su crecimiento espiritual.',
    shape: apostolitosShape,
  },
]
