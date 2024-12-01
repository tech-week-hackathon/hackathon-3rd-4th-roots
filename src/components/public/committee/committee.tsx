import { committeeEntity } from '../../../lib/SmartDB/Entities/committee.Entity';
import { committeeApi } from '../../../lib/SmartDB/FrontEnd/committee.FrontEnd.Api.Calls';
import { useEffect, useState } from 'react';
import Modal from 'react-modal';
import styles from './committee.module.scss';

export default function committee() {
    //--------------------------------------
    const [isRefreshing, setIsRefreshing] = useState(true);
    useEffect(() => {
        setIsRefreshing(false);
    }, []);
    //----------------------------
    const [list, setList] = useState<committeeEntity[]>();
    const [newItem, setNewItem] = useState<Partial<committeeEntity>>({}); // Estado para el nuevo entidad
    //----------------------------
    const fetch = async () => {
            try {
                const list: committeeEntity[] = await committeeApi.getAllApi_();
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
          const entity = new committeeEntity(newItem);

          // Llamada al API para crear el entidad en la base de datos
          const createdcommittee = await committeeApi.createApi(entity);

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
            await committeeApi.deleteByIdApi(committeeEntity, id); // Llama a la API para eliminar el elemento
            fetch();
        } catch (e) {
            console.error(e);
        }
    };
    //----------------------------
    const handleInputChange = (field: keyof committeeEntity, value: any) => {
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
                        <label>scriptHash: </label>
                        <input 
                            type="text" 
                            value={newItem.scriptHash || ''} 
                            onChange={(e) => handleInputChange('scriptHash', e.target.value)} 
                        />
                    </div>
                    <div>
                    </div>
                    <div>
                        <label>revelance: </label>
                        <input 
                            type="text" 
                            value={newItem.revelance || ''} 
                            onChange={(e) => handleInputChange('revelance', e.target.value)} 
                        />
                    </div>
                    <div>
                    </div>
                    <div>
                        <label>lala: </label>
                        <input 
                            type="text" 
                            value={newItem.lala || ''} 
                            onChange={(e) => handleInputChange('lala', e.target.value)} 
                        />
                    </div>
                    <div>
                    </div>
                    <div>
                        <label>la: </label>
                        <input 
                            type="text" 
                            value={newItem.la || ''} 
                            onChange={(e) => handleInputChange('la', e.target.value)} 
                        />
                    </div>
                    <div>
                    </div>
                    <button type="button" onClick={handleBtnCreate}>Create</button>
                </form>
            </div>
            <div>
                <div>List of committee</div>
                <div className={styles.listContainer}>
                    <table border="1">
                        <thead>
                          <tr>
                            <th key="0">scriptHash</th><th key="1">revelance</th><th key="2">lala</th><th key="3">la</th>
                          </tr>
                        </thead>
                        <tbody>
                            {list?.map((item, index) => (
                              <tr key={index}>
                                <td key="0">{item.scriptHash }</td><td key="1">{item.revelance }</td><td key="2">{item.lala }</td><td key="3">{item.la }</td>
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
