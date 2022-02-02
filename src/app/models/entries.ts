import { Entry } from "./entry-error";
import { EntryGuide } from "./entry-guide";

export interface Entries {
    entries: Entry[];
}

export interface EntriesGuide {
    entries: EntryGuide[];
}

export interface Image {
    url:string;
}

export interface Step {
    step_name: string;
    step_description: string;
    step_image: Image;
}
