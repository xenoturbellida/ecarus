import {FC} from "react";


export interface IHeader {
    location?: string;
    balance?: number;
    userPhoto?: number;
    userName?: string;
}

export const Header: FC<IHeader> = () => {
    return (
        <div>This is a header</div>
    )
}