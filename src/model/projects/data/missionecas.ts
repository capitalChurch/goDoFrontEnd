import {menuProject, project, typeProject} from '@/model/projects/type';

const menuMissionecas: menuProject = {
    shape: 'amarelo', //tem que ter o arquivo na pasta, assets/shapes/amarelo.png
    textAlignment: 'right',
    width: 140 //defini a quebra de linha dentro do shape, no menu
};

export const missionecas: project = {
    key: 'missionecas', // a key é utilizada na rota(endereço url), não pode ter acentos
    title: 'missionecas',
    type: typeProject.national,
    menu: menuMissionecas
};
