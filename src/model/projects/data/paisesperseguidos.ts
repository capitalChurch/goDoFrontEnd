import {menuProject, project, typeProject} from '@/model/projects/type';

const menuPaisesPerseguidos: menuProject = {
    shape: 'azul2', //tem que ter o arquivo na pasta, assets/shapes/purple1.png
    textAlignment: 'right',
    width: 120 //defini a quebra de linha dentro do shape, no menu,
};

//Tem que adicionar essa constant dentro do arquivo: model/projects/allProjects.ts

export const paisesperseguidos: project = {
    key: 'paisesperseguidos', // a key é utilizada na rota(endereço url), não pode ter acentos
    title: 'Países Perseguidos',
    menu: menuPaisesPerseguidos,
    type: typeProject.international,
    coverImage: 'coverPaisesPerseguidos', //tem que ter o arquivo na pasta, assets/images/coverGuine.png
    projectImage: 'projectPaisesPerseguidos', //tem que ter o arquivo na pasta, assets/images/projectGuine.png
    text: 'Além dos projetos que temos a liberdade de atuar e divulgar nossas ações e métodos de trabalho, o Go&DO® também está atuando em países perseguidos, locais onde o evengelho é condenado e cristãos são mortos. Mantenha os missionários e os países em suas orações diárias. Al[em disso, oferte para que consigamos manter nossos missionários atuando, dando condições e recursos para que vivam e espalhem o amor de Jesus.',
    getInvolved: '',
    support: ''
};
