import 'reflect-metadata';
import { Convertible, BaseEntity, asEntity } from 'smart-db';
import {  } from 'lucid-cardano';

@asEntity()
export class postulationEntity extends BaseEntity {
    protected static _apiRoute: string = 'postulation';
    protected static _className: string = 'postulation';


    // #region fields
    @Convertible()
    member_id!: number;

    // #endregion fields

    // #region db

    public static defaultFieldsWhenUndefined: Record<string, boolean> = {};

    public static alwaysFieldsForSelect: Record<string, boolean> = {
        ...super.alwaysFieldsForSelect,
          member_id: true,
    };

    // #endregion db
}


