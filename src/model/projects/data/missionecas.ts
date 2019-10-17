import {menuProject, project, typeProject} from '@/model/projects/type';

const menuMissionecas: menuProject = {
    shape: 'amarelo2', //tem que ter o arquivo na pasta, assets/shapes/amarelo.png
    textAlignment: 'right',
    width: 110 //defini a quebra de linha dentro do shape, no menu
};

//Tem que adicionar essa constant dentro do arquivo: model/projects/allProjects.ts

export const missionecas: project = {
    key: 'missionecas', // a key é utilizada na rota(endereço url), não pode ter acentos
    title: 'Missionecas',
    type: typeProject.national,
    menu: menuMissionecas,
    coverImage: 'coverMissionecas', //tem que ter o arquivo na pasta, assets/images/coverGuine.png
    projectImage: 'projectMissionecas', //tem que ter o arquivo na pasta, assets/images/projectMissionecas.png,
    text: 'Este projeto tem o objetivo de tornar Jesus conhecido e reconhecido como único salvador.  Aqui, fabricamos bonecas de pano, carrinhos e aviões de madeira, além de personalizar canecas. Todos esses objetos têm as cores do plano de salvação, com o intuito de, no momento da entrega dos materiais, fazer evangelismo por meio do ensino e incentivar as pessoas que ouvirem a história a replicá-la para os outros. Desta forma, buscamos formar multiplicadores da Palavra.',
    getInvolved: 'O projeto conta com duas oficinas semanais, que acontecem às quartas-feiras, no Campus Norte, e às quintas-feiras, no Campus EPNB.',
    support: 'Participando das oficinas, doando roupas e sapatos usados, bijuterias, brinquedos e móveis usados. Todos esses materiais são vendidos no bazar e o valor arrecadado é utilizado para investimento no projeto, abatendo as despesas e adquirindo as peças necessárias para a confecção dos produtos.'
};
