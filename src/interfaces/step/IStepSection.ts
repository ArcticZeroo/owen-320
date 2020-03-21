export default interface IStepSection {
    // the last time this section was modified (i.e. pressed "mark complete")
    access: number;
    // the first time this section was viewed
    look: number;
    name: string;
    status: string;
    initial: string;
    type: string;
    url: string;
    tag: string;
}