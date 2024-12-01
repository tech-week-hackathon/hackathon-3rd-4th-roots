import {
    BackEndApiHandlersFor,
    BackEndAppliedFor,
    BaseBackEndApiHandlers,
    BaseBackEndApplied,
    BaseBackEndMethods,
} from 'smart-db/backEnd';
import { committeeEntity } from '../Entities/committee.Entity';

@BackEndAppliedFor(committeeEntity)
export class committeeBackEndApplied extends BaseBackEndApplied   {
    protected static _Entity = committeeEntity;
    protected static _BackEndMethods = BaseBackEndMethods ;
}

@BackEndApiHandlersFor(committeeEntity)
export class committeeApiHandlers extends BaseBackEndApiHandlers    {
    protected static _Entity = committeeEntity;
    protected static _BackEndApplied = committeeBackEndApplied;

}

