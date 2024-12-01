import {
    BackEndApiHandlersFor,
    BackEndAppliedFor,
    BaseBackEndApiHandlers,
    BaseBackEndApplied,
    BaseBackEndMethods,
} from 'smart-db/backEnd';
import { postulationEntity } from '../Entities/postulation.Entity';

@BackEndAppliedFor(postulationEntity)
export class postulationBackEndApplied extends BaseBackEndApplied   {
    protected static _Entity = postulationEntity;
    protected static _BackEndMethods = BaseBackEndMethods ;
}

@BackEndApiHandlersFor(postulationEntity)
export class postulationApiHandlers extends BaseBackEndApiHandlers    {
    protected static _Entity = postulationEntity;
    protected static _BackEndApplied = postulationBackEndApplied;

}

