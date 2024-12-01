
import { Schema, model, models } from 'mongoose';
import 'reflect-metadata';
import { MongoAppliedFor  } from 'smart-db';
import { BaseEntityMongo  } from 'smart-db/backEnd';
import { postulationEntity } from './postulation.Entity';

@MongoAppliedFor([postulationEntity])
export class postulationEntityMongo extends BaseEntityMongo  {
    protected static Entity = postulationEntity;
    protected static _mongoTableName: string = postulationEntity.className();

    // #region fields

    // member_id:Int

    // #endregion fields

    // #region internal class methods

    public getMongoStatic(): typeof postulationEntityMongo {
        return this.constructor as typeof postulationEntityMongo;
    }

    public static getMongoStatic(): typeof postulationEntityMongo {
        return this as typeof postulationEntityMongo;
    }

    public getStatic(): typeof postulationEntity {
        return this.getMongoStatic().getStatic() as typeof postulationEntity;
    }

    public static getStatic(): typeof postulationEntity {
        return this.Entity as typeof postulationEntity;
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
            member_id: number;
        }

        const schema = new Schema<Interface>({
            member_id: { type: Number, required: true },
        });

        const ModelDB = models[this._mongoTableName] || model<Interface>(this._mongoTableName, schema);
        return ModelDB;
    }

    // #endregion mongo db
}

