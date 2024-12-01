
import { Schema, model, models } from 'mongoose';
import 'reflect-metadata';
import { MongoAppliedFor  } from 'smart-db';
import { BaseEntityMongo  } from 'smart-db/backEnd';
import { stakePoolVoteEntity } from './stakePoolVote.Entity';

@MongoAppliedFor([stakePoolVoteEntity])
export class stakePoolVoteEntityMongo extends BaseEntityMongo  {
    protected static Entity = stakePoolVoteEntity;
    protected static _mongoTableName: string = stakePoolVoteEntity.className();

    // #region fields

    // proposalActionId:String
    // poolId:String
    // vote:String

    // #endregion fields

    // #region internal class methods

    public getMongoStatic(): typeof stakePoolVoteEntityMongo {
        return this.constructor as typeof stakePoolVoteEntityMongo;
    }

    public static getMongoStatic(): typeof stakePoolVoteEntityMongo {
        return this as typeof stakePoolVoteEntityMongo;
    }

    public getStatic(): typeof stakePoolVoteEntity {
        return this.getMongoStatic().getStatic() as typeof stakePoolVoteEntity;
    }

    public static getStatic(): typeof stakePoolVoteEntity {
        return this.Entity as typeof stakePoolVoteEntity;
    }

    public className(): string {
        return this.getStatic().className();
    }

    public static className(): string {
        return this.getStatic().className();
    }

    // #endregion internal class methods

    // #region mongo db

    public static MongoModel() {
        interface Interface {
            proposalActionId: string;
            poolId: string;
            vote: string;
        }

        const schema = new Schema<Interface>({
            proposalActionId: { type: String, required: true },
            poolId: { type: String, required: true },
            vote: { type: String, required: true },
        });

        const ModelDB = models[this._mongoTableName] || model<Interface>(this._mongoTableName, schema);
        return ModelDB;
    }

    // #endregion mongo db
}

