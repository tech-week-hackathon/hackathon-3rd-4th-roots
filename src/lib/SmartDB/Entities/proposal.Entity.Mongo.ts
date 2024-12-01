
import { Schema, model, models } from 'mongoose';
import 'reflect-metadata';
import { MongoAppliedFor  } from 'smart-db';
import { BaseEntityMongo  } from 'smart-db/backEnd';
import { proposalEntity } from './proposal.Entity';

@MongoAppliedFor([proposalEntity])
export class proposalEntityMongo extends BaseEntityMongo  {
    protected static Entity = proposalEntity;
    protected static _mongoTableName: string = proposalEntity.className();

    // #region fields

    // actionId:String
    // txId:String
    // status:String
    // proposedIn:Int
    // expiresAfter:Int
    // dataHash:String
    // url:String
    // deposit:String

    // #endregion fields

    // #region internal class methods

    public getMongoStatic(): typeof proposalEntityMongo {
        return this.constructor as typeof proposalEntityMongo;
    }

    public static getMongoStatic(): typeof proposalEntityMongo {
        return this as typeof proposalEntityMongo;
    }

    public getStatic(): typeof proposalEntity {
        return this.getMongoStatic().getStatic() as typeof proposalEntity;
    }

    public static getStatic(): typeof proposalEntity {
        return this.Entity as typeof proposalEntity;
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
            actionId: string;
            txId: string;
            status: string;
            proposedIn: number;
            expiresAfter: number;
            dataHash: string;
            url: string;
            deposit: string;
        }

        const schema = new Schema<Interface>({
            actionId: { type: String, required: true },
            txId: { type: String, required: true },
            status: { type: String, required: true },
            proposedIn: { type: Number, required: true },
            expiresAfter: { type: Number, required: true },
            dataHash: { type: String, required: true },
            url: { type: String, required: true },
            deposit: { type: String, required: true },
        });

        const ModelDB = models[this._mongoTableName] || model<Interface>(this._mongoTableName, schema);
        return ModelDB;
    }

    // #endregion mongo db
}

