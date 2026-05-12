import sharp from 'sharp'
import { stat } from 'fs/promises'
import { join, extname, basename } from 'path'

const MAX_WIDTH = 1920
const QUALITY = 85

const targets = [
  './src/assets/hero/slider/1E9A5741.jpg',
  './src/assets/hero/slider/1E9A5659.jpg',
  './src/assets/hero/slider/1E9A5639.jpg',
  './src/assets/hero/slider/1E9A5625.jpg',
  './src/assets/hero/slider/1E9A5577.jpg',
  './src/assets/Impact Container.png',
  './src/assets/Impact Box_Mobile.png',
  './src/assets/Testimonial Image.png',
]

for (const input of targets) {
  const ext = extname(input).toLowerCase()
  const output = input.replace(ext, '.webp')

  const { width } = await sharp(input).metadata()
  const resizeWidth = width > MAX_WIDTH ? MAX_WIDTH : undefined

  await sharp(input)
    .resize(resizeWidth)
    .webp({ quality: QUALITY })
    .toFile(output)

  const { size: before } = await stat(input)
  const { size: after } = await stat(output)
  console.log(`${basename(input)} → ${basename(output)}: ${(before/1024/1024).toFixed(1)}MB → ${(after/1024).toFixed(0)}KB`)
}
