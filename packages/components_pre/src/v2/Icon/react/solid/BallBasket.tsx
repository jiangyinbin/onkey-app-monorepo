import Svg, { Path } from 'react-native-svg';

import type { SvgProps } from 'react-native-svg';

const SvgBallBasket = (props: SvgProps) => (
  <Svg fill="none" viewBox="0 0 24 24" accessibilityRole="image" {...props}>
    <Path
      fill="currentColor"
      d="M4.113 5.85A9.95 9.95 0 0 0 2.047 11h4.889a7.988 7.988 0 0 0-2.823-5.15ZM2.047 13a9.95 9.95 0 0 0 2.066 5.152A7.988 7.988 0 0 0 6.936 13h-4.89Zm3.45-8.6A9.98 9.98 0 0 1 8.948 11h2.05V2.05a9.957 9.957 0 0 0-5.5 2.35Zm7.501-2.35V11h2.049a9.98 9.98 0 0 1 3.45-6.6 9.957 9.957 0 0 0-5.5-2.35Zm6.884 3.8A7.988 7.988 0 0 0 17.06 11h4.89a9.95 9.95 0 0 0-2.067-5.15ZM21.948 13H17.06a7.988 7.988 0 0 0 2.823 5.152A9.95 9.95 0 0 0 21.948 13Zm-3.451 6.6a9.957 9.957 0 0 1-5.5 2.351v-8.95h2.05a9.98 9.98 0 0 0 3.45 6.599Zm-7.499 2.351v-8.95h-2.05a9.98 9.98 0 0 1-3.45 6.599 9.957 9.957 0 0 0 5.5 2.351Z"
    />
  </Svg>
);
export default SvgBallBasket;
