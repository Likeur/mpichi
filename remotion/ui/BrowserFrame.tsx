import React from 'react';
import {colors} from '../lib/theme';

type Props = {
  children: React.ReactNode;
  url?: string;
  style?: React.CSSProperties;
};

export const BrowserFrame: React.FC<Props> = ({
  children,
  url = 'mpichi.cd',
  style,
}) => {
  return (
    <div
      style={{
        width: '100%',
        height: '100%',
        borderRadius: 18,
        overflow: 'hidden',
        backgroundColor: colors.creme50,
        boxShadow: '0 40px 100px rgba(0,0,0,0.45)',
        display: 'flex',
        flexDirection: 'column',
        ...style,
      }}
    >
      <div
        style={{
          height: 48,
          flexShrink: 0,
          backgroundColor: '#ebe4da',
          display: 'flex',
          alignItems: 'center',
          gap: 8,
          padding: '0 16px',
          borderBottom: `1px solid ${colors.inkFaint}`,
        }}
      >
        {['#ff5f57', '#febc2e', '#28c840'].map((c) => (
          <div
            key={c}
            style={{width: 12, height: 12, borderRadius: 99, backgroundColor: c}}
          />
        ))}
        <div
          style={{
            marginLeft: 16,
            flex: 1,
            height: 28,
            borderRadius: 8,
            backgroundColor: colors.white,
            display: 'flex',
            alignItems: 'center',
            padding: '0 14px',
            fontFamily: 'system-ui, sans-serif',
            fontSize: 14,
            color: colors.inkSoft,
          }}
        >
          {url}
        </div>
      </div>
      <div style={{flex: 1, minHeight: 0, position: 'relative'}}>{children}</div>
    </div>
  );
};
