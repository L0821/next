import React from 'react';
import { NumberPicker } from '@alifd/next';
import { Types } from '@alifd/adaptor-helper';

export interface AdaptorProps {
    level?: 'normal' | 'inline';
    width?: React.CSSProperties['minWidth'];
    size?: 'large' | 'medium' | 'small';
    state?: 'normal' | 'hover' | 'disabled';
    value?: number | string;
    style?: React.CSSProperties;
    className?: string;
}

export default {
    name: 'NumberPicker',
    editor: () => ({
        props: [
            {
                name: 'level',
                type: Types.enum,
                options: ['normal', 'inline'],
                default: 'normal',
            },
            {
                name: 'size',
                type: Types.enum,
                options: ['large', 'medium', 'small'],
                default: 'medium',
            },
            {
                name: 'state',
                label: 'Status',
                type: Types.enum,
                options: ['normal', 'hover', 'disabled'],
                default: 'hover',
            },
            {
                name: 'width',
                type: Types.number,
                default: 80,
            },
            {
                name: 'value',
                type: Types.number,
                default: 1,
            },
        ],
    }),
    adaptor: ({ level, size, state, width, value, style, className, ...others }: AdaptorProps) => {
        return (
            <NumberPicker
                className={`${className} ${state === 'hover' ? 'hover' : ''}`}
                {...others}
                style={{ minWidth: width, ...style }}
                disabled={state === 'disabled'}
                value={value}
                size={size}
                type={level}
            />
        );
    },
};
