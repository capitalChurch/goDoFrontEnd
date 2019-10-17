import {menuProject, project, typeProject} from '@/model/projects/type';

const menuHaiti: menuProject = {
    shape: 'purple1', //tem que ter o arquivo na pasta, assets/shapes/purple1.png
};

//Tem que adicionar essa constant dentro do arquivo: model/projects/allProjects.ts

export const haiti: project = {
    key: 'haiti', // a key é utilizada na rota(endereço url), não pode ter acentos
    title: 'haiti',
    type: typeProject.international,
    menu: menuHaiti
};
