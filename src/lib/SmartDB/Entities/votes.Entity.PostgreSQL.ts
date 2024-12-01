import { Column, Entity, Index, PrimaryGeneratedColumn } from 'typeorm';
import { votesEntity } from './votes.Entity';
import { PostgreSQLAppliedFor, getPostgreSQLTableName } from 'smart-db';
import { BaseEntityPostgreSQL  } from 'smart-db/backEnd';

@PostgreSQLAppliedFor([votesEntity])
@Entity({ name: getPostgreSQLTableName(votesEntity.className()) })

export class votesEntityPostgreSQL extends BaseEntityPostgreSQL  {
    protected static Entity = votesEntity;

    // #region fields

    @PrimaryGeneratedColumn()
    _id!: number; // Auto-generated primary key

    @Column({ type: "int"  })
    postulation_id!:number;
    @Column({ type: "varchar", length: 255  })
    address!:string;

    // #endregion fields

    // #region internal class methods

    public getPostgreSQLStatic(): typeof votesEntityPostgreSQL {
        return this.constructor as typeof votesEntityPostgreSQL;
    }

    public static getPostgreSQLStatic(): typeof votesEntityPostgreSQL {
        return this as typeof votesEntityPostgreSQL;
    }

    public getStatic(): typeof votesEntity {
        return votesEntityPostgreSQL.getPostgreSQLStatic().getStatic() as typeof votesEntity;
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

    // #region posgresql db

    public static PostgreSQLModel() {
        return this;
    }

    // #endregion posgresql db
}
