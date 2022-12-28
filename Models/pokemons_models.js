
module.exports = (sequelize, DataTypes) => {
    return sequelize.define('Pokemon', {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false
      },
      hp: {
        type: DataTypes.INTEGER,
        allowNull: false
      },
      cp: {
        type: DataTypes.INTEGER,
        allowNull: false
      },
      picture: {
        type: DataTypes.STRING,
        allowNull: false
      },
      types: {
        type: DataTypes.STRING,
        allowNull: false,
        get() {
          const rawValue = this.getDataValue('name');
          return rawValue ? rawValue.split(",") : null;
        },
        set(value) {  this.setDataValue('types', value.join());    }
    
      }
    }, {
      timestamps: true,
      createdAt: 'created',
      updatedAt: false
    })
}
