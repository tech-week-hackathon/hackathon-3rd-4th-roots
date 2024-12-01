
import { Schema, model, models } from 'mongoose';
import 'reflect-metadata';
import { MongoAppliedFor  } from 'smart-db';
import { BaseEntityMongo  } from 'smart-db/backEnd';
import { dRepVoteEntity } from './dRepVote.Entity';

@MongoAppliedFor([dRepVoteEntity])
export class dRepVoteEntityMongo extends BaseEntityMongo  {
    protected static Entity = dRepVoteEntity;
    protected static _mongoTableName: string = dRepVoteEntity.className();

    // #region fields

    // proposalActionId:String
    // keyHash:String
    // vote:String

    // #endregion fields

    // #region internal class methods

    public getMongoStatic(): typeof dRepVoteEntityMongo {
        return this.constructor as typeof dRepVoteEntityMongo;
    }

    public static getMongoStatic(): typeof dRepVoteEntityMongo {
        return this as typeof dRepVoteEntityMongo;
    }

    public getStatic(): typeof dRepVoteEntity {
        return this.getMongoStatic().getStatic() as typeof dRepVoteEntity;
    }

    public static getStatic(): typeof dRepVoteEntity {
        return this.Entity as typeof dRepVoteEntity;
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
            keyHash: string;
            vote: string;
        }

        const schema = new Schema<Interface>({
            proposalActionId: { type: String, required: true },
            keyHash: { type: String, required: true },
            vote: { type: String, required: true },
        });

        const ModelDB = models[this._mongoTableName] || model<Interface>(this._mongoTableName, schema);
        return ModelDB;
    }

    // #endregion mongo db
}

