import {
    BackEndApiHandlersFor,
    BackEndAppliedFor,
    BaseBackEndApiHandlers,
    BaseBackEndApplied,
    BaseBackEndMethods,
} from 'smart-db/backEnd';
import { votesEntity } from '../Entities/votes.Entity';

@BackEndAppliedFor(votesEntity)
export class votesBackEndApplied extends BaseBackEndApplied   {
    protected static _Entity = votesEntity;
    protected static _BackEndMethods = BaseBackEndMethods ;
}

@BackEndApiHandlersFor(votesEntity)
export class votesApiHandlers extends BaseBackEndApiHandlers    {
    protected static _Entity = votesEntity;
    protected static _BackEndApplied = votesBackEndApplied;

}

