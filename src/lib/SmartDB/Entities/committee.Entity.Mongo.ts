
import { Schema, model, models } from 'mongoose';
import 'reflect-metadata';
import { MongoAppliedFor  } from 'smart-db';
import { BaseEntityMongo  } from 'smart-db/backEnd';
import { committeeEntity } from './committee.Entity';

@MongoAppliedFor([committeeEntity])
export class committeeEntityMongo extends BaseEntityMongo  {
    protected static Entity = committeeEntity;
    protected static _mongoTableName: string = committeeEntity.className();

    // #region fields

    // scriptHash:String
    // revelance:Int
    // lala:String
    // la:String

    // #endregion fields

    // #region internal class methods

    public getMongoStatic(): typeof committeeEntityMongo {
        return this.constructor as typeof committeeEntityMongo;
    }

    public static getMongoStatic(): typeof committeeEntityMongo {
        return this as typeof committeeEntityMongo;
    }

    public getStatic(): typeof committeeEntity {
        return this.getMongoStatic().getStatic() as typeof committeeEntity;
    }

    public static getStatic(): typeof committeeEntity {
        return this.Entity as typeof committeeEntity;
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
            scriptHash: string;
            revelance: number;
            lala: string;
            la: string;
        }

        const schema = new Schema<Interface>({
            scriptHash: { type: String, required: true },
            revelance: { type: Number, required: true },
            lala: { type: String, required: true },
            la: { type: String, required: true },
        });

        const ModelDB = models[this._mongoTableName] || model<Interface>(this._mongoTableName, schema);
        return ModelDB;
    }

    // #endregion mongo db
}

