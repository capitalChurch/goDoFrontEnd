import {menuProject, project, typeProject} from '@/model/projects/type';

const menuRefugiados: menuProject = {
    shape: 'green', //tem que ter o arquivo na pasta, assets/shapes/purple1.png
    textAlignment: 'right',
    width: 110 //defini a quebra de linha dentro do shape, no menu,
};

//Tem que adicionar essa constant dentro do arquivo: model/projects/allProjects.ts

export const refugiados: project = {
    key: 'refugiados', // a key é utilizada na rota(endereço url), não pode ter acentos
    title: 'Refugiados',
    menu: menuRefugiados,
    type: typeProject.international,
    coverImage: 'coverRefugiados', //tem que ter o arquivo na pasta, assets/images/coverGuine.png
    projectImage: 'projectRefugiados', //tem que ter o arquivo na pasta, assets/images/projectGuine.png
    text: 'O projeto visa ações de acolhimento para refugiados, de diferentes nacionalidades, que residem ou passaem pelo Distrito Federal, através de iniciativas diversas.',
    getInvolved: 'O voluntariado neste projeto acontece em todas as áreas, desde o cuidado básico com as pessoas até o acompanhamento espiritual. Além disso, o auxílio com questões jurídicas, educacionais e profissionais também é muito bem-vindo.',
    support: 'A contribuição é feita por ofertas e por sua disponibilidade em oferecer seus dons, talentos e conhecimentos diversos. Além disso, a doação de roupas e objetos de utilidade doméstica também são muito importantes.'
};
