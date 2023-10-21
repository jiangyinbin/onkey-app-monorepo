import type { FC } from 'react';
import { forwardRef, useImperativeHandle, useRef } from 'react';

import type { InpageProviderWebViewProps } from './types';
import type { IWebViewWrapperRef } from '@onekeyfe/onekey-cross-webview';

const InpageProviderWebView: FC<InpageProviderWebViewProps> = forwardRef(
  ({ src = '' }: InpageProviderWebViewProps, ref: any) => {
    const iframeRef = useRef<HTMLIFrameElement>(null);
    const iframeWebviewRef = useRef<IWebViewWrapperRef>({
      reload: () => {
        if (iframeRef.current) {
          iframeRef.current.src = 'about:blank';
          setTimeout(() => {
            if (iframeRef.current) {
              iframeRef.current.src = src;
            }
          }, 150);
        }
      },
      loadURL: (url: string) => {
        if (iframeRef.current) {
          setTimeout(() => {
            if (iframeRef.current) {
              iframeRef.current.src = url;
            }
          }, 150);
        }
      },
    });

    useImperativeHandle(ref, (): IWebViewWrapperRef => {
      const wrapper = {
        innerRef: iframeWebviewRef.current,
        reload: () => iframeWebviewRef.current?.reload(),
        loadURL: (url: string) => {
          iframeWebviewRef.current?.loadURL(url);
        },
      };
      return wrapper as IWebViewWrapperRef;
    });

    return (
      <iframe
        ref={iframeRef}
        title="iframe-web"
        src={src}
        frameBorder="0"
        style={{ height: '100%', width: '100%' }}
      />
    );
  },
);
InpageProviderWebView.displayName = 'InpageProviderWebView';

export default InpageProviderWebView;
