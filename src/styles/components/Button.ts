import { EButtonVariants } from '../../shared/types';
import { EColors } from '../types';

const {
  magnolia,
  topaz,
  magnoliaDark,
  black,
  persianRed,
  freeSpeechRed,
  blackOpacity0d01,
  blackOpacity0d35,
  whiteOpacity0d15,
  whiteOpacity0d35,
  white
} = EColors;

const {
  primaryWhite,
  primaryRed,
  outline,
  blurWhite,
  blurBlack,
  secondary,
  transparent
} = EButtonVariants;

const Button = {
  defaultProps: {
    variant: primaryRed
  },
  baseStyle: {
    fontWeight: 'bold',
    _focus: { boxShadow: 'none' }
  },
  sizes: {
    lg: ({ isLoading }: any) => ({
      fontSize: isLoading ? '24px' : '15px',
      lineHeight: '18px',
      height: '56px',
      minWidth: '56px',
      padding: '16px',
      borderRadius: '20px'
    }),
    md: ({ isLoading }: any) => ({
      fontSize: isLoading ? '24px' : '15px',
      lineHeight: '18px',
      height: '48px',
      minWidth: '48px',
      padding: '12px 16px 12px 16px',
      borderRadius: '16px'
    }),
    sm: ({ isLoading }: any) => ({
      fontSize: isLoading ? '14px' : '13px',
      lineHeight: '16px',
      height: '32px',
      minWidth: '32px',
      padding: '8px 16px 8px 16px',
      borderRadius: '10px'
    }),
    xs: ({ isLoading }: any) => ({
      fontSize: isLoading ? '14px' : '13px',
      lineHeight: '16px',
      height: '24px',
      minWidth: '24px',
      padding: '4px 16px 4px 16px',
      borderRadius: '10px'
    })
  },
  variants: {
    [primaryWhite]: {
      bg: magnolia,
      color: topaz,
      _active: { bg: magnoliaDark },
      _hover: {
        _disabled: {
          bgColor: magnolia
        }
      },
      _disabled: {
        bg: magnolia,
        opacity: '0.5',
        _hover: { bg: black }
      },
      _loading: {
        opacity: '1',
        bg: magnolia,
        _hover: {
          bg: magnolia
        }
      }
    },
    [primaryRed]: {
      bg: persianRed,
      color: white,
      _active: { bg: freeSpeechRed },
      _hover: {
        _disabled: {
          bgColor: freeSpeechRed
        }
      },
      _disabled: { bg: freeSpeechRed, opacity: '0.5' },
      _loading: {
        opacity: '1',
        bg: persianRed,
        _hover: {
          bg: persianRed
        }
      }
    },
    [secondary]: {
      bg: magnolia,
      color: topaz,
      _active: { bg: magnoliaDark },
      _hover: {
        _disabled: {
          bgColor: magnoliaDark
        }
      },
      _disabled: { bg: magnoliaDark, opacity: '0.5' },
      _loading: {
        opacity: '1',
        bg: magnolia,
        _hover: {
          bg: magnolia
        }
      }
    },
    [outline]: {
      bg: 'transparent',
      color: topaz,
      _active: { bg: magnoliaDark },
      _hover: {
        _disabled: {
          bgColor: magnoliaDark
        }
      },
      _disabled: { bg: magnoliaDark, opacity: '0.5' },
      _loading: {
        opacity: '1',
        bg: 'transparent',
        _hover: {
          bg: 'transparent'
        }
      }
    },
    [transparent]: {
      bg: 'transparent',
      color: persianRed,
      _active: { bg: magnoliaDark },
      _hover: {
        _disabled: {
          bgColor: magnoliaDark
        }
      },
      _disabled: { bg: magnoliaDark, opacity: '0.5' },
      _loading: {
        opacity: '1',
        bg: 'transparent',
        _hover: {
          bg: 'transparent'
        }
      }
    },
    [blurWhite]: {
      bg: whiteOpacity0d15,
      color: white,
      _active: { bg: whiteOpacity0d35 },
      _hover: {
        _disabled: {
          bgColor: whiteOpacity0d35
        }
      },
      _disabled: { bg: whiteOpacity0d35, opacity: '0.5' },
      _loading: {
        opacity: '1',
        bg: whiteOpacity0d15,
        _hover: {
          bg: whiteOpacity0d15
        }
      }
    },
    [blurBlack]: {
      bg: blackOpacity0d01,
      color: white,
      _active: { bg: blackOpacity0d35 },
      _hover: {
        _disabled: {
          bgColor: blackOpacity0d35
        }
      },
      _disabled: { bg: blackOpacity0d35, opacity: '0.5' },
      _loading: {
        opacity: '1',
        bg: blackOpacity0d01,
        _hover: {
          bg: blackOpacity0d01
        }
      }
    }
  }
};

export default Button;
