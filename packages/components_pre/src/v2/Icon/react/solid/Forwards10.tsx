import Svg, { Path } from 'react-native-svg';

import type { SvgProps } from 'react-native-svg';

const SvgForwards10 = (props: SvgProps) => (
  <Svg fill="none" viewBox="0 0 24 24" accessibilityRole="image" {...props}>
    <Path
      fill="currentColor"
      fillRule="evenodd"
      d="M3.655 8.625a9.003 9.003 0 0 1 15.346-2.281V5a1 1 0 1 1 2 0v4a1 1 0 0 1-1 1h-4a1 1 0 1 1 0-2h1.745A7.003 7.003 0 0 0 5.51 9.375a1 1 0 1 1-1.854-.75Z"
      clipRule="evenodd"
    />
    <Path
      fill="currentColor"
      d="M7.926 19.965V14.26h-.025l-.667.45c-.33.21-.508.273-.717.273a.7.7 0 0 1-.724-.723c0-.311.19-.59.565-.825l1.035-.692c.495-.318.946-.464 1.37-.464.744 0 1.239.502 1.239 1.276v6.411c0 .718-.375 1.117-1.035 1.117-.666 0-1.041-.406-1.041-1.117Zm3.358-3.059v-.464c0-2.583 1.327-4.265 3.46-4.265 2.139 0 3.415 1.65 3.415 4.265v.464c0 2.577-1.34 4.284-3.46 4.284s-3.415-1.669-3.415-4.284Zm2.107-.457v.45c0 1.65.495 2.616 1.333 2.616.832 0 1.333-.971 1.333-2.616v-.45c0-1.638-.501-2.597-1.339-2.597s-1.327.953-1.327 2.597Z"
    />
  </Svg>
);
export default SvgForwards10;
