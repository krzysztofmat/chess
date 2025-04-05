export const enum colorModeEnum {
  DARK = 'dark',
  LIGHT = 'light',
}

export type colorModeEnumType = colorModeEnum.DARK | colorModeEnum.LIGHT;

export interface colorModeOnSquares {
  [key: string]: colorModeEnumType;
}

export const enum playAsEnum {
  WHITE = 'white',
  BLACK = 'black',
}

export type playAsEnumType = playAsEnum.WHITE | playAsEnum.WHITE;

export interface PlayerAtGame {
  imageUrl: string;
  nickname: string;
  rating: number;
  playAs: playAsEnumType;
  takenPieces: {
    pawns: number;
    knights: number;
    bishops: number;
    rooks: number;
    queens: number;
  };
}
