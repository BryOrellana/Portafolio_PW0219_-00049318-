const Register = require('../models/Register');

const insert = (req,res)=>{
    let register = new Register(req.body);
    register.save((err)=>{
        if(err) return res.status(500).json({
            message:'Algo salio mal al tratar de insertar un Register'
        })
        res.status(200).json({
            message:'Insercion de Register exitosa'
        })
    })
};

const update = (req,res) =>{
    let register = req.body
    
    if(!register._id){
        return res.status(400).json({
            message:'el campo id es obligatorio'
        })
    }
    register.update({_id: register._id},register)
    .then(value=>{
        res.status(200).json({
            message:'Operacion de modificar exitosa'
        })
    })
    .catch(err=>{
        res.status(500).json({
            message:'Algo salio mal en la operacion modificar'
        })
    })

};

const deletedById = (req,res)=>{
    
    let register = req.body
    if(!register._id){
        return res.status(400).json({
            message:'el campo id es obligatorio'
        })
    }
    register.deleteOne({_id:register._id})
    .then(value=>{
        res.status(200).json({
            message:'Operacion de eliminar exitosa'
        })
    })
    .catch(err=>{
        res.status(500).json({
            message:'Algo salio mal en la operacion eliminar'
        })
    })
};

const getAll = (req,res)=>{
    Register.find((err,register)=>{
        if(err) return res.status(500).json({
            message:'Algo salio mal al seleccionar todos'
        })
        if(registers){
            res.status(200).json(registers)
        }
        else{
            res.status(404).json({
                message:'No hay ningun registro'
            })
        }
    })
};

const getOneById = (req,res)=>{
    let id = req.params._id

    Register.findById(id,(err,register)=>{
        if(err) return res.status(500).json({
            message:'Algo salio mal al seleccionar uno'
        })
        if(registers){
            res.status(200).json(registers)
        }
        else{
            res.status(404).json({
                message:'No se encontro el registro solicitado'
            })
        }
    })
};

module.exports = {
    insert,
    update,
    deletedById,
    getAll,
    getOneById
}
