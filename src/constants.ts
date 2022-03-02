const SIZES = {
    MOBILE_M: '375px',
    MOBILE_L: '450px',
    TABLET: '768px',
    TABLET_L: '1024px',
    LAPTOP: '1200px',
    DESKTOP: '1600px',
}

export const DEVICE = {
    MOBILE_M: `(min-width: ${SIZES.MOBILE_M})`,
    MOBILE_L: `(min-width: ${SIZES.MOBILE_L})`,
    TABLET: `(min-width: ${SIZES.TABLET})`,
    TABLET_L: `(min-width: ${SIZES.TABLET_L})`,
    LAPTOP: `(min-width: ${SIZES.LAPTOP})`,
    DESKTOP: `(min-width: ${SIZES.DESKTOP})`,
};

export const CONVERSION_RATE = 4.382;