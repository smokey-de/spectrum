import React, { CSSProperties } from 'react';

export interface IProps {
    style?: CSSProperties;
    id?: any;
    className?: string;
    onClick?: (e?: any) => void;
    Svg?: any;
    size?: number;
}

const SvgIcon = React.forwardRef<any, IProps>(
    ({ size, style, className, onClick, Svg, id }: IProps): React.ReactElement => {
        if (!Svg || typeof Svg === 'string') {
            return <></>;
        }

        return <Svg onClick={onClick} className={className} style={{ style, fontSize: `${size}px` }} id={id} />;
    }
);

export default SvgIcon;
