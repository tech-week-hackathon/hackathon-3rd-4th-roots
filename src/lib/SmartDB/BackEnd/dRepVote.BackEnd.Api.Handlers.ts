import {
    BackEndApiHandlersFor,
    BackEndAppliedFor,
    BaseBackEndApiHandlers,
    BaseBackEndApplied,
    BaseBackEndMethods,
} from 'smart-db/backEnd';
import { dRepVoteEntity } from '../Entities/dRepVote.Entity';

@BackEndAppliedFor(dRepVoteEntity)
export class dRepVoteBackEndApplied extends BaseBackEndApplied   {
    protected static _Entity = dRepVoteEntity;
    protected static _BackEndMethods = BaseBackEndMethods ;
}

@BackEndApiHandlersFor(dRepVoteEntity)
export class dRepVoteApiHandlers extends BaseBackEndApiHandlers    {
    protected static _Entity = dRepVoteEntity;
    protected static _BackEndApplied = dRepVoteBackEndApplied;

}

