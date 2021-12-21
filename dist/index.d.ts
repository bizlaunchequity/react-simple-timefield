import * as React from 'react';
import { ChangeEvent, CSSProperties, ReactElement } from 'react';
export declare function isNumber<T>(value: T): boolean;
export declare function formatTimeItem(value?: string | number, length?: number): string;
export declare function validateTimeAndCursor({ showSeconds, value, defaultValue, colon, cursorPosition, limitHours }: {
    showSeconds?: boolean | undefined;
    value?: string | undefined;
    defaultValue?: string | undefined;
    colon?: string | undefined;
    cursorPosition?: number | undefined;
    limitHours?: boolean | undefined;
}): [string, number];
declare type onChangeType = (event: ChangeEvent<HTMLInputElement>, value: string) => void;
interface Props {
    value?: string;
    onChange?: onChangeType;
    showSeconds?: boolean;
    limitHours?: boolean;
    input: ReactElement | null;
    inputRef?: () => HTMLInputElement | null;
    colon?: string;
    style?: CSSProperties | {};
}
interface State {
    value: string;
    _colon: string;
    _defaultValue: string;
    _showSeconds: boolean;
    _limitHours: boolean;
    _maxLength: number;
}
export default class TimeField extends React.Component<Props, State> {
    static defaultProps: Props;
    constructor(props: Props);
    componentDidUpdate(prevProps: Props): void;
    onInputChange(event: ChangeEvent<HTMLInputElement>, callback: onChangeType): void;
    render(): ReactElement;
}
export {};
