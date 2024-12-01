import { Column, Entity, Index, PrimaryGeneratedColumn } from 'typeorm';
import { proposalEntity } from './proposal.Entity';
import { PostgreSQLAppliedFor, getPostgreSQLTableName } from 'smart-db';
import { BaseEntityPostgreSQL  } from 'smart-db/backEnd';

@PostgreSQLAppliedFor([proposalEntity])
@Entity({ name: getPostgreSQLTableName(proposalEntity.className()) })

export class proposalEntityPostgreSQL extends BaseEntityPostgreSQL  {
    protected static Entity = proposalEntity;

    // #region fields

    @PrimaryGeneratedColumn()
    _id!: number; // Auto-generated primary key

    @Column({ type: "varchar", length: 255  })
    actionId!:string;
    @Column({ type: "varchar", length: 255  })
    txId!:string;
    @Column({ type: "varchar", length: 255  })
    status!:string;
    @Column({ type: "int"  })
    proposedIn!:number;
    @Column({ type: "int"  })
    expiresAfter!:number;
    @Column({ type: "varchar", length: 255  })
    dataHash!:string;
    @Column({ type: "varchar", length: 255  })
    url!:string;
    @Column({ type: "varchar", length: 255  })
    deposit!:string;

    // #endregion fields

    // #region internal class methods

    public getPostgreSQLStatic(): typeof proposalEntityPostgreSQL {
        return this.constructor as typeof proposalEntityPostgreSQL;
    }

    public static getPostgreSQLStatic(): typeof proposalEntityPostgreSQL {
        return this as typeof proposalEntityPostgreSQL;
    }

    public getStatic(): typeof proposalEntity {
        return proposalEntityPostgreSQL.getPostgreSQLStatic().getStatic() as typeof proposalEntity;
    }

    public static getStatic(): typeof proposalEntity {
        return this.Entity as typeof proposalEntity;
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
