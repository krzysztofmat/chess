export const enum colorModeEnum {
  DARK = 'dark',
  LIGHT = 'light',
}

export type colorModeEnumType = colorModeEnum.DARK | colorModeEnum.LIGHT;

export interface colorModeOnSquares {
  [key: string]: colorModeEnumType;
}
