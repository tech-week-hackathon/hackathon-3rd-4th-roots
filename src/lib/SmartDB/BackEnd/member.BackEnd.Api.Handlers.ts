import {
    BackEndApiHandlersFor,
    BackEndAppliedFor,
    BaseBackEndApiHandlers,
    BaseBackEndApplied,
    BaseBackEndMethods,
} from 'smart-db/backEnd';
import { memberEntity } from '../Entities/member.Entity';

@BackEndAppliedFor(memberEntity)
export class memberBackEndApplied extends BaseBackEndApplied   {
    protected static _Entity = memberEntity;
    protected static _BackEndMethods = BaseBackEndMethods ;
}

@BackEndApiHandlersFor(memberEntity)
export class memberApiHandlers extends BaseBackEndApiHandlers    {
    protected static _Entity = memberEntity;
    protected static _BackEndApplied = memberBackEndApplied;

}

