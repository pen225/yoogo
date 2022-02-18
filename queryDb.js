const db = require("./db/database");


const usersQuery = class{
    static insertDonnees =(data)=>{
        let{email, civilite, nom, prenom, codePostal, ville, anniversaire} = data;
        // console.log(data);
    
        let sql = "INSERT INTO `user`(`email`, `civilite`, `nom`, `prenom`, `codePostal`, `ville`, `anniversaire`) VALUES (?,?,?,?,?,?,?)";
    
        db.query(sql,[email,civilite,nom,prenom,codePostal,ville,anniversaire],(err, res) =>{
            if (err) {
                console.log(err);
                return {erreur:err}
            }else{
                console.log("success");
                // return {success:success}
            }
        })
    }
    

    static selectDonnees =(data)=>{
        let{email, civilite, nom, prenom, codePostal, ville, anniversaire} = data;
         console.log("data",data);
    
        let sql = `SELECT * FROM user WHERE email = '${data.email}' AND nom = '${data.nom}' `;
    
        db.query(sql,(err, res) =>{
            if (err) {
                console.log(err);
                return {erreur:err}
            }else{
                console.log("success",res);
                return {success:res}
            }
        })
    }
}



module.exports = usersQuery;

