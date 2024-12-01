import { Column, Entity, Index, PrimaryGeneratedColumn } from 'typeorm';
import { stakePoolVoteEntity } from './stakePoolVote.Entity';
import { PostgreSQLAppliedFor, getPostgreSQLTableName } from 'smart-db';
import { BaseEntityPostgreSQL  } from 'smart-db/backEnd';

@PostgreSQLAppliedFor([stakePoolVoteEntity])
@Entity({ name: getPostgreSQLTableName(stakePoolVoteEntity.className()) })

export class stakePoolVoteEntityPostgreSQL extends BaseEntityPostgreSQL  {
    protected static Entity = stakePoolVoteEntity;

    // #region fields

    @PrimaryGeneratedColumn()
    _id!: number; // Auto-generated primary key

    @Column({ type: "varchar", length: 255  })
    proposalActionId!:string;
    @Column({ type: "varchar", length: 255  })
    poolId!:string;
    @Column({ type: "varchar", length: 255  })
    vote!:string;

    // #endregion fields

    // #region internal class methods

    public getPostgreSQLStatic(): typeof stakePoolVoteEntityPostgreSQL {
        return this.constructor as typeof stakePoolVoteEntityPostgreSQL;
    }

    public static getPostgreSQLStatic(): typeof stakePoolVoteEntityPostgreSQL {
        return this as typeof stakePoolVoteEntityPostgreSQL;
    }

    public getStatic(): typeof stakePoolVoteEntity {
        return stakePoolVoteEntityPostgreSQL.getPostgreSQLStatic().getStatic() as typeof stakePoolVoteEntity;
    }

    public static getStatic(): typeof stakePoolVoteEntity {
        return this.Entity as typeof stakePoolVoteEntity;
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
