// const { expect } = require('chai');
// const fetch = require('node-fetch');
// const { getSessionCookie } = require('./utils');
// require('dotenv').config();

describe('`/api/grants` endpoint', async () => {
    context('GET /api/grants/:grantId/assign', async () => {
        context('by a user with admin role', async () => {
            it('lists grants assigned to users in this user\'s own agency');
            it('lists grants assigned to users in a subagency of this user\'s own agency');
            it('is forbidden for agencies outside this user\'s hierarchy');
        });
        context('by a user with staff role', async () => {
            it('lists grants assigned to users in this user\'s own agency');
            it('is forbidden for any agency except this user\'s own agency');
        });
    });
    context('PUT /api/grants/:grantId/assign', async () => {
        context('by a user with admin role', async () => {
            it('assigns users in this user\'s own agency to a grant');
            it('assigns users in subagencies of this user\'s own agency to a grant');
            it('is forbidden for users in agencies outside this user\'s hierarchy');
        });
        context('by a user with staff role', async () => {
            it('assigns users in this user\'s own agency to a grant');
            it('is forbidden for users in any agency except this user\'s own agency');
        });
    });
    context('DELETE /api/grants/:grantId/assign', async () => {
        context('by a user with admin role', async () => {
            it('unassigns users in this user\'s own agency from a grant');
            it('unassigns users in subagencies of this user\'s own agency from a grant');
            it('is forbidden for users in agencies outside this user\'s hierarchy');
        });
        context('by a user with staff role', async () => {
            it('unassigns users in this user\'s own agency from a grant');
            it('is forbidden for users in any agency except this user\'s own agency');
        });
    });
    context('GET /api/grants/:grantId/interested', async () => {
        context('by a user with admin role', async () => {
            it('lists grants of interest to this user\'s own agency');
            it('lists grants of intrest to a subagency of this user\'s own agency');
            it('is forbidden for agencies outside this user\'s hierarchy');
        });
        context('by a user with staff role', async () => {
            it('lists grants of interest to this user\'s own agency');
            it('is forbidden for any agency except this user\'s own agency');
        });
    });
    context('PUT /api/grants/:grantId/interested', async () => {
        context('by a user with admin role', async () => {
            it('records interest in a grant for this user\'s own agency');
            it('records interest in a grant for a subagency of this user\'s own agency');
            it('is forbidden for agencies outside this user\'s hierarchy');
        });
        context('by a user with staff role', async () => {
            it('records interest in a grant for this user\'s own agency');
            it('is forbidden for users in any agency except this user\'s own agency');
        });
    });
});