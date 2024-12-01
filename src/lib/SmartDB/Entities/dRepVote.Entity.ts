import 'reflect-metadata';
import { Convertible, BaseEntity, asEntity } from 'smart-db';
import {  } from 'lucid-cardano';

@asEntity()
export class dRepVoteEntity extends BaseEntity {
    protected static _apiRoute: string = 'drepvote';
    protected static _className: string = 'dRepVote';


    // #region fields
    @Convertible()
    proposalActionId!: string;
    @Convertible()
    keyHash!: string;
    @Convertible()
    vote!: string;

    // #endregion fields

    // #region db

    public static defaultFieldsWhenUndefined: Record<string, boolean> = {};

    public static alwaysFieldsForSelect: Record<string, boolean> = {
        ...super.alwaysFieldsForSelect,
          proposalActionId: true,
          keyHash: true,
          vote: true,
    };

    // #endregion db
}


