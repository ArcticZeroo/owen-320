import IStepSection from './IStepSection';

export default interface IStepMetadata {
    isStepEnabled: boolean;
    current?: {
        section: IStepSection;
        index: number;
    };
}