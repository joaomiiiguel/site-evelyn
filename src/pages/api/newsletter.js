import axios from "axios";

export default function handler(req, res) {
    const { name, email } = req.body;



    // Configuração do cabeçalho da requisição


    fetch('https://evelynpinheiro.api-us1.com/api/3/contacts', {
        method: 'POST',
        headers: {
            accept: 'application/json',
            'content-type': 'application/json',
            'Api-Token': '732e776d7b1d8efe23bf9f59deff72a8e79e43c2c0b93c48539b33c9985285a4c9ad2d56'
        },
        body: JSON.stringify({ contact: { email: email, firstName: name } })
    })
        .then(response => response.json())
        .then(data => {
            console.log('Novo contato criado com sucesso!');
            console.log(data);
            return
        })
        .catch(error => {
            console.error('Erro ao criar novo contato:');
            console.error(error);
            return
        });

    // axios.post(url, data, {headers})
    // .then(response => {
    //     res.status(200).json({mesagem: 'sucesso'})
    // })
    // .catch(error => {
    //     res.status(400 || 500).json({
    //         error: `Oops, something went wrong...`,
    //     })
    // })
}