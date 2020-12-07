import bodyParser from 'body-parser';

import { validateToken } from '../authenticate.js';
import Article from '../models/article.js';
import User from '../models/user.js';
import Slack from '../service/slackService.js';

export default (router) => {
    router.use(bodyParser.json());
    router.route('/')
        .get(validateToken, async function (req, res) {
            try{
                const articles = await Article.find({});
                return res.status(200).send(articles);
            }catch(e){
                return res.status(500).send({error:e.message});
            }

        })
        .post(validateToken, async function (req, res) {
            //userId would be obtained from JWT
            const { title, text, tags } = req.body;

            if(!title || !text || !tags) return res.status(400).send({error:'You need to add title, text and tags as required'});

            try{
                const user = await User.findById(req.user._id);
                if(!user) return res.status(500).send('User not found');
                req.body.userId = user._id;
                const response = await Article.create(req.body);
                const slack = new Slack();
                await slack.sendMessage(user.name, title, text);
                return res.status(200).send(response);
            }catch(e){
                console.log(e);
                return res.status(500).send({error:e.message});
            }
        });

    router.route('/:articleId')
        .put(validateToken, async function(req, res) {
            const { articleId } = req.params;
            if(!articleId) return res.status(500).send({msg: 'Missing articleId param'});

            try{
                const user = await User.findById(req.user._id);
                if(!user) return res.status(500).send('User not found');
                req.body.userId = user._id;
                const response = await Article.findByIdAndUpdate(articleId, {$set: req.body}, {new: true});
                if(!response) return res.status(500).send({msg: 'Article not found'});
                return res.status(200).send({msg: 'Successfully edited', response});
            }catch(e){
                return res.status(500).send({error:e.message});
            }
        })
        .delete(validateToken, async function(req, res) {
            const { articleId } = req.params;

            try{
                const response = await Article.findByIdAndDelete(articleId);
                if(!response) return res.status(500).send({msg: 'Article not found'});
                return res.status(200).send({msg: 'Successfully deleted', response});
            }catch(e){
                return res.status(500).send({error:e.message});
            }
        });

    //Provide a tagString separated by comma to add all the tags you want for querying articles
    router.get('/by-tags/:tagString', validateToken, async function(req, res) {
        const { tagString } = req.params;
        if(!tagString) return res.status(500).send({msg: 'Missing tagString param'});

        try{
            const tags = tagString.split(',').map(tag => tag.replace(/^\s+|\s+$/gm,'')).filter(tag => tag);
            //This will look for all articles that have all of the tags provided
            const articles = await Article.find({
                tags: { $all: tags}
            });
            return res.status(200).send(articles);
        }catch(e){
            return res.status(500).send(e);
        }
    });

    return router;
}
