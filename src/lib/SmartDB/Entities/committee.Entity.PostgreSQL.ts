import { Column, Entity, Index, PrimaryGeneratedColumn } from 'typeorm';
import { committeeEntity } from './committee.Entity';
import { PostgreSQLAppliedFor, getPostgreSQLTableName } from 'smart-db';
import { BaseEntityPostgreSQL  } from 'smart-db/backEnd';

@PostgreSQLAppliedFor([committeeEntity])
@Entity({ name: getPostgreSQLTableName(committeeEntity.className()) })
@Index(['scriptHash', ]) // Add indices as needed
export class committeeEntityPostgreSQL extends BaseEntityPostgreSQL  {
    protected static Entity = committeeEntity;

    // #region fields

    @PrimaryGeneratedColumn()
    _id!: number; // Auto-generated primary key

    @Column({ type: "varchar", length: 255  })
    scriptHash!:string;
    @Column({ type: "int"  })
    revelance!:number;
    @Column({ type: "varchar", length: 255  })
    lala!:string;
    @Column({ type: "varchar", length: 255  })
    la!:string;

    // #endregion fields

    // #region internal class methods

    public getPostgreSQLStatic(): typeof committeeEntityPostgreSQL {
        return this.constructor as typeof committeeEntityPostgreSQL;
    }

    public static getPostgreSQLStatic(): typeof committeeEntityPostgreSQL {
        return this as typeof committeeEntityPostgreSQL;
    }

    public getStatic(): typeof committeeEntity {
        return committeeEntityPostgreSQL.getPostgreSQLStatic().getStatic() as typeof committeeEntity;
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

    // #region posgresql db

    public static PostgreSQLModel() {
        return this;
    }

    // #endregion posgresql db
}
