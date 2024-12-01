import { proposalEntity } from '../../../lib/SmartDB/Entities/proposal.Entity';
import { proposalApi } from '../../../lib/SmartDB/FrontEnd/proposal.FrontEnd.Api.Calls';
import { useEffect, useState } from 'react';
import Modal from 'react-modal';
import styles from './proposal.module.scss';

export default function proposal() {
    //--------------------------------------
    const [isRefreshing, setIsRefreshing] = useState(true);
    useEffect(() => {
        setIsRefreshing(false);
    }, []);
    //----------------------------
    const [list, setList] = useState<proposalEntity[]>();
    const [newItem, setNewItem] = useState<Partial<proposalEntity>>({}); // Estado para el nuevo entidad
    //----------------------------
    const fetch = async () => {
            try {
                const list: proposalEntity[] = await proposalApi.getAllApi_();
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
          const entity = new proposalEntity(newItem);

          // Llamada al API para crear el entidad en la base de datos
          const createdproposal = await proposalApi.createApi(entity);

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
            await proposalApi.deleteByIdApi(proposalEntity, id); // Llama a la API para eliminar el elemento
            fetch();
        } catch (e) {
            console.error(e);
        }
    };
    //----------------------------
    const handleInputChange = (field: keyof proposalEntity, value: any) => {
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
                        <label>actionId: </label>
                        <input 
                            type="text" 
                            value={newItem.actionId || ''} 
                            onChange={(e) => handleInputChange('actionId', e.target.value)} 
                        />
                    </div>
                    <div>
                    </div>
                    <div>
                        <label>txId: </label>
                        <input 
                            type="text" 
                            value={newItem.txId || ''} 
                            onChange={(e) => handleInputChange('txId', e.target.value)} 
                        />
                    </div>
                    <div>
                    </div>
                    <div>
                        <label>status: </label>
                        <input 
                            type="text" 
                            value={newItem.status || ''} 
                            onChange={(e) => handleInputChange('status', e.target.value)} 
                        />
                    </div>
                    <div>
                    </div>
                    <div>
                        <label>proposedIn: </label>
                        <input 
                            type="text" 
                            value={newItem.proposedIn || ''} 
                            onChange={(e) => handleInputChange('proposedIn', e.target.value)} 
                        />
                    </div>
                    <div>
                    </div>
                    <div>
                        <label>expiresAfter: </label>
                        <input 
                            type="text" 
                            value={newItem.expiresAfter || ''} 
                            onChange={(e) => handleInputChange('expiresAfter', e.target.value)} 
                        />
                    </div>
                    <div>
                    </div>
                    <div>
                        <label>dataHash: </label>
                        <input 
                            type="text" 
                            value={newItem.dataHash || ''} 
                            onChange={(e) => handleInputChange('dataHash', e.target.value)} 
                        />
                    </div>
                    <div>
                    </div>
                    <div>
                        <label>url: </label>
                        <input 
                            type="text" 
                            value={newItem.url || ''} 
                            onChange={(e) => handleInputChange('url', e.target.value)} 
                        />
                    </div>
                    <div>
                    </div>
                    <div>
                        <label>deposit: </label>
                        <input 
                            type="text" 
                            value={newItem.deposit || ''} 
                            onChange={(e) => handleInputChange('deposit', e.target.value)} 
                        />
                    </div>
                    <div>
                    </div>
                    <button type="button" onClick={handleBtnCreate}>Create</button>
                </form>
            </div>
            <div>
                <div>List of proposal</div>
                <div className={styles.listContainer}>
                    <table border="1">
                        <thead>
                          <tr>
                            <th key="0">actionId</th><th key="1">txId</th><th key="2">status</th><th key="3">proposedIn</th><th key="4">expiresAfter</th><th key="5">dataHash</th><th key="6">url</th><th key="7">deposit</th>
                          </tr>
                        </thead>
                        <tbody>
                            {list?.map((item, index) => (
                              <tr key={index}>
                                <td key="0">{item.actionId }</td><td key="1">{item.txId }</td><td key="2">{item.status }</td><td key="3">{item.proposedIn }</td><td key="4">{item.expiresAfter }</td><td key="5">{item.dataHash }</td><td key="6">{item.url }</td><td key="7">{item.deposit }</td>
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
