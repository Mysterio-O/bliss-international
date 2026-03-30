
export interface PrincipalMessage {
    label: string;
    campus: string;
    greeting?: string;
    message: string;
    name: string;
    designation: string;
    imageSrc: string;
}

export interface PrincipalData {
    satkhira: PrincipalMessage;
    debhata: PrincipalMessage;
}