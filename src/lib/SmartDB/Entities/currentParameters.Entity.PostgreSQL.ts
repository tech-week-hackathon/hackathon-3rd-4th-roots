import { Column, Entity, Index, PrimaryGeneratedColumn } from 'typeorm';
import { currentParametersEntity } from './currentParameters.Entity';
import { PostgreSQLAppliedFor, getPostgreSQLTableName } from 'smart-db';
import { BaseEntityPostgreSQL  } from 'smart-db/backEnd';

@PostgreSQLAppliedFor([currentParametersEntity])
@Entity({ name: getPostgreSQLTableName(currentParametersEntity.className()) })

export class currentParametersEntityPostgreSQL extends BaseEntityPostgreSQL  {
    protected static Entity = currentParametersEntity;

    // #region fields

    @PrimaryGeneratedColumn()
    _id!: number; // Auto-generated primary key

    @Column({ type: "int"  })
    collateralPercentage!:number;
    @Column({ type: "int"  })
    committeeMaxTermLength!:number;
    @Column({ type: "int"  })
    committeeminSize!:number;
    @Column({ type: "varchar", length: 255  })
    monetaryExpansion!:number;
    @Column({ type: "varchar", length: 255  })
    treasuryCut!:number;
    @Column({ type: "int"  })
    maxTxSize!:number;
    @Column({ type: "varchar", length: 255  })
    txFeePerByte!:number;

    // #endregion fields

    // #region internal class methods

    public getPostgreSQLStatic(): typeof currentParametersEntityPostgreSQL {
        return this.constructor as typeof currentParametersEntityPostgreSQL;
    }

    public static getPostgreSQLStatic(): typeof currentParametersEntityPostgreSQL {
        return this as typeof currentParametersEntityPostgreSQL;
    }

    public getStatic(): typeof currentParametersEntity {
        return currentParametersEntityPostgreSQL.getPostgreSQLStatic().getStatic() as typeof currentParametersEntity;
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

    // #region posgresql db

    public static PostgreSQLModel() {
        return this;
    }

    // #endregion posgresql db
}
