import 'reflect-metadata';
import { Convertible, BaseEntity, asEntity } from 'smart-db';
import {  } from 'lucid-cardano';

@asEntity()
export class memberEntity extends BaseEntity {
    protected static _apiRoute: string = 'member';
    protected static _className: string = 'member';


    // #region fields
    @Convertible()
    name!: string;
    @Convertible()
    description!: string;
    @Convertible()
    hash!: string;
    @Convertible()
    epoch!: string;
    @Convertible()
    epoch_until!: number;

    // #endregion fields

    // #region db

    public static defaultFieldsWhenUndefined: Record<string, boolean> = {};

    public static alwaysFieldsForSelect: Record<string, boolean> = {
        ...super.alwaysFieldsForSelect,
          name: true,
          description: true,
          hash: true,
          epoch: true,
          epoch_until: true,
    };

    // #endregion db
}


