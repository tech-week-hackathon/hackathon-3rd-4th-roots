
import { Schema, model, models } from 'mongoose';
import 'reflect-metadata';
import { MongoAppliedFor  } from 'smart-db';
import { BaseEntityMongo  } from 'smart-db/backEnd';
import { memberEntity } from './member.Entity';

@MongoAppliedFor([memberEntity])
export class memberEntityMongo extends BaseEntityMongo  {
    protected static Entity = memberEntity;
    protected static _mongoTableName: string = memberEntity.className();

    // #region fields

    // name:String
    // description:String
    // hash:String
    // epoch:String
    // epoch_until:Int

    // #endregion fields

    // #region internal class methods

    public getMongoStatic(): typeof memberEntityMongo {
        return this.constructor as typeof memberEntityMongo;
    }

    public static getMongoStatic(): typeof memberEntityMongo {
        return this as typeof memberEntityMongo;
    }

    public getStatic(): typeof memberEntity {
        return this.getMongoStatic().getStatic() as typeof memberEntity;
    }

    public static getStatic(): typeof memberEntity {
        return this.Entity as typeof memberEntity;
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
            name: string;
            description: string;
            hash: string;
            epoch: string;
            epoch_until: number;
        }

        const schema = new Schema<Interface>({
            name: { type: String, required: true },
            description: { type: String, required: true },
            hash: { type: String, required: true },
            epoch: { type: String, required: true },
            epoch_until: { type: Number, required: true },
        });

        const ModelDB = models[this._mongoTableName] || model<Interface>(this._mongoTableName, schema);
        return ModelDB;
    }

    // #endregion mongo db
}

