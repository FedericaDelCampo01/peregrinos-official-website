import apoyoShape from '../assets/espacios/shape_apoyo escolar.svg'
import apostolitosShape from '../assets/espacios/shape_apostolitos.svg'
import escuelitaShape from '../assets/espacios/shape_escuelita.svg'
import preescolarShape from '../assets/espacios/shape_preescolar.svg'
import apoyoEscolarImage from '../assets/espacios/Program Image_1.png'
import preEscolarImage from '../assets/fotos pere/pre_escolar_2x.webp'
import escuelitaImage from '../assets/fotos pere/escuelita_2x.webp'
import apostolitosImage from '../assets/fotos pere/apostolitos_2x.webp'

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
    image: preEscolarImage,
    description: 'Creamos un espacio de juego y aprendizaje temprano para estimular el vínculo, la curiosidad y la socialización.',
    shape: preescolarShape,
  },
  {
    title: 'Escuelita de fútbol',
    color: '#efa8e0',
    image: escuelitaImage,
    description: 'Promovemos trabajo en equipo, constancia y alegría a través del deporte compartido en comunidad.',
    shape: escuelitaShape,
  },
  {
    title: 'Apostolitos',
    color: '#9b9c94',
    image: apostolitosImage,
    description: 'Compartimos encuentros de fe, valores y pertenencia para acompañar su crecimiento espiritual.',
    shape: apostolitosShape,
  },
]
