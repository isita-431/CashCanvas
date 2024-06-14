const express = require('express');
const plaid = require('plaid');
const router = express.Router();


const PLAID_CLIENT_ID = process.env.PLAID_CLIENT_ID;
const PLAID_SECRET = process.env.PLAID_SECRET;
const PLAID_ENV = process.env.PLAID_ENV || 'sandbox';
const PLAID_PRODUCTS = ['transactions'];
let access_token = null;

const client = new plaid.PlaidApi(
    new plaid.Configuration({
        basePath: plaid.PlaidEnvironments[PLAID_ENV],
        baseOptions: {
            headers: {
            'PLAID-CLIENT-ID': PLAID_CLIENT_ID,
            'PLAID-SECRET': PLAID_SECRET,
            },
        },
    })
)

router.post('/create_link_token', async (req, res) => {
    try {
        const response = await client.linkTokenCreate({
            user: {
                client_user_id: 'unique-id',
            },
            client_name: 'Cash Canvas',
            products: PLAID_PRODUCTS,
            country_codes: ['US'],
            language: 'en',
        });

        res.json(response.data);
    } catch (error) {
        console.error(error);
        res.json({ error: error.response.body });
    }
});

router.post('/exchange_public_token', async (req, res) => {
    const { publicToken } = req.body;

    try {
        const response = await client.itemPublicTokenExchange({
            public_token: publicToken,
        });
        access_token = response.data.access_token;
        res.json("Exchange successful");
    } catch (error) {
        console.error(error);
        res.json({ error: error.response.body });
    }
});

router.post('/transactions', async (req, res) => {

    const startDate = new Date();
    startDate.setMonth(startDate.getMonth() - 12);
    const endDate = new Date();

    try {
        const response = await client.transactionsGet({
            access_token: access_token,
            start_date: startDate.toISOString().slice(0, 10),
            end_date: endDate.toISOString().slice(0, 10),
        });

        res.json(response.data);
    } catch (error) {
        console.error(error);
        res.json({ error: error.response.body });
    }
})

module.exports = router;
