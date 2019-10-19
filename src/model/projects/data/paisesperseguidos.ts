import {menuProject, project, typeProject} from '@/model/projects/type';

const menuPaisesPerseguidos: menuProject = {
    shape: 'shapeB2', 
    textAlignment: 'left',
    width: 190 
};

export const paisesperseguidos: project = {
    key: 'paisesperseguidos',
    colorTitle: 'red',
    title: 'Países Perseguidos',
    menu: menuPaisesPerseguidos,
    type: typeProject.international,
    coverImage: 'coverPaisesPerseguidos', 
    projectImage: 'projectPaisesPerseguidos', 
    text: 'Além dos projetos que temos a liberdade de atuar e divulgar nossas ações e métodos de trabalho, o Go&DO® também está atuando em países perseguidos, locais onde o evengelho é condenado e cristãos são mortos. Mantenha os missionários e os países em suas orações diárias. Al[em disso, oferte para que consigamos manter nossos missionários atuando, dando condições e recursos para que vivam e espalhem o amor de Jesus.',
    getInvolved: '',
    support: ''
};
