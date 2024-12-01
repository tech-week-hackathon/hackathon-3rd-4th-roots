
import { Schema, model, models } from 'mongoose';
import 'reflect-metadata';
import { MongoAppliedFor  } from 'smart-db';
import { BaseEntityMongo  } from 'smart-db/backEnd';
import { currentParametersEntity } from './currentParameters.Entity';

@MongoAppliedFor([currentParametersEntity])
export class currentParametersEntityMongo extends BaseEntityMongo  {
    protected static Entity = currentParametersEntity;
    protected static _mongoTableName: string = currentParametersEntity.className();

    // #region fields

    // collateralPercentage:Int
    // committeeMaxTermLength:Int
    // committeeminSize:Int
    // monetaryExpansion:Float
    // treasuryCut:Float
    // maxTxSize:Int
    // txFeePerByte:Float

    // #endregion fields

    // #region internal class methods

    public getMongoStatic(): typeof currentParametersEntityMongo {
        return this.constructor as typeof currentParametersEntityMongo;
    }

    public static getMongoStatic(): typeof currentParametersEntityMongo {
        return this as typeof currentParametersEntityMongo;
    }

    public getStatic(): typeof currentParametersEntity {
        return this.getMongoStatic().getStatic() as typeof currentParametersEntity;
    }

    public static getStatic(): typeof currentParametersEntity {
        return this.Entity as typeof currentParametersEntity;
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
            collateralPercentage: number;
            committeeMaxTermLength: number;
            committeeminSize: number;
            monetaryExpansion: number;
            treasuryCut: number;
            maxTxSize: number;
            txFeePerByte: number;
        }

        const schema = new Schema<Interface>({
            collateralPercentage: { type: Number, required: true },
            committeeMaxTermLength: { type: Number, required: true },
            committeeminSize: { type: Number, required: true },
            monetaryExpansion: { type: Number, required: true },
            treasuryCut: { type: Number, required: true },
            maxTxSize: { type: Number, required: true },
            txFeePerByte: { type: Number, required: true },
        });

        const ModelDB = models[this._mongoTableName] || model<Interface>(this._mongoTableName, schema);
        return ModelDB;
    }

    // #endregion mongo db
}

