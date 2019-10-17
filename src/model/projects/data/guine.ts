import {menuProject, project, typeProject} from '@/model/projects/type';

const menuGuine: menuProject = {
    shape: 'amarelo4', //tem que ter o arquivo na pasta, assets/shapes/purple1.png
    textAlignment: 'right',
    width: 140 //defini a quebra de linha dentro do shape, no menu,
};

//Tem que adicionar essa constant dentro do arquivo: model/projects/allProjects.ts

export const guine: project = {
    key: 'guine-bissau', // a key é utilizada na rota(endereço url), não pode ter acentos
    title: 'Guiné-Bissau',
    menu: menuGuine,
    type: typeProject.international,
    coverImage: 'coverGuine', //tem que ter o arquivo na pasta, assets/images/coverGuine.png
    projectImage: 'projectGuine', //tem que ter o arquivo na pasta, assets/images/projectGuine.png
    text: '',
    getInvolved: '',
    support: ''
};
