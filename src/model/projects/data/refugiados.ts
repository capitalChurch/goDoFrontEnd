import {menuProject, project, typeProject} from '@/model/projects/type';

const menuRefugiados: menuProject = {
    shape: 'shapeG2', 
    textAlignment: 'left',
    width: 90
};

export const refugiados: project = {
    key: 'refugiados',
    colorTitle: 'green',
    title: 'Refugiados',
    menu: menuRefugiados,
    type: typeProject.international,
    coverImage: 'coverRefugiados', 
    projectImage: 'projectRefugiados', 
    text: 'O projeto visa ações de acolhimento para refugiados, de diferentes nacionalidades, que residem ou passaem pelo Distrito Federal, através de iniciativas diversas.',
    getInvolved: 'O voluntariado neste projeto acontece em todas as áreas, desde o cuidado básico com as pessoas até o acompanhamento espiritual. Além disso, o auxílio com questões jurídicas, educacionais e profissionais também é muito bem-vindo.',
    support: 'A contribuição é feita por ofertas e por sua disponibilidade em oferecer seus dons, talentos e conhecimentos diversos. Além disso, a doação de roupas e objetos de utilidade doméstica também são muito importantes.'
};
