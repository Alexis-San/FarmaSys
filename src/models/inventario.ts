import { DataTypes } from 'sequelize';
import db from '../db/connection';
import producto from './producto';

const inventario= db.define('inventario',{
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
    },
    precio_venta:{
        type:DataTypes.BIGINT,
        allowNull: false,
    },
    precio_compra:{
        type:DataTypes.BIGINT,
        allowNull: false,
    },
    descripcion:{
        type:DataTypes.TEXT,  
    },
    fecha_vencimiento:{
        type:DataTypes.DATE
    },
    stock:{
        type:DataTypes.INTEGER,
        allowNull: false,
    },
    lote:{
        type:DataTypes.STRING,
        
    },
    //este campo es para eliminacion logica
    estado:{
        type:DataTypes.BOOLEAN,
        defaultValue:true
    }

})

inventario.belongsTo(producto, {
    foreignKey: {
        name: 'productoId',
        allowNull: false
    },
    as: 'producto'
});

producto.hasMany(inventario, {
    foreignKey: 'productoId',
    as: 'inventarios'
});
export default inventario;