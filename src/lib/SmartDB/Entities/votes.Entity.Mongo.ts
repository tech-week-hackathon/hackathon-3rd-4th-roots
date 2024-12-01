
import { Schema, model, models } from 'mongoose';
import 'reflect-metadata';
import { MongoAppliedFor  } from 'smart-db';
import { BaseEntityMongo  } from 'smart-db/backEnd';
import { votesEntity } from './votes.Entity';

@MongoAppliedFor([votesEntity])
export class votesEntityMongo extends BaseEntityMongo  {
    protected static Entity = votesEntity;
    protected static _mongoTableName: string = votesEntity.className();

    // #region fields

    // postulation_id:Int
    // address:String

    // #endregion fields

    // #region internal class methods

    public getMongoStatic(): typeof votesEntityMongo {
        return this.constructor as typeof votesEntityMongo;
    }

    public static getMongoStatic(): typeof votesEntityMongo {
        return this as typeof votesEntityMongo;
    }

    public getStatic(): typeof votesEntity {
        return this.getMongoStatic().getStatic() as typeof votesEntity;
    }

    public static getStatic(): typeof votesEntity {
        return this.Entity as typeof votesEntity;
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
            postulation_id: number;
            address: string;
        }

        const schema = new Schema<Interface>({
            postulation_id: { type: Number, required: true },
            address: { type: String, required: true },
        });

        const ModelDB = models[this._mongoTableName] || model<Interface>(this._mongoTableName, schema);
        return ModelDB;
    }

    // #endregion mongo db
}

