import PQueue from 'p-queue';
import { IMediaContainer } from './providers/MediaPlugin';

export const enum JobKind {
    ListMedia=1,
    ListMediaItem=2,
    DownloadMediaitem=3,
    PreviewMediaItem=4,
}

export interface IJobManager {
    get queues(): Map<string, PQueue>;
    queue(name: string): PQueue | undefined;
    configure(provider: IMediaContainer): PQueue;
    schedule<T>(provider: IMediaContainer, jobKind: JobKind, job: () => Promise<T>): Promise<T>;
}
export class JobManager implements IJobManager{

    private readonly _queues: Map<string, PQueue>;

    constructor() {
        console.log('jobmaninitialized');
        this._queues = new Map<string, PQueue>();
    }

    /**
     * Return all queues
     */
    public get queues(): Map<string,PQueue> {
        return this._queues;
    }

    /**
     * Get queue by name
     * @param name
     */
    public queue(name:string): PQueue | undefined {
        return this.queues.get(name);
    }

    public configure(provider: IMediaContainer): PQueue {
        const newQueue = new PQueue();
        this.queues.set(provider.Identifier, newQueue);
        return newQueue;
    }

    public async schedule<T>(provider: IMediaContainer, jobKind: JobKind, job: () => Promise<T>): Promise<T> {
        console.log(provider, jobKind);
        const queue = this.queue(provider.Identifier) || this.configure(provider);
        return queue.add(job, { priority: jobKind });
    }
}

/*
{
    'mangahere' : {
        manga1-chapitre1,
        manga1-chapitre2,
        manga2-chapitr14
    }
    'jap' : {
        job1,
        job2,
        job3
    }
}
*/