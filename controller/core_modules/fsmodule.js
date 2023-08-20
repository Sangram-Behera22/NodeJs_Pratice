const fs = require('fs');
exports.createFiles = async (req,res)=>{
    try {
        const {name,content,ext} = req.body;
        fs.writeFile(`files/${name}.${ext}`,`${content}`,(error)=>{
             if(error){
               return res.status(400).json({
                error:error,
                message : "failed create file."
               });
             }
             return res.status(201).json({
                 message : "file has been created!"
             });
        });
    } catch (error) {
        return res.status(500).json({
            error : error
        })
    }
}
exports.appendModules = async (req,res) =>{
    try {
        const {content} = req.body;
        if(!content){
            return res.status(400).json({
                message : "content is required"
            });
        }
        fs.appendFile('files/test.txt',content,(error)=>{
            if(error){
                return res.status(400).json({
                 error:error,
                 message : "failed add new data into the file."
                });
            }
            return res.status(200).json({
                message : "new data has been added into the file."
            });

        });
    } catch (error) {
        return res.status(500).json({
            error : error
        })
    }
}
