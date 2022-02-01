import { Image } from "./image";
import { Step } from "./step";

export interface Entry {
    title: string;
    error_description: string;
    error_image: Image;
    steps: StepAux[];
    created_at: string;
}

export interface StepAux{
    step: Step;
}