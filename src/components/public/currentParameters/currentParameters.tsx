import { currentParametersEntity } from '../../../lib/SmartDB/Entities/currentParameters.Entity';
import { currentParametersApi } from '../../../lib/SmartDB/FrontEnd/currentParameters.FrontEnd.Api.Calls';
import { useEffect, useState } from 'react';
import Modal from 'react-modal';
import styles from './currentParameters.module.scss';

export default function currentParameters() {
    //--------------------------------------
    const [isRefreshing, setIsRefreshing] = useState(true);
    useEffect(() => {
        setIsRefreshing(false);
    }, []);
    //----------------------------
    const [list, setList] = useState<currentParametersEntity[]>();
    const [newItem, setNewItem] = useState<Partial<currentParametersEntity>>({}); // Estado para el nuevo entidad
    //----------------------------
    const fetch = async () => {
            try {
                const list: currentParametersEntity[] = await currentParametersApi.getAllApi_();
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
          const entity = new currentParametersEntity(newItem);

          // Llamada al API para crear el entidad en la base de datos
          const createdcurrentParameters = await currentParametersApi.createApi(entity);

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
            await currentParametersApi.deleteByIdApi(currentParametersEntity, id); // Llama a la API para eliminar el elemento
            fetch();
        } catch (e) {
            console.error(e);
        }
    };
    //----------------------------
    const handleInputChange = (field: keyof currentParametersEntity, value: any) => {
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
                        <label>collateralPercentage: </label>
                        <input 
                            type="text" 
                            value={newItem.collateralPercentage || ''} 
                            onChange={(e) => handleInputChange('collateralPercentage', e.target.value)} 
                        />
                    </div>
                    <div>
                    </div>
                    <div>
                        <label>committeeMaxTermLength: </label>
                        <input 
                            type="text" 
                            value={newItem.committeeMaxTermLength || ''} 
                            onChange={(e) => handleInputChange('committeeMaxTermLength', e.target.value)} 
                        />
                    </div>
                    <div>
                    </div>
                    <div>
                        <label>committeeminSize: </label>
                        <input 
                            type="text" 
                            value={newItem.committeeminSize || ''} 
                            onChange={(e) => handleInputChange('committeeminSize', e.target.value)} 
                        />
                    </div>
                    <div>
                    </div>
                    <div>
                        <label>monetaryExpansion: </label>
                        <input 
                            type="text" 
                            value={newItem.monetaryExpansion || ''} 
                            onChange={(e) => handleInputChange('monetaryExpansion', e.target.value)} 
                        />
                    </div>
                    <div>
                    </div>
                    <div>
                        <label>treasuryCut: </label>
                        <input 
                            type="text" 
                            value={newItem.treasuryCut || ''} 
                            onChange={(e) => handleInputChange('treasuryCut', e.target.value)} 
                        />
                    </div>
                    <div>
                    </div>
                    <div>
                        <label>maxTxSize: </label>
                        <input 
                            type="text" 
                            value={newItem.maxTxSize || ''} 
                            onChange={(e) => handleInputChange('maxTxSize', e.target.value)} 
                        />
                    </div>
                    <div>
                    </div>
                    <div>
                        <label>txFeePerByte: </label>
                        <input 
                            type="text" 
                            value={newItem.txFeePerByte || ''} 
                            onChange={(e) => handleInputChange('txFeePerByte', e.target.value)} 
                        />
                    </div>
                    <div>
                    </div>
                    <button type="button" onClick={handleBtnCreate}>Create</button>
                </form>
            </div>
            <div>
                <div>List of currentParameters</div>
                <div className={styles.listContainer}>
                    <table border="1">
                        <thead>
                          <tr>
                            <th key="0">collateralPercentage</th><th key="1">committeeMaxTermLength</th><th key="2">committeeminSize</th><th key="3">monetaryExpansion</th><th key="4">treasuryCut</th><th key="5">maxTxSize</th><th key="6">txFeePerByte</th>
                          </tr>
                        </thead>
                        <tbody>
                            {list?.map((item, index) => (
                              <tr key={index}>
                                <td key="0">{item.collateralPercentage }</td><td key="1">{item.committeeMaxTermLength }</td><td key="2">{item.committeeminSize }</td><td key="3">{item.monetaryExpansion }</td><td key="4">{item.treasuryCut }</td><td key="5">{item.maxTxSize }</td><td key="6">{item.txFeePerByte }</td>
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
