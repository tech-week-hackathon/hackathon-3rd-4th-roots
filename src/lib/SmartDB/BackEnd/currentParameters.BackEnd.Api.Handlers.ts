import {
    BackEndApiHandlersFor,
    BackEndAppliedFor,
    BaseBackEndApiHandlers,
    BaseBackEndApplied,
    BaseBackEndMethods,
} from 'smart-db/backEnd';
import { currentParametersEntity } from '../Entities/currentParameters.Entity';

@BackEndAppliedFor(currentParametersEntity)
export class currentParametersBackEndApplied extends BaseBackEndApplied   {
    protected static _Entity = currentParametersEntity;
    protected static _BackEndMethods = BaseBackEndMethods ;
}

@BackEndApiHandlersFor(currentParametersEntity)
export class currentParametersApiHandlers extends BaseBackEndApiHandlers    {
    protected static _Entity = currentParametersEntity;
    protected static _BackEndApplied = currentParametersBackEndApplied;

}

