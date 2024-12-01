import { Column, Entity, Index, PrimaryGeneratedColumn } from 'typeorm';
import { dRepVoteEntity } from './dRepVote.Entity';
import { PostgreSQLAppliedFor, getPostgreSQLTableName } from 'smart-db';
import { BaseEntityPostgreSQL  } from 'smart-db/backEnd';

@PostgreSQLAppliedFor([dRepVoteEntity])
@Entity({ name: getPostgreSQLTableName(dRepVoteEntity.className()) })

export class dRepVoteEntityPostgreSQL extends BaseEntityPostgreSQL  {
    protected static Entity = dRepVoteEntity;

    // #region fields

    @PrimaryGeneratedColumn()
    _id!: number; // Auto-generated primary key

    @Column({ type: "varchar", length: 255  })
    proposalActionId!:string;
    @Column({ type: "varchar", length: 255  })
    keyHash!:string;
    @Column({ type: "varchar", length: 255  })
    vote!:string;

    // #endregion fields

    // #region internal class methods

    public getPostgreSQLStatic(): typeof dRepVoteEntityPostgreSQL {
        return this.constructor as typeof dRepVoteEntityPostgreSQL;
    }

    public static getPostgreSQLStatic(): typeof dRepVoteEntityPostgreSQL {
        return this as typeof dRepVoteEntityPostgreSQL;
    }

    public getStatic(): typeof dRepVoteEntity {
        return dRepVoteEntityPostgreSQL.getPostgreSQLStatic().getStatic() as typeof dRepVoteEntity;
    }

    public static getStatic(): typeof dRepVoteEntity {
        return this.Entity as typeof dRepVoteEntity;
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
