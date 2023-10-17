import express from "express";
import {LostItem} from "./models/Models.js";
import bodyParser from "body-parser";

const router = express.Router();

router.get('/lostItems', bodyParser.urlencoded({ limit: "50mb", extended: false }), async (req, res) =>{

    // Get all lost items
    const lostItemsData = await LostItem.findAll({
        // attributes: ['name'],
        // include: [
        //     {
        //         model: ,
        //         attributes: ['', '']
        //     }
        // ]
    });

    let lostItems = lostItemsData.map(lostItem => lostItem.dataValues);

    res.send({ items: lostItems });
});

router.post('/lostItems', async (req, res) => {
    try {
        const {lostItem, name, description, email, lastSeen, image} = req.body;

        if (!lostItem || !email) {
            return res.status(400).send({error: "Missing required fields"});
        }

        const newLostItem = await LostItem.create({
            name,
            lostItem,
            description,
            email,
            lastSeen,
            image
        });

        res.send({item: newLostItem.dataValues});
    }catch (error) {
        console.error(error);
    }
});

router.post('/foundItem/:id', async (req, res) => {
    const {id} = req.params;
    const { founderEmail } = req.body;
    // const { founderName, founderEmail, foundLocation } = req.body;

    // TODO: SEND EMAIL TO USER


    res.send({message: "Owner has been notified"});
});

router.post('/foundItem/confirm', async (req, res) => {

});

export default router;
