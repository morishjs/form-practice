import {HTMLInputTypeAttribute} from "react";

export interface InputProps {
    source: string;
    label: string;
    validates: any[];
    placeholder?: string;
    type?: HTMLInputTypeAttribute
}
