import IStepSection from './IStepSection';

export default interface IStepData {
    current: string;
    iconalt: string;
    iconurl: string;
    name: string;
    quiz: number;
    review: boolean;
    sections: IStepSection[],
    shortname: string;
    step: boolean;
    tag: string;
    url: string;
}
