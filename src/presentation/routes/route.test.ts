import request from 'supertest';
import app from '../../server';

describe('test routes', () => {
    describe('Signup route', () => {
        test('should return an valid http response 200. Signup success.', async () => {
            await request(app).post('/signup')
            .send({
                name: 'Nome qualquer', 
                age: 23,
                group: 'Nome de grupo qualquer',
                email: 'email@qualquer.com',
                password: 'senha qualquer'
            })
            .expect(200);
        });

        test('should return an valid http response 400. Age couldnt be equals 0', async () => {
            await request(app).post('/signup')
            .send({
                name: 'Nome qualquer', 
                age: 0,
                group: 'Nome de grupo qualquer',
                email: 'email@qualquer.com',
                password: 'senha qualquer'
            })
            .expect(400);
        });

        test('should return an valid http response 400. Fields shouldnt empty.', async () => {
            await request(app).post('/signup')
            .send({
                name: '', 
                age: 14,
                group: '',
                email: '',
                password: ''
            })
            .expect(400);
        });

        test('should return an valid http response 400. All fields should be complete.', async () => {
            await request(app).post('/signup')
            .send({
                name: 'Nome qualquer'
            })
            .expect(400);
        });
    
        test('should return an valid http response 400. Empty fields dont accepted.', async () => {
            await request(app).post('/signup')
            .send({})
            .expect(400);
        });
    })

    describe('Signin route', () => {
        test('should return an valid http response 200. Signin success.', async () => {
            await request(app).post('/signin')
            .send({
                email: 'email@qualquer',
                password: 'senha qualquer'
            })
            .expect(200);
        });

        test('should return an valid http response 400. No one field should be empty.', async () => {
            await request(app).post('/signin')
            .send({
                email: undefined,
                password: 'senha qualquer'
            })
            .expect(400);
        });

        test('should return an valid http response 400. No one field should be empty.', async () => {
            await request(app).post('/signin')
            .send({
                email: 'email@qualquer',
                password: undefined
            })
            .expect(400);
        });

        test('should return an valid http response 400.', async () => {
            await request(app).post('/signin')
            .send({
                email: undefined,
                password: undefined
            })
            .expect(400);
        });

        test('should return an valid http response 400. All fields shouldnt be empty.', async () => {
            await request(app).post('/signin')
            .send({
                email: '',
                password: ''
            })
            .expect(400);
        });
    
        test('should return an valid http response 400. No one fields was sended.', async () => {
            await request(app).post('/signin')
            .send({})
            .expect(400);
        });
    })

    describe('Invite an user to an group route', () => {
        test('should return an valid http response 200. Invite success.', async () => {
            await request(app).post('/invite/user/group')
            .send({
                who_invite_id: 'id de quem convidou', 
                who_invited_id: 'id do usuario convidado'
            })
            .expect(200);
        });

        test('should return an valid http response 400. Fields emptys.', async () => {
            await request(app).post('/invite/user/group')
            .send({
                who_invite_id: '', 
                who_invited_id: ''
            })
            .expect(400);
        });

        test('should return an valid http response 200. Some field undefined.', async () => {
            await request(app).post('/invite/user/group')
            .send({
                who_invite_id: undefined, 
                who_invited_id: 'asd'
            })
            .expect(400);
        });

        test('should return an valid http response 400. Some field undefined.', async () => {
            await request(app).post('/invite/user/group')
            .send({
                who_invite_id: 'asd', 
                who_invited_id: undefined
            })
            .expect(400);
        });
    
        test('should return an valid http response 400. No one field was sended.', async () => {
            await request(app).post('/invite/user/group')
            .send({})
            .expect(400);
        });
    })

    describe('Remove an user to an group route', () => {
        test('should return an valid http response 200. Remove success.', async () => {
            await request(app).delete('/remove/user/group')
            .query({
                group: 'kjasd',
                who_remove_id: 'id de quem vai remover', 
                who_removed_id: 'id de quem vai ser removido'
            })
            .expect(200);
        });

        test('should return an valid http response 400. Fields emptys.', async () => {
            await request(app).delete('/remove/user/group')
            .query({
                who_remove_id: '', 
                who_removed_id: ''
            })
            .expect(400);
        });

        test('should return an valid http response 400. Some field is empty.', async () => {
            await request(app).delete('/remove/user/group')
            .query({
                who_remove_id: '', 
                who_removed_id: 'id de quem vai ser removido'
            })
            .expect(400);
        });

        test('should return an valid http response 400. Some field is undefined.', async () => {
            await request(app).delete('/remove/user/group')
            .query({
                who_remove_id: 'id de quem vai remover', 
                who_removed_id: undefined
            })
            .expect(400);
        });
    
        test('should return an valid http response 400', async () => {
            await request(app).delete('/remove/user/group')
            .query({})
            .expect(400);
        });
    })

    describe('Save an new event route', () => {
        test('should return an valid http response 200', async () => {
            await request(app).post('/save/event')
            .send({
                name: 'Nome do evento qualquer',
                description: 'Descrição aqui',
                date: new Date(),
                photo: 'url da foto de capa do evento',
            })
            .expect(200);
        });

        test('should return an valid http response 400', async () => {
            await request(app).post('/save/event')
            .send({
                name: '',
                description: '',
                date: new Date(),
                photo: '',
            })
            .expect(400);
        });

        test('should return an valid http response 400', async () => {
            await request(app).post('/save/event')
            .send({
                name: 'Nome do evento qualquer',
            })
            .expect(400);
        });
    
        test('should return an valid http response 400', async () => {
            await request(app).post('/save/event')
            .send({})
            .expect(400);
        });
    })

    describe('Edit an event route', () => {
        test('should return an valid http response 200', async () => {
            await request(app).put('/edit/event')
            .send({
                event_id: 'id do evento aqui',
                who_edit_id: 'id de quem está editando',
                name: 'precisa de pelo o menos um campo para editar'
            })
            .expect(200);
        });

        test('should return an valid http response 400', async () => {
            await request(app).put('/edit/event')
            .send({
                event_id: '',
                who_edit_id: 'id de quem está editando',
                name: 'precisa de pelo o menos um campo para editar'
            })
            .expect(400);
        });

        test('should return an valid http response 400', async () => {
            await request(app).put('/edit/event')
            .send({
                name: 'precisa de pelo o menos um campo para editar'
            })
            .expect(400);
        });
    
        test('should return an valid http response 400', async () => {
            await request(app).put('/edit/event')
            .send({})
            .expect(400);
        });
    })

    describe('Remove an event route', () => {
        test('should return an valid http response 200', async () => {
            await request(app).delete('/remove/event')
            .query({
                event_id: 'id do evento aqui',
                who_edit_id: 'id de quem está editando',
            })
            .expect(200);
        });

        test('should return an valid http response 400', async () => {
            await request(app).delete('/remove/event')
            .query({
                event_id: 'id do evento aqui',
                who_edit_id: '',
            })
            .expect(400);
        });

        test('should return an valid http response 400', async () => {
            await request(app).delete('/remove/event')
            .query({
                who_edit_id: 'id de quem está editando',
            })
            .expect(400);
        });
    
        test('should return an valid http response 400', async () => {
            await request(app).delete('/remove/event')
            .query({})
            .expect(400);
        });
    })

    describe('Edit an group route', () => {
        test('should return an valid http response 200', async () => {
            await request(app).put('/edit/group')
            .send({
                who_edit_group: 'id de quem quer alterar',
                id_group: 'id do grupo que quer editar',
                name: 'Novo nome aqui'
            })
            .expect(200);
        });

        test('should return an valid http response 400', async () => {
            await request(app).put('/edit/group')
            .send({
                id_group: 'id do grupo que quer editar'
            })
            .expect(400);
        });
    
        test('should return an valid http response 400', async () => {
            await request(app).put('/edit/group')
            .send({})
            .expect(400);
        });
        
    })

    describe('Save an group route', () => {
        test('should return an valid http response 200', async () => {
            await request(app).post('/save/group')
            .send({
                who_create_group: "id de quem cria",
                id_group: 'id do grupo',
                name: 'Nome qualquer do grupo',
                description: 'Descrição qualquer do grupo'
            })
            .expect(200);
        });

        test('should return an valid http response 400', async () => {
            await request(app).post('/save/group')
            .send({
                name: 'id do grupo que quer editar'
            })
            .expect(400);
        });

        test('should return an valid http response 400', async () => {
            await request(app).post('/save/group')
            .send({
                name: '',
                description: 'Descrição qualquer do grupo'
            })
            .expect(400);
        });
    
        test('should return an valid http response 400', async () => {
            await request(app).post('/save/group')
            .send({})
            .expect(400);
        });
        
    })

    describe('Remove an group route', () => {
        test('should return an valid http response 200', async () => {
            await request(app).delete('/remove/group')
            .query({
                who_remove_group: 'id de quem quer remover',
                id_group: 'id do grupo que quer remover'
            })
            .expect(200);
        });

        test('should return an valid http response 400', async () => {
            await request(app).delete('/remove/group')
            .query({
                id_group: ''
            })
            .expect(400);
        });

        test('should return an valid http response 400', async () => {
            await request(app).delete('/remove/group')
            .query({
                id_group: undefined
            })
            .expect(400);
        });
    
        test('should return an valid http response 400', async () => {
            await request(app).delete('/remove/group')
            .query({})
            .expect(400);
        });
        
    })
});
