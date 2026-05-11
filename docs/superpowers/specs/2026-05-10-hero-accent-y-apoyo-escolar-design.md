# Hero Accent Y Apoyo Escolar Asset Update Design

## Objetivo

Actualizar dos assets visuales de la landing sin cambiar su estructura:

- reemplazar el rombo decorativo actual del hero (`hero-section__accent`) por `src/assets/hero/Shape grow.svg`
- reemplazar la imagen actual de la card `Apoyo escolar` por `src/assets/espacios/Program Image_1.png`

## Alcance

El cambio es estrictamente visual. No se modifica contenido, jerarquía, navegación, animaciones existentes del shape rotatorio, ni comportamiento de hover de las cards.

## Enfoque

### Hero

El acento del hero dejará de ser un `div` con fondo y rotación por CSS y pasará a renderizarse como un `img` decorativo. Esto permite usar el asset entregado por diseño sin alterar el resto de la composición.

Se mantendrán:

- el rol decorativo (`aria-hidden` y `alt=""`)
- la ubicación general en la esquina inferior derecha de la galería
- el ajuste responsivo existente, con retoques menores de tamaño o posición solo si el nuevo SVG lo requiere para verse integrado

No se tocará `RotatingShape` ni su animación.

### Card de Apoyo escolar

La fuente de imagen de `Apoyo escolar` en `programOptions.ts` pasará de la URL remota actual al asset local `Program Image_1.png`.

Se mantendrán:

- la misma card
- el mismo título, color, descripción y shape decorativo
- el mismo render y estilo de imagen en `ProgramsSection`

## Archivos a modificar

- `src/components/HeroSection.tsx`
- `src/components/HeroSection.css`
- `src/data/programOptions.ts`

## Impacto esperado

- el hero mostrará el nuevo asset decorativo entregado por diseño en lugar del rombo amarillo CSS
- la card `Apoyo escolar` usará la nueva imagen local
- no debería haber cambios funcionales ni impacto en tests fuera de snapshots/consultas visuales, que actualmente no dependen de estos assets

## Verificación

- correr `npm test`
- correr `npm run build`
- revisar en navegador que el nuevo accent del hero no tape el slider y que la nueva imagen de `Apoyo escolar` respete el encuadre actual
