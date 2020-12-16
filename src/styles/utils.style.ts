import { Font } from './font.style'
import { Layout } from './layout.style'
import { Color } from './color.style'

type PixelValue = number | "default";

const pxToVw = (viewportWidth: number, sizeInPx: number): string => {
  const percent = viewportWidth / 100
  const calculatedValue = sizeInPx / percent

  return calculatedValue % 1 === 0
    ? calculatedValue.toString() + "vw"
    : calculatedValue.toFixed(3).toString() + "vw"
}

export const pxToRem = (pixelValue: PixelValue, multipler = 1) => {
  const pixelInt = pixelValue === "default" ? Font.baseSize : pixelValue

  return `${(pixelInt * multipler) / Font.baseSize}rem`
}

export const megaClamp = (
  minGridUnitMultiplier: number,
  maxGridUnitMultiplier: number,
  maxWidth: number = Layout.maxWidth.main
) => {
  return `clamp(${pxToRem(Layout.gridUnit, minGridUnitMultiplier)},
    ${pxToVw(maxWidth, Layout.gridUnit * maxGridUnitMultiplier)},
    ${pxToRem(Layout.gridUnit, maxGridUnitMultiplier)}
  )`
}


export const focusAccessible = () => {
  return `
    &:focus {
      outline-width: 0;
      box-shadow: ${Color.palette.yellow} 0 0 0 0.25rem;
      transition: box-shadow 0.2s ease 0s;

      &:active {
        outline-width: 0;
        box-shadow: none;
      }
    }
  `
}

