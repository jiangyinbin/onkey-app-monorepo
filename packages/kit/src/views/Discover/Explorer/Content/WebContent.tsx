import { useMemo } from 'react';

import WebView from '@onekeyhq/kit/src/components/WebView';

import { webviewRefs } from '../../explorerUtils';
import {
  setWebTabDataAtomWithWriteOnly,
  webTabsStore,
} from '../Context/contextWebTabs';

import type { WebTab } from '../Context/contextWebTabs';
import type { WebViewProps } from 'react-native-webview';

type IWebContentProps = WebTab & WebViewProps;

function WebContent({ id, url }: IWebContentProps) {
  const webview = useMemo(
    () => (
      <WebView
        id={id}
        src={url}
        onWebViewRef={(ref) => {
          console.log('===>>>>onWebViewRef: ', ref);
          if (ref && ref.innerRef) {
            if (!webviewRefs[id]) {
              webTabsStore.set(setWebTabDataAtomWithWriteOnly, {
                id,
                refReady: true,
              });
            }
            webviewRefs[id] = ref;
          }
        }}
        allowpopups
      />
    ),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [id],
  );

  return webview;
}

export default WebContent;
