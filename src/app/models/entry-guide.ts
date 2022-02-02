import { Step } from "./entries";

export interface EntryGuide {
    title: string;
    guide_description: string;
    steps: StepAux[];
    created_at: string;
}

export interface StepAux{
    step: Step;
}