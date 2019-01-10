export default abstract class Module {
    abstract start(): void;

    static loadModules(...modules: Module[]): void {
        for (const module of modules) {
            module.start();
        }
    }
}