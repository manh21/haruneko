import { IEventManager, EventManager } from './EventManager';
import { IPluginController, PluginController } from './PluginController';
import { IJobManager, JobManager } from './JobManager';
export interface IHakuNeko {
    readonly EventManager: IEventManager;
    readonly PluginController: IPluginController;
    readonly JobManager: IJobManager;
}

export class HakuNeko implements IHakuNeko {

    private readonly _eventManager: IEventManager = new EventManager();
    private readonly _pluginController: IPluginController = new PluginController();
    private readonly _jobManager: IJobManager = new JobManager();

    public get EventManager(): IEventManager {
        return this._eventManager;
    }

    public get PluginController(): IPluginController {
        return this._pluginController;
    }

    public get JobManager(): IJobManager {
        return this._jobManager;
    }
}