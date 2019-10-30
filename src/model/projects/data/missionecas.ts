import {menuProject, project, typeProject} from '@/model/projects/type';

const menuMissionecas: menuProject = {
    shape: 'shapeY1',
    textAlignment: 'right',
    width: 110
};

export const missionecas: project = {
    key: 'missionecas',
    colorTitle: 'red',
    title: 'Missionecas',
    type: typeProject.national,
    menu: menuMissionecas,
    coverImage: 'coverMissionecas',
    coverPosition: '20% 7%',
    projectImage: 'projectMissionecas',
    text: 'Este projeto tem o objetivo de tornar Jesus conhecido e reconhecido como único salvador.  Aqui, fabricamos bonecas de pano, carrinhos e aviões de madeira, além de personalizar canecas. Todos esses objetos têm as cores do plano de salvação, com o intuito de, no momento da entrega dos materiais, fazer evangelismo por meio do ensino e incentivar as pessoas que ouvirem a história a replicá-la para os outros. Desta forma, buscamos formar multiplicadores da Palavra.',
    getInvolved: 'O projeto conta com duas oficinas semanais, que acontecem às quartas-feiras, no Campus Norte, e às quintas-feiras, no Campus EPNB.',
    support: 'Participando das oficinas, doando roupas e sapatos usados, bijuterias, brinquedos e móveis usados. Todos esses materiais são vendidos no bazar e o valor arrecadado é utilizado para investimento no projeto, abatendo as despesas e adquirindo as peças necessárias para a confecção dos produtos.'
};
