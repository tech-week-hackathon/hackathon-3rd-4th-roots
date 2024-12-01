import { stakePoolVoteEntity } from '../../../lib/SmartDB/Entities/stakePoolVote.Entity';
import { stakePoolVoteApi } from '../../../lib/SmartDB/FrontEnd/stakePoolVote.FrontEnd.Api.Calls';
import { useEffect, useState } from 'react';
import Modal from 'react-modal';
import styles from './stakePoolVote.module.scss';

export default function stakePoolVote() {
    //--------------------------------------
    const [isRefreshing, setIsRefreshing] = useState(true);
    useEffect(() => {
        setIsRefreshing(false);
    }, []);
    //----------------------------
    const [list, setList] = useState<stakePoolVoteEntity[]>();
    const [newItem, setNewItem] = useState<Partial<stakePoolVoteEntity>>({}); // Estado para el nuevo entidad
    //----------------------------
    const fetch = async () => {
            try {
                const list: stakePoolVoteEntity[] = await stakePoolVoteApi.getAllApi_();
                setList(list);
            } catch (e) {
                console.error(e);
            }
        };
    useEffect(() => {fetch();}, []);
    //----------------------------
    const handleBtnCreate = async () => {
        try {
          // Crear un nuevo entidad a partir de los datos de newItem
          const entity = new stakePoolVoteEntity(newItem);

          // Llamada al API para crear el entidad en la base de datos
          const createdstakePoolVote = await stakePoolVoteApi.createApi(entity);

          // Limpiar los campos después de crear
          setNewItem({});

          fetch();
        } catch (e) {
            console.error(e);
        }
    };
    //----------------------------
    const handleDelete = async (id: string) => {
        try {
            await stakePoolVoteApi.deleteByIdApi(stakePoolVoteEntity, id); // Llama a la API para eliminar el elemento
            fetch();
        } catch (e) {
            console.error(e);
        }
    };
    //----------------------------
    const handleInputChange = (field: keyof stakePoolVoteEntity, value: any) => {
        setNewItem({
            ...newItem,
            [field]: value,
        });
    };
    //----------------------------
    return (
        <div className={styles.content}>
            <div>
                <div className={styles.subTitle}>CREATE</div>
                <form>
                    <div>
                        <label>proposalActionId: </label>
                        <input 
                            type="text" 
                            value={newItem.proposalActionId || ''} 
                            onChange={(e) => handleInputChange('proposalActionId', e.target.value)} 
                        />
                    </div>
                    <div>
                    </div>
                    <div>
                        <label>poolId: </label>
                        <input 
                            type="text" 
                            value={newItem.poolId || ''} 
                            onChange={(e) => handleInputChange('poolId', e.target.value)} 
                        />
                    </div>
                    <div>
                    </div>
                    <div>
                        <label>vote: </label>
                        <input 
                            type="text" 
                            value={newItem.vote || ''} 
                            onChange={(e) => handleInputChange('vote', e.target.value)} 
                        />
                    </div>
                    <div>
                    </div>
                    <button type="button" onClick={handleBtnCreate}>Create</button>
                </form>
            </div>
            <div>
                <div>List of stakePoolVote</div>
                <div className={styles.listContainer}>
                    <table border="1">
                        <thead>
                          <tr>
                            <th key="0">proposalActionId</th><th key="1">poolId</th><th key="2">vote</th>
                          </tr>
                        </thead>
                        <tbody>
                            {list?.map((item, index) => (
                              <tr key={index}>
                                <td key="0">{item.proposalActionId }</td><td key="1">{item.poolId }</td><td key="2">{item.vote }</td>
                                <td>
                                  <button onClick={() => handleDelete(item._DB_id)}>Delete</button>
                                </td>
                              </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}
Modal.setAppElement('#__next');
