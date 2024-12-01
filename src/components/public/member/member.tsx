import { memberEntity } from '../../../lib/SmartDB/Entities/member.Entity';
import { memberApi } from '../../../lib/SmartDB/FrontEnd/member.FrontEnd.Api.Calls';
import { useEffect, useState } from 'react';
import Modal from 'react-modal';
import styles from './member.module.scss';

export default function member() {
    //--------------------------------------
    const [isRefreshing, setIsRefreshing] = useState(true);
    useEffect(() => {
        setIsRefreshing(false);
    }, []);
    //----------------------------
    const [list, setList] = useState<memberEntity[]>();
    const [newItem, setNewItem] = useState<Partial<memberEntity>>({}); // Estado para el nuevo entidad
    //----------------------------
    const fetch = async () => {
            try {
                const list: memberEntity[] = await memberApi.getAllApi_();
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
          const entity = new memberEntity(newItem);

          // Llamada al API para crear el entidad en la base de datos
          const createdmember = await memberApi.createApi(entity);

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
            await memberApi.deleteByIdApi(memberEntity, id); // Llama a la API para eliminar el elemento
            fetch();
        } catch (e) {
            console.error(e);
        }
    };
    //----------------------------
    const handleInputChange = (field: keyof memberEntity, value: any) => {
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
                        <label>name: </label>
                        <input 
                            type="text" 
                            value={newItem.name || ''} 
                            onChange={(e) => handleInputChange('name', e.target.value)} 
                        />
                    </div>
                    <div>
                    </div>
                    <div>
                        <label>description: </label>
                        <input 
                            type="text" 
                            value={newItem.description || ''} 
                            onChange={(e) => handleInputChange('description', e.target.value)} 
                        />
                    </div>
                    <div>
                    </div>
                    <div>
                        <label>hash: </label>
                        <input 
                            type="text" 
                            value={newItem.hash || ''} 
                            onChange={(e) => handleInputChange('hash', e.target.value)} 
                        />
                    </div>
                    <div>
                    </div>
                    <div>
                        <label>epoch: </label>
                        <input 
                            type="text" 
                            value={newItem.epoch || ''} 
                            onChange={(e) => handleInputChange('epoch', e.target.value)} 
                        />
                    </div>
                    <div>
                    </div>
                    <div>
                        <label>epoch_until: </label>
                        <input 
                            type="text" 
                            value={newItem.epoch_until || ''} 
                            onChange={(e) => handleInputChange('epoch_until', e.target.value)} 
                        />
                    </div>
                    <div>
                    </div>
                    <button type="button" onClick={handleBtnCreate}>Create</button>
                </form>
            </div>
            <div>
                <div>List of member</div>
                <div className={styles.listContainer}>
                    <table border="1">
                        <thead>
                          <tr>
                            <th key="0">name</th><th key="1">description</th><th key="2">hash</th><th key="3">epoch</th><th key="4">epoch_until</th>
                          </tr>
                        </thead>
                        <tbody>
                            {list?.map((item, index) => (
                              <tr key={index}>
                                <td key="0">{item.name }</td><td key="1">{item.description }</td><td key="2">{item.hash }</td><td key="3">{item.epoch }</td><td key="4">{item.epoch_until }</td>
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
