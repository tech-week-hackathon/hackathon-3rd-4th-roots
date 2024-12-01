import { Column, Entity, Index, PrimaryGeneratedColumn } from 'typeorm';
import { postulationEntity } from './postulation.Entity';
import { PostgreSQLAppliedFor, getPostgreSQLTableName } from 'smart-db';
import { BaseEntityPostgreSQL  } from 'smart-db/backEnd';

@PostgreSQLAppliedFor([postulationEntity])
@Entity({ name: getPostgreSQLTableName(postulationEntity.className()) })

export class postulationEntityPostgreSQL extends BaseEntityPostgreSQL  {
    protected static Entity = postulationEntity;

    // #region fields

    @PrimaryGeneratedColumn()
    _id!: number; // Auto-generated primary key

    @Column({ type: "int"  })
    member_id!:number;

    // #endregion fields

    // #region internal class methods

    public getPostgreSQLStatic(): typeof postulationEntityPostgreSQL {
        return this.constructor as typeof postulationEntityPostgreSQL;
    }

    public static getPostgreSQLStatic(): typeof postulationEntityPostgreSQL {
        return this as typeof postulationEntityPostgreSQL;
    }

    public getStatic(): typeof postulationEntity {
        return postulationEntityPostgreSQL.getPostgreSQLStatic().getStatic() as typeof postulationEntity;
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

    // #region posgresql db

    public static PostgreSQLModel() {
        return this;
    }

    // #endregion posgresql db
}
