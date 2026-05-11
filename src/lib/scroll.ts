function easeInOutCubic(t: number): number {
  return t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2
}

export function smoothScrollToId(id: string, duration = 900): void {
  const element = document.getElementById(id)
  if (!element) return

  const elementTop = element.getBoundingClientRect().top + window.scrollY
  const scrollMarginTop = parseInt(getComputedStyle(element).scrollMarginTop, 10) || 0
  const targetY = Math.max(0, elementTop - scrollMarginTop)

  const startY = window.scrollY
  const diff = targetY - startY
  const startTime = performance.now()

  function step(currentTime: number) {
    const elapsed = currentTime - startTime
    const progress = Math.min(elapsed / duration, 1)
    window.scrollTo(0, startY + diff * easeInOutCubic(progress))
    if (progress < 1) requestAnimationFrame(step)
  }

  requestAnimationFrame(step)
}
