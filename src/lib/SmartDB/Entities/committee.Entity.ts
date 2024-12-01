import 'reflect-metadata';
import { Convertible, BaseEntity, asEntity } from 'smart-db';
import {  } from 'lucid-cardano';

@asEntity()
export class committeeEntity extends BaseEntity {
    protected static _apiRoute: string = 'committee';
    protected static _className: string = 'committee';


    // #region fields
    @Convertible()
    scriptHash!: string;
    @Convertible()
    revelance!: number;
    @Convertible()
    lala!: string;
    @Convertible()
    la!: string;

    // #endregion fields

    // #region db

    public static defaultFieldsWhenUndefined: Record<string, boolean> = {};

    public static alwaysFieldsForSelect: Record<string, boolean> = {
        ...super.alwaysFieldsForSelect,
          scriptHash: true,
          revelance: true,
          lala: true,
          la: true,
    };

    // #endregion db
}


