import {
    BackEndApiHandlersFor,
    BackEndAppliedFor,
    BaseBackEndApiHandlers,
    BaseBackEndApplied,
    BaseBackEndMethods,
} from 'smart-db/backEnd';
import { stakePoolVoteEntity } from '../Entities/stakePoolVote.Entity';

@BackEndAppliedFor(stakePoolVoteEntity)
export class stakePoolVoteBackEndApplied extends BaseBackEndApplied   {
    protected static _Entity = stakePoolVoteEntity;
    protected static _BackEndMethods = BaseBackEndMethods ;
}

@BackEndApiHandlersFor(stakePoolVoteEntity)
export class stakePoolVoteApiHandlers extends BaseBackEndApiHandlers    {
    protected static _Entity = stakePoolVoteEntity;
    protected static _BackEndApplied = stakePoolVoteBackEndApplied;

}

