import 'reflect-metadata';
import { Convertible, BaseEntity, asEntity } from 'smart-db';
import {  } from 'lucid-cardano';

@asEntity()
export class votesEntity extends BaseEntity {
    protected static _apiRoute: string = 'votes';
    protected static _className: string = 'votes';


    // #region fields
    @Convertible()
    postulation_id!: number;
    @Convertible()
    address!: string;

    // #endregion fields

    // #region db

    public static defaultFieldsWhenUndefined: Record<string, boolean> = {};

    public static alwaysFieldsForSelect: Record<string, boolean> = {
        ...super.alwaysFieldsForSelect,
          postulation_id: true,
          address: true,
    };

    // #endregion db
}


