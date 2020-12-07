import bodyParser from 'body-parser';

import { validateToken, getNewRandomToken } from '../authenticate.js';
import User from '../models/user.js';

export default (router) => {
    router.use(bodyParser.json());
    router.route('/')
        .get(validateToken, function (req, res) {
            res.status(200).send({msg: 'This endpoint shows the info held on token', ...req.user});
        })
        .post(async function (req, res) {
            const { name, avatar } = req.body;

            if(!name || !avatar) return res.status(400).send({error:'Param name and avatar required'});

            try{
                const possibleExist = await User.find({name:name});
                if(possibleExist.length > 0) throw new Error('User already exist');
                let response = await User.create(req.body);
                response = JSON.parse(JSON.stringify(response));
                response.token = getNewRandomToken(response);
                return res.status(200).send(response);
            }catch(e){
                return res.status(500).send({error:e.message});
            }
        });

    return router;
}
