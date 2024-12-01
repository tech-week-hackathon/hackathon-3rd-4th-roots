import { Column, Entity, Index, PrimaryGeneratedColumn } from 'typeorm';
import { memberEntity } from './member.Entity';
import { PostgreSQLAppliedFor, getPostgreSQLTableName } from 'smart-db';
import { BaseEntityPostgreSQL  } from 'smart-db/backEnd';

@PostgreSQLAppliedFor([memberEntity])
@Entity({ name: getPostgreSQLTableName(memberEntity.className()) })
@Index(['name', 'hash', 'epoch', ]) // Add indices as needed
export class memberEntityPostgreSQL extends BaseEntityPostgreSQL  {
    protected static Entity = memberEntity;

    // #region fields

    @PrimaryGeneratedColumn()
    _id!: number; // Auto-generated primary key

    @Column({ type: "varchar", length: 255  })
    name!:string;
    @Column({ type: "varchar", length: 255  })
    description!:string;
    @Column({ type: "varchar", length: 255  })
    hash!:string;
    @Column({ type: "varchar", length: 255  })
    epoch!:string;
    @Column({ type: "int"  })
    epoch_until!:number;

    // #endregion fields

    // #region internal class methods

    public getPostgreSQLStatic(): typeof memberEntityPostgreSQL {
        return this.constructor as typeof memberEntityPostgreSQL;
    }

    public static getPostgreSQLStatic(): typeof memberEntityPostgreSQL {
        return this as typeof memberEntityPostgreSQL;
    }

    public getStatic(): typeof memberEntity {
        return memberEntityPostgreSQL.getPostgreSQLStatic().getStatic() as typeof memberEntity;
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

    // #region posgresql db

    public static PostgreSQLModel() {
        return this;
    }

    // #endregion posgresql db
}
