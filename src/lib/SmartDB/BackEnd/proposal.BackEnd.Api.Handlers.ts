import {
    BackEndApiHandlersFor,
    BackEndAppliedFor,
    BaseBackEndApiHandlers,
    BaseBackEndApplied,
    BaseBackEndMethods,
} from 'smart-db/backEnd';
import { proposalEntity } from '../Entities/proposal.Entity';

@BackEndAppliedFor(proposalEntity)
export class proposalBackEndApplied extends BaseBackEndApplied   {
    protected static _Entity = proposalEntity;
    protected static _BackEndMethods = BaseBackEndMethods ;
}

@BackEndApiHandlersFor(proposalEntity)
export class proposalApiHandlers extends BaseBackEndApiHandlers    {
    protected static _Entity = proposalEntity;
    protected static _BackEndApplied = proposalBackEndApplied;

}

